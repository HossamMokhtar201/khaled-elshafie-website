# القرارات التقنية (Architecture)

## 1) Tech Stack
- **Next.js 16 (App Router) + TypeScript**، مبني بـ Turbopack (الإعداد الافتراضي للنسخة الحالية).
- **Tailwind CSS v4** — لا يوجد `tailwind.config.js` تقليدي؛ Tailwind v4 يُعرَّف عبر توجيه `@theme` داخل CSS. تم ربط كل قيم الثيم بـ `@theme inline` في `src/app/globals.css`، والتي بدورها تشير لمتغيرات CSS المعرّفة في `src/styles/tokens.css` — **وليس أرقام مباشرة** — حتى تبقى `tokens.css` هي مصدر الحقيقة الوحيد المطلوب في البريف (قسم 3.1).
- **Framer Motion** لتأثيرات الحركة (سيُستخدم بدءًا من Milestone 4).
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
- **القرار النهائي بخصوص Hostinger** (Node الكامل مقابل Static): يُحسم ويُوثَّق في `DEPLOYMENT.md` ضمن Milestone 6، بعد التحقق الفعلي من حدود خطة Hostinger Cloud Startup. الافتراضي المطبَّق الآن (Static Export) متوافق مع أي خطة استضافة أساسية بغض النظر عن نتيجة هذا التحقق.

## 5) RTL
- `<html lang="ar" dir="rtl">` على مستوى `RootLayout`.
- الأيقونات ذات الاتجاه (أسهم، الخ) ستُبنى RTL-aware ابتداءً من Milestone 2/3 (قلب اتجاه الأيقونة عبر `rtl:rotate-180` أو مكافئها).

## 6) Deployment Preview
- الريبو على GitHub، والنشر المؤقت للمراجعة على Vercel (preview تلقائي مع كل push) — يُفعَّل من إعدادات مالك الريبو بربط المستودع بحساب Vercel (خطوة خارج نطاق أدوات Claude Code نفسه، تُوثَّق كخطوة يدوية في `DEPLOYMENT.md`).
