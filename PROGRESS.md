# حالة المايلستونز

| المايلستون | الحالة |
|---|---|
| Milestone 0 — Project Setup & Infrastructure | ✅ مكتمل |
| Milestone 1 — UX Structure | ✅ مكتمل |
| Milestone 2 — Design System Implementation (UI Kit) | ✅ مكتمل |
| Milestone 3 — Page-by-Page UI Application | ✅ مكتمل |
| Milestone 4 — Motion & Interaction Polish | ✅ مكتمل |
| Milestone 5 — Responsive & Accessibility QA | ✅ مكتمل |
| Milestone 6 — Performance, SEO & Deployment Readiness | ⏳ لم يبدأ |

## Milestone 0 — تفاصيل الإنجاز
- تهيئة مشروع Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.
- Design Tokens معرّفة في `src/styles/tokens.css` (CSS custom properties) وملف موازٍ `src/config/design-tokens.json`، ومربوطة بـ Tailwind عبر `@theme inline` في `globals.css`.
- بنية `/content/*.json` كاملة ومعبأة بالبيانات الفعلية من `docs/content-copy.md` والـ Placeholders الموثقة.
- الخطوط (Noto Kufi Arabic / IBM Plex Sans Arabic / Aref Ruqaa / Inter) عبر `next/font/google` في `src/lib/fonts.ts`.
- RTL مفعّل على مستوى `<html lang="ar" dir="rtl">`.
- `next.config.ts` مضبوط على `output: 'export'` (Static Export) تمهيدًا لاستضافة Hostinger.
- صفحة `/` مبدئية تؤكد عمل التوكنز والخطوط والمحتوى من JSON.
- `npm run build` ينجح وينتج مجلد `/out` صالح للنشر الثابت.

## Milestone 1 — تفاصيل الإنجاز
- بناء كل الصفحات (24 مسار) بهيكل HTML/JSX دلالي كامل (`landmarks`, headings صحيحة، fieldsets/labels للفورمز): الرئيسية، من هو، البراندات (فهرس + المخزنجي + علي بابا + فرص إدارة الفروع)، الاستشارات (فهرس + حجز 4 خطوات + placeholder دفع)، الكورس، المحتوى (بودكاست/فيديوهات بفلترة)، بنك الاقتباسات، الفرص الاستثمارية (فهرس + عقارات + قالب مشروع ديناميكي `[slug]` + فرص أخرى)، الوظائف، تواصل، الخصوصية، الشروط.
- Header (مع Dropdown للبراندات عبر `details/summary`) وFooter مشتركان في `RootLayout`، مبنيان من `content/site-settings.json`.
- كل المحتوى مسحوب من ملفات `/content/*.json` عبر `src/lib/content.ts` — صفر Hardcoding نصي.
- الفورمز (تواصل، تقديم وظيفة، فرصة إدارة فرع، حجز استشارة، الاهتمام بوحدة عقارية) مبنية بـ React Hook Form + Zod مع رسائل خطأ/نجاح وla submit حقيقي بعد (تنفيذًا لقرار Static Export).
- تقويم الحجز يقرأ من `content/consultations/availability.json` (Mock)، خطوات: يوم → موعد → بيانات العميل → ملخص → دفع (Placeholder) أو تأكيد بدون دفع.
- قالب المشروع العقاري الديناميكي `generateStaticParams` من `projects.json`، مع fallback تلقائي لمشروعين Placeholder غير مكتملي البيانات (بدل صفحة 404).
- تم التحقق يدويًا من عدم وجود أي رابط داخلي معطّل (مطابقة كل `href` في الكود مع المسارات المبنية فعليًا)، و`npm run build` و`npm run lint` ينجحان بدون أخطاء لكل الصفحات الـ24.

