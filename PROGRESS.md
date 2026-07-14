# حالة المايلستونز

| المايلستون | الحالة |
|---|---|
| Milestone 0 — Project Setup & Infrastructure | ✅ مكتمل |
| Milestone 1 — UX Structure | ✅ مكتمل |
| Milestone 2 — Design System Implementation (UI Kit) | ⏳ لم يبدأ |
| Milestone 3 — Page-by-Page UI Application | ⏳ لم يبدأ |
| Milestone 4 — Motion & Interaction Polish | ⏳ لم يبدأ |
| Milestone 5 — Responsive & Accessibility QA | ⏳ لم يبدأ |
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
