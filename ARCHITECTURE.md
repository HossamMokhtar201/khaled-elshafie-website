# القرارات التقنية (Architecture)

## 1) Tech Stack
- **Next.js 16 (App Router) + TypeScript**، مبني بـ Turbopack (الإعداد الافتراضي للنسخة الحالية).
- **Tailwind CSS v4** — لا يوجد `tailwind.config.js` تقليدي؛ Tailwind v4 يُعرَّف عبر توجيه `@theme` داخل CSS. تم ربط كل قيم الثيم بـ `@theme inline` في `src/app/globals.css`، والتي بدورها تشير لمتغيرات CSS المعرّفة في `src/styles/tokens.css` — **وليس أرقام مباشرة** — حتى تبقى `tokens.css` هي مصدر الحقيقة الوحيد المطلوب في البريف (قسم 3.1).
- **الحركة (Motion)**: `IntersectionObserver` الأصلي مباشرة (بدون مكتبة خارجية) لكل من الـ Scroll Reveal (`Reveal`) وعدّاد الإحصائيات (`StatsCounter`). تم تجربة `framer-motion` في البداية (Milestone 4) لكن استخدامها تسبب في مشكلتين حقيقيتين (Hydration Mismatch بسبب قراءة `useReducedMotion()` بشكل متزامن أثناء أول render)، وبعد حلّهما تبيّن أن الاعتماد الوحيد المتبقي عليها (`StatsCounter`) بسيط بما يكفي لتنفيذه بـ API المتصفح القياسي مباشرة — فتمت إزالة المكتبة بالكامل في Milestone 6 لتقليل حجم الحزمة (Bundle) وتبسيط الكود.
- **React Hook Form + Zod** لإدارة والتحقق من الفورمز (الحجز، التواصل، التقديم للوظائف...).

## 2) Design Tokens — مصدر الحقيقة المزدوج
- `src/styles/tokens.css`: القيم الفعلية كـ CSS Custom Properties، تُستخدم في كل مكان عبر Tailwind (`@theme inline`) أو مباشرة (`var(--color-...)`).
- `src/config/design-tokens.json`: نفس القيم بصيغة JSON، مخصص ليقرأه/يكتبه الداشبورد لاحقًا. حاليًا الملفان يُحدَّثان يدويًا معًا؛ عند بناء الداشبورد، الخيار الأسهل تقنيًا هو توليد `tokens.css` أوتوماتيكيًا من `design-tokens.json` وقت الـ build (سكريبت بسيط)، لأن الموقع Static Export بالكامل ولا يوجد سيرفر وقت التشغيل لحقن متغيرات عبر `/api/design-tokens`.
- **ممنوع تمامًا** أي لون/خط/مسافة Hardcoded داخل أي Component — الالتزام بهذا القيد مطلوب طوال باقي المايلستونز.

## 3) بنية المحتوى (`/content/*.json`)
كل نصوص وبيانات الموقع في ملفات JSON مستقلة عن الكومبوننتس (قسم 5 من البريف)، تُقرأ عبر `src/lib/content.ts` (استيراد ثابت وقت الـ build، مناسب للـ Static Export). عند بناء الداشبورد لاحقًا، كل شاشة فيه ستكون CRUD على نفس بنية الملفات هذه (أو جداول بنفس الـ schema)، **بدون أي إعادة بناء للفرونت إند**.

## 4) قرار الاستضافة — Static Export
تنفيذًا لقسم 6.1 من البريف:
- تم ضبط `next.config.ts` على `output: 'export'` منذ Milestone 0.
- `images.unoptimized: true` مفعّل لأن Image Optimization الافتراضي لـ `next/image` غير مدعوم مع Static Export بدون Loader مخصص لخدمة خارجية (Cloudinary وغيره) — وهو غير متاح في هذه المرحلة.
- **الأجزاء غير القابلة لتكون Static بالكامل** (ستُبنى في المايلستونز القادمة) وحلها المخطط:
  - **تقويم/نظام حجز الاستشارات**: تفاعلي بالكامل على العميل (Client Component) يقرأ من `content/consultations/availability.json` وقت الـ build. الحجز الفعلي (إرسال البيانات) سيكون شكليًا في هذه المرحلة (Client-side state + رسالة نجاح)، وسيُربط لاحقًا بـ API خارجي (Headless) عند بناء الباك إند، دون تغيير في شكل الصفحة.
  - **فورمز التواصل/التقديم للوظائف/فرص الفروع**: React Hook Form + Zod للتحقق من جهة العميل فقط الآن؛ لا يوجد submit حقيقي — رسالة نجاح Placeholder توضح أن الإرسال الفعلي "قيد التفعيل".
  - **بوابة الدفع**: صفحة Placeholder احترافية `/consultations/book/payment-placeholder` بدون أي تكامل حقيقي.
- **القرار النهائي بخصوص Hostinger** (Node الكامل مقابل Static): **تم حسمه — Static Export**. التفاصيل الكاملة والافتراض الموثَّق (لعدم توفر بيانات دخول فعلية لحساب Hostinger لهذه البيئة) في `DEPLOYMENT.md` قسم 1.

## 5) RTL
- `<html lang="ar" dir="rtl">` على مستوى `RootLayout`.
- كل الكومبوننتس مبنية بخصائص RTL منطقية فقط (`ms-`, `me-`, `ps-`, `pe-`, `border-e`, `text-start`...) بدلًا من الخصائص الفيزيائية (`ml-`, `mr-`, `pl-`, `pr-`, `text-left`, `text-right`) — تم التحقق من ذلك آليًا (Milestone 5): لا يوجد أي استخدام لخاصية فيزيائية في الكود بالكامل.
- الأسهم الاتجاهية في النصوص (مثل "←" في "زور البراند ←") تُستخدم كرمز نصي ثابت يعبّر عن اتجاه "التقدّم للأمام" في القراءة من اليمين لليسار، لا كأيقونة SVG تحتاج قلب اتجاه.

## 6) الأداء والـ SEO (Milestone 6)
- `app/robots.ts` و`app/sitemap.ts` (كلاهما `export const dynamic = "force-static"` ليعملا مع `output: 'export'`) يولّدان `robots.txt` و`sitemap.xml` وقت الـ build، بما فيهما كل مسارات المشاريع العقارية الديناميكية.
- `metadataBase` مضبوط من `src/lib/site-url.ts` (Placeholder دومين — راجع `ASSUMPTIONS.md`)، وكل صفحة تصدّر `metadata` خاصة بها (title + description)، مع Open Graph وTwitter Card عامّين من `RootLayout`.
- صفحة `/styleguide` وصفحة `/consultations/book/payment-placeholder` مستثناتان من الفهرسة عبر `robots.txt` (الأولى داخلية فقط، الثانية بلا محتوى فعلي بعد).
- نتائج Lighthouse الكاملة وتفسيرها في `DEPLOYMENT.md` قسم 5.

## 7) Deployment Preview
- الريبو على GitHub، والنشر المؤقت للمراجعة على Vercel (preview تلقائي مع كل push) — يُفعَّل من إعدادات مالك الريبو بربط المستودع بحساب Vercel (خطوة خارج نطاق أدوات Claude Code نفسه، تُوثَّق كخطوة يدوية في `DEPLOYMENT.md`).