## Milestone 2 — تفاصيل الإنجاز
- مكتبة كومبوننتس معزولة بالتصميم النهائي بالكامل حسب قسم 3.6: `Button` (Primary/Secondary/Ghost/Link × 3 أحجام)، `Badge`، `Alert`، كروت (`BrandCard`, `ProjectCard`, `VideoCard`, `QuoteCard`, `TestimonialCard`)، حقول فورمز (`Input`, `Textarea`, `Select`, `FileUpload`) بحالات focus/error، `DateTimePicker`، `Modal`، `Drawer`، `Tabs`، `StatsCounter`، `Timeline`.
- Header أصبح Responsive بالكامل: قائمة Desktop مع Dropdown، وDrawer للموبايل (باستخدام كومبوننت `Drawer` نفسه)، مع Sticky + خلفية Blur.
- صفحة `/styleguide` الداخلية تعرض كل الكومبوننتس أعلاه بحالاتها المختلفة (بما فيها Disabled) للمراجعة الداخلية.
- تم التحقق بصريًا فعليًا عبر تشغيل `next dev` وتصوير الصفحة الرئيسية و`/styleguide` على Desktop (1440px) — الألوان، التايبوجرافي (Noto Kufi Arabic / IBM Plex Sans Arabic / Aref Ruqaa)، RTL، وكل الكومبوننتس تظهر مطابقة لمواصفات قسم 3.
- `npm run build` و`npm run lint` ينجحان بدون أخطاء (26 مسارًا الآن بعد إضافة `/styleguide`).

## Milestone 3 — تفاصيل الإنجاز
- استبدال كل الأزرار/الكروت/الاقتباسات المبنية يدويًا في الصفحات بكومبوننتس `Button`, `BrandCard`, `ProjectCard`, `VideoCard`, `QuoteCard`, `StatsCounter`, `Timeline` من نظام التصميم (الرئيسية، من هو، البراندات، الاستشارات، المحتوى، بنك الاقتباسات، الفرص الاستثمارية، الكورس، صفحة الدفع Placeholder).
- إضافة زر "مشاركة" فعلي (نسخ للحافظة) على `QuoteCard` في صفحة `/quotes`.
- توحيد كروت الفيديو والبودكاست (`VideoCard`) بين الرئيسية وصفحة `/content` وأرشيف الاستشارات، بما فيها حالة Placeholder.
- **إصلاح خطأ حقيقي اكتُشف أثناء الاختبار الفعلي في المتصفح**: صفحة تفاصيل المشروع العقاري الديناميكي كانت تفشل (404) في وضع dev لأن Next.js 16 يجعل `params` كائن `Promise` يجب انتظاره بـ `await` بدل الوصول المتزامن؛ تم تصحيح `generateMetadata` والصفحة نفسها ليكونا `async` وينتظرا `params`.
- تم التحقق البصري الفعلي (`next dev` + لقطات شاشة Desktop 1440px) لصفحات: الرئيسية، الاستشارات، تفاصيل مشروع بيت الوطن، بنك الاقتباسات، المحتوى — كلها متسقة بصريًا مع `/styleguide`.
- `npm run build` و`npm run lint` ينجحان بدون أخطاء لكل الصفحات الـ26.

