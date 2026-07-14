# حالة المايلستونز

| المايلستون | الحالة |
|---|---|
| Milestone 0 — Project Setup & Infrastructure | ✅ مكتمل |
| Milestone 1 — UX Structure | ⏳ لم يبدأ |
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
