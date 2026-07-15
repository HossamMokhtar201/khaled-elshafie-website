import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import NumberedProcess from "@/components/ui/NumberedProcess";
import VideoCard from "@/components/cards/VideoCard";
import { consultationServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "الاستشارات",
  description: consultationServices.intro,
};

const bookingStepDescriptions = [
  "تصفح الأيام المتاحة واختر اليوم المناسب لك.",
  "بعد اختيار اليوم، هتظهرلك الأوقات المتاحة فيه — اختر الموعد الأنسب.",
  "املأ بياناتك الأساسية وملاحظة مختصرة عن اللي محتاج تستشير فيه.",
  "راجع ملخص حجزك وأكّد — هيتم التواصل معك لتأكيد الموعد.",
];

const bookingProcessSteps = consultationServices.bookingSteps.map(
  (label, i) => ({
    number: String(i + 1).padStart(2, "0"),
    title: label,
    description: bookingStepDescriptions[i],
  }),
);

export default function ConsultationsPage() {
  return (
    <>
      <PageHero
        title="دردشة مع خالد — الاستشارات"
        description={consultationServices.intro}
      />

      <section aria-labelledby="areas-heading" className="py-16">
        <Container>
          <Reveal>
            <h2
              id="areas-heading"
              className="mb-8 font-heading text-3xl font-bold"
            >
              مجالات الاستشارة
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2">
              {consultationServices.areas.map((area) => (
                <li
                  key={area.title}
                  className="rounded-md border border-border bg-surface p-5"
                >
                  <h3 className="font-heading text-lg font-bold">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-text-secondary">{area.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="session-types-heading"
        className="border-t border-border bg-bg-alt py-16"
      >
        <Container>
          <Reveal>
            <h2
              id="session-types-heading"
              className="mb-8 font-heading text-3xl font-bold"
            >
              أنواع الجلسات
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2">
              {consultationServices.sessionTypes.map((session) => (
                <li
                  key={session.id}
                  className="rounded-md border border-border bg-surface p-5"
                >
                  <h3 className="font-heading text-lg font-bold">
                    {session.title}
                  </h3>
                  <p className="mt-1 text-text-secondary">{session.duration}</p>
                  <p className="mt-1 font-semibold text-accent-600">
                    {session.price}
                    {session.isPlaceholder && (
                      <span className="ms-2 text-xs font-normal text-text-muted">
                        (سعر تجريبي — قابل للتعديل)
                      </span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
            <Button
              href="/consultations/book"
              variant="primary"
              className="mt-8"
            >
              احجز استشارتك الآن
            </Button>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="how-to-book-heading"
        className="border-t border-border py-20"
      >
        <Container>
          <Reveal>
            <h2
              id="how-to-book-heading"
              className="mb-12 font-heading text-3xl font-extrabold sm:text-4xl"
            >
              إزاي تحجز استشارتك؟
            </h2>
          </Reveal>
          <NumberedProcess steps={bookingProcessSteps} />
        </Container>
      </section>

      <section
        aria-labelledby="archive-heading"
        className="border-t border-border py-16"
      >
        <Container>
          <Reveal>
            <h2
              id="archive-heading"
              className="mb-8 font-heading text-3xl font-bold"
            >
              أرشيف الاستشارات الموثقة
            </h2>
            <ul className="grid gap-6 sm:grid-cols-3">
              {Array.from({
                length: consultationServices.archivePlaceholderCount,
              }).map((_, i) => (
                <li key={i}>
                  <VideoCard title="فيديو استشارة (قريبًا)" isPlaceholder />
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
