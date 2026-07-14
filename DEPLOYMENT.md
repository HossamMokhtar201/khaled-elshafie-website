# خطوات النشر (Deployment)

> ⏳ هذا الملف سيُستكمل بالتفصيل الكامل في **Milestone 6** بعد التحقق الفعلي من حدود خطة Hostinger Cloud Startup (راجع `ARCHITECTURE.md` قسم 4).

## الوضع الحالي (Milestone 0)
- المشروع مبني بـ `output: 'export'` — `npm run build` ينتج مجلد `/out` ثابت بالكامل (HTML/CSS/JS)، صالح للنشر على أي استضافة ملفات ثابتة بدون سيرفر Node.
- معاينة المراجعة: يُنصح بربط الريبو بـ Vercel لمعاينة تلقائية مع كل push (خطوة تُنفَّذ من لوحة تحكم Vercel من قبل مالك المشروع).

## سيُضاف لاحقًا في Milestone 6
1. نتيجة التحقق من دعم Hostinger Cloud Startup لتشغيل Node.js الكامل مقابل الاكتفاء بالـ Static Export.
2. خطوات رفع مجلد `/out` على Hostinger (FTP/File Manager أو Git deploy حسب المتاح).
3. إعداد `robots.txt` و`sitemap.xml` والتأكد من عملهما بعد النشر.
4. نتائج Lighthouse النهائية.
