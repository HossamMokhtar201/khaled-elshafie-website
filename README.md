# موقع خالد الشافعي — Khaled ElShafie Personal Business Hub

منصة تسويقية/محتوى شاملة للشيخ خالد الشافعي — تاجر تجزئة وخبير سوق مصري ومستشار أعمال، صاحب براندي "المخزنجي" و"علي بابا"، وشريك في مشاريع عقارية بنظام "اتحاد الملاك".

هذه المرحلة تغطي بناء الفرونت إند التسويقي/المحتوى الكامل فقط (بدون باك إند حقيقي) — راجع `/docs` للمواصفات الكاملة (`claude-code-master-brief.md`, `site-structure-blueprint.md`, `content-copy.md`).

## التشغيل محليًا

```bash
npm install
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000).

## البناء (Static Export)

```bash
npm run build
```

الموقع مبني كـ Next.js App Router مع `output: 'export'` — الناتج في مجلد `/out` جاهز للنشر على أي استضافة ملفات ثابتة. راجع `ARCHITECTURE.md` و`DEPLOYMENT.md` للتفاصيل.

## بنية المشروع

- `src/app/` — صفحات ومسارات App Router.
- `src/components/` — مكونات الواجهة القابلة لإعادة الاستخدام.
- `src/lib/` — أدوات مساعدة (تحميل المحتوى، الخطوط...).
- `src/styles/tokens.css` — Design Tokens كـ CSS Custom Properties.
- `src/config/design-tokens.json` — نفس التوكنز بصيغة JSON (مصدر الحقيقة للداشبورد لاحقًا).
- `content/` — كل نصوص وبيانات الموقع كملفات JSON (بدلًا من Hardcoding داخل الكومبوننتس).

## التوثيق

- `PROGRESS.md` — حالة كل مايلستون.
- `ASSUMPTIONS.md` — كل افتراض اتخذ بسبب نقص بيانات.
- `ARCHITECTURE.md` — القرارات التقنية.
- `DEPLOYMENT.md` — خطوات النشر النهائي.
