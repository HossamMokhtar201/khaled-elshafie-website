import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import VideoCard from "@/components/cards/VideoCard";
import { consultationServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "الاستشارات",
  description: consultationServices.intro,
};

export default function ConsultationsPage() {
  return (
    <>
      <PageHero title="دردشة مع خالد — الاستشارات" description={consultationServices.intro} />

      <section aria-labelledby="areas-heading" className="py-16">
        <Container>
          <h2 id="areas-heading" className="mb-8 font-heading text-3xl font-bold">
            مجالات الاستشارة
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2">
            {consultationServices.areas.map((area) => (
              <li key={area.title} className="rounded-md border border-border bg-surface p-5">
                <h3 className="font-heading text-lg font-bold">{area.title}</h3>
                <p className="mt-2 text-text-secondary">{area.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="session-types-heading" className="border-t border-border bg-bg-alt py-16">
        <Container>
          <h2 id="session-types-heading" className="mb-8 font-heading text-3xl font-bold">
            أنواع الجلسات
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2">
            {consultationServices.sessionTypes.map((session) => (
              <li key={session.id} className="rounded-md border border-border bg-surface p-5">
                <h3 className="font-heading text-lg font-bold">{session.title}</h3>
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
          <Button href="/consultations/book" variant="primary" className="mt-8">
            احجز استشارتك الآن
          </Button>
        </Container>
      </section>

      <section aria-labelledby="archive-heading" className="border-t border-border py-16">
        <Container>
          <h2 id="archive-heading" className="mb-8 font-heading text-3xl font-bold">
            أرشيف الاستشارات الموثقة
          </h2>
          <ul className="grid gap-6 sm:grid-cols-3">
            {Array.from({ length: consultationServices.archivePlaceholderCount }).map((_, i) => (
              <li key={i}>
                <VideoCard title="فيديو استشارة (قريبًا)" isPlaceholder />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
