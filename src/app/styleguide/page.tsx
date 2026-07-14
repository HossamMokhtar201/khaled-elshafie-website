"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Alert from "@/components/ui/Alert";
import Modal from "@/components/ui/Modal";
import Drawer from "@/components/ui/Drawer";
import Tabs from "@/components/ui/Tabs";
import StatsCounter from "@/components/ui/StatsCounter";
import DateTimePicker from "@/components/ui/DateTimePicker";
import Timeline from "@/components/ui/Timeline";
import Input from "@/components/ui/form/Input";
import Textarea from "@/components/ui/form/Textarea";
import Select from "@/components/ui/form/Select";
import FileUpload from "@/components/ui/form/FileUpload";
import BrandCard from "@/components/cards/BrandCard";
import ProjectCard from "@/components/cards/ProjectCard";
import VideoCard from "@/components/cards/VideoCard";
import QuoteCard from "@/components/cards/QuoteCard";
import TestimonialCard from "@/components/cards/TestimonialCard";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-12 first:border-t-0">
      <h2 className="mb-6 font-heading text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

export default function StyleguidePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Container className="py-16">
      <h1 className="mb-2 font-heading text-4xl font-extrabold">دليل التصميم (Styleguide)</h1>
      <p className="mb-8 text-text-secondary">
        صفحة داخلية للمراجعة فقط — تعرض كل مكونات نظام التصميم بحالاتها المختلفة.
      </p>

      <Section title="الألوان">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["primary-900", "var(--color-primary-900)"],
            ["primary-700", "var(--color-primary-700)"],
            ["primary-500", "var(--color-primary-500)"],
            ["accent-500", "var(--color-accent-500)"],
            ["accent-400", "var(--color-accent-400)"],
            ["bg-alt", "var(--color-bg-alt)"],
            ["success", "var(--color-success)"],
            ["danger", "var(--color-danger)"],
          ].map(([name, value]) => (
            <div key={name} className="overflow-hidden rounded-md border border-border">
              <div className="h-16" style={{ backgroundColor: value }} />
              <p className="p-2 text-xs">{name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="التايبوجرافي">
        <p className="font-heading text-3xl font-bold">عنوان بخط Noto Kufi Arabic</p>
        <p className="mt-2 text-base">نص أساسي بخط IBM Plex Sans Arabic — قراءة مريحة رسمية.</p>
        <p className="mt-2 font-quote text-2xl text-primary-800">جملة مقتبسة بخط Aref Ruqaa</p>
      </Section>

      <Section title="الأزرار (Buttons)">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">Primary SM</Button>
          <Button variant="primary" size="md">Primary MD</Button>
          <Button variant="primary" size="lg">Primary LG</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="البادجات (Badges)">
        <div className="flex flex-wrap gap-3">
          <Badge tone="neutral">محايد</Badge>
          <Badge tone="success">متاح</Badge>
          <Badge tone="warning">محجوز جزئيًا</Badge>
          <Badge tone="danger">مكتمل</Badge>
        </div>
      </Section>

      <Section title="التنبيهات (Alerts)">
        <div className="grid gap-3 sm:grid-cols-3">
          <Alert tone="success">تم الحجز بنجاح.</Alert>
          <Alert tone="warning">سعر تجريبي — قابل للتعديل.</Alert>
          <Alert tone="danger">حدث خطأ، حاول مرة أخرى.</Alert>
        </div>
      </Section>

      <Section title="الكروت (Cards)">
        <div className="grid gap-6 sm:grid-cols-2">
          <BrandCard name="المخزنجي" tagline="ملابس وأحذية بأسعار الجملة مباشرة." href="/brands/mokhzangy" />
          <ProjectCard name="بيت الوطن" location="التجمع الخامس" status="available" href="/investments/real-estate/beit-elwatan-tg5" />
          <VideoCard title="الخلطة السحرية لنجاح مشروعك" description="حلقة بودكاست" href="https://www.youtube.com/watch?v=2a_qPa-66mY" />
          <VideoCard title="فيديو مميز (قريبًا)" isPlaceholder />
          <QuoteCard text="شيل على قدك واطلع السلم واحدة واحدة" context="فلسفته في النمو التدريجي." />
          <TestimonialCard quote="استشارة غيّرت طريقة تفكيري في التوسع." name="عميل" role="صاحب مشروع تجزئة" />
        </div>
      </Section>

      <Section title="حقول الفورمز">
        <div className="grid max-w-md gap-4">
          <Input id="sg-name" label="الاسم" placeholder="اكتب اسمك" />
          <Input id="sg-error" label="حقل به خطأ" error="هذا الحقل مطلوب" />
          <Textarea id="sg-textarea" label="رسالة" placeholder="اكتب رسالتك" />
          <Select id="sg-select" label="اختر">
            <option>خيار 1</option>
            <option>خيار 2</option>
          </Select>
          <FileUpload id="sg-file" label="رفع ملف" />
        </div>
      </Section>

      <Section title="Date/Time Picker">
        <DateTimePicker
          days={[
            { date: "2026-07-20", available: true, slots: ["11:00", "16:00"] },
            { date: "2026-07-21", available: true, slots: ["13:00", "18:00"] },
            { date: "2026-07-22", available: false, slots: [] },
          ]}
        />
      </Section>

      <Section title="Tabs">
        <Tabs
          tabs={[
            { id: "a", label: "بودكاست", content: <p className="text-text-secondary">محتوى تبويب البودكاست</p> },
            { id: "b", label: "فيديوهات", content: <p className="text-text-secondary">محتوى تبويب الفيديوهات</p> },
          ]}
        />
      </Section>

      <Section title="Stats Counter">
        <dl className="flex flex-wrap gap-10">
          <StatsCounter value={30} suffix="+" label="سنة خبرة" />
          <StatsCounter value={35} label="فرعًا" />
          <StatsCounter value={600} suffix="K+" label="متابع" />
        </dl>
      </Section>

      <Section title="Timeline">
        <Timeline
          items={[
            { year: "1993", title: "التخرج", description: "بداية العمل في قطاع السياحة." },
            { year: "2019", title: "تأسيس المخزنجي", description: "من مخزن تحت الأرض." },
          ]}
        />
      </Section>

      <Section title="Modal / Drawer">
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => setModalOpen(true)}>
            فتح Modal
          </Button>
          <Button variant="secondary" onClick={() => setDrawerOpen(true)}>
            فتح Drawer
          </Button>
        </div>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="مثال Modal">
          <p className="text-text-secondary">محتوى نافذة منبثقة للمراجعة السريعة.</p>
        </Modal>
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="مثال Drawer">
          <p className="text-text-secondary">محتوى درج جانبي.</p>
        </Drawer>
      </Section>
    </Container>
  );
}