## Milestone 4 — تفاصيل الإنجاز
- كومبوننت `Reveal` (Intersection Observer، مرة واحدة فقط) مطبّق على كل سكشنات المحتوى الرئيسية عبر كل الصفحات الـ21 المتبقية (بالإضافة للرئيسية ومن هو)، بما فيها Stagger delay للكروت في الشبكات (البراندات، المشاريع، الفيديوهات، الاقتباسات).
- `StatsCounter` أصبح يحسب تصاعديًا (Count-up) فعليًا عند الدخول للـ viewport لأول مرة، باستخدام IntersectionObserver + requestAnimationFrame و easing متسق مع `--ease-standard`.
- Header: يختفي عند التمرير لأسفل ويظهر فورًا عند التمرير لأعلى (hide-on-scroll)، مع ظل خفيف بعد أول شاشة — تم التحقق منه فعليًا بالتصوير أثناء التمرير.
- زر `Button` (Primary/Secondary): تعبئة "Fill Sweep" تتحرك من اتجاه البداية المناسب لـ RTL عند الـ hover، بدل تغيير لون مباشر فقط.
- `scroll-behavior: smooth` مفعّل على مستوى `<html>` (Milestone 0)، والانتقالات الدقيقة (hover/focus) بمدة 200-250ms، وانتقالات السكشن بمدة 500-700ms، عبر متغيرات `--duration-micro` / `--duration-section`.
- **احترام `prefers-reduced-motion` تم اختباره فعليًا** (ليس افتراضًا نظريًا): عبر Playwright بسياق `reducedMotion: 'reduce'` على كل الصفحات — لا أخطاء Console، والمحتوى يظهر فورًا بدون انتظار حركة.
- **إصلاح خطأين حقيقيين اكتُشفا أثناء الاختبار الفعلي بالمتصفح (Hydration Mismatch)**: كل من `StatsCounter` و`Reveal` كانا يستخدمان قيمة `useReducedMotion()` (من framer-motion) بشكل متزامن أثناء أول render لتحديد الحالة الابتدائية أو نوع العنصر المعروض، مما يسبب اختلاف بين HTML السيرفر ونتيجة أول render على العميل. تم حل المشكلة بجعل الحالة الابتدائية ثابتة ومطابقة للسيرفر دائمًا، وتأجيل أي قرار متعلق بتفضيل الحركة إلى داخل `useEffect` (بعد اكتمال الـ hydration).
- تم التحقق من عدم وجود أي console/hydration errors على كل الصفحات الـ21 (وضعي الحركة العادي و`reduced motion`) عبر Playwright.
- `npm run build` و`npm run lint` ينجحان بدون أخطاء. تمت إضافة `prettier` كأداة تنسيق دائمة (`npm run format`) بعد إعادة صياغة الكود المُولَّد آليًا لتوحيد المسافات.

## Milestone 5 — تفاصيل الإنجاز
- فحص آلي شامل (Playwright) لكل الصفحات الـ21 على ثلاثة مقاسات: موبايل 375px، تابلت 768px، ديسكتوب 1440px — **صفر Horizontal Overflow** على أي صفحة/مقاس.
- تأكيد عدم وجود أي CSS اتجاهي فيزيائي (`ml-`, `mr-`, `pl-`, `pr-`, `text-left`, `text-right`, `left-`, `right-`) في الكود بالكامل — كل شيء مبني بخصائص RTL منطقية (`ms-`, `me-`, `ps-`, `pe-`, `border-e`, `text-start`...) منذ البداية.
- فحص إمكانية الوصول الآلي (axe-core) عبر كل الصفحات — **اكتُشفت مشكلتان حقيقيتان وتم حلّهما فعليًا (وليس توثيقهما فقط):**
  1. **تباين ألوان غير كافٍ (`color-contrast`)**: توكن `--color-accent-600` (`#9C7A34`) المستخدم كلون نص لكل روابط الموقع (`زور البراند ←`, `كل المشاريع ←`...) كان يعطي نسبة تباين ~3.3-4.0 فقط على الخلفيات الفاتحة (المطلوب WCAG AA: 4.5). كذلك `--color-text-muted` (`#8A8577`) المستخدم في نصوص Placeholder والتسميات الثانوية كان يعطي ~3.07. تم حساب أقرب درجتين أغمق من نفس درجة اللون (الذهبي/الرمادي الدافئ) تحققان 4.5:1 على كل الخلفيات الفعلية المستخدمة في الموقع (`#FFFFFF`, `#F7F5F0`, `#EFEAE0`, وحتى خلفية الـ Badge شبه الشفافة)، وتم تحديث `tokens.css` و`design-tokens.json` معًا — إصلاح واحد في مصدر الحقيقة انعكس تلقائيًا على كل استخدامات اللون في الموقع (34 موضعًا) بدون لمس أي Component.
  2. **بنية `<dl>` غير صحيحة دلاليًا**: كومبوننت `StatsCounter` كان يضع وسم `<p>` داخل `<div>` جوه `<dl>`، وهو تركيب غير مسموح به في HTML. تم تحويله لعنصر `<dd>` ثانٍ بدل `<p>`.
- بعد الإصلاحين: **صفر Violations من فئة serious/critical** على كل الصفحات الـ21.
- التأكد من عمل التنقل بلوحة المفاتيح (Tab) بترتيب منطقي و`focus outline` ظاهر على كل عناصر الهيدر (روابط + Dropdown البراندات).
- `npm run build` و`npm run lint` ينجحان بدون أخطاء بعد كل التعديلات.
