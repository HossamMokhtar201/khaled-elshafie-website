import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import BookingFlow from "@/components/booking/BookingFlow";
import { consultationAvailability, consultationServices } from "@/lib/content";

export const metadata: Metadata = { title: "احجز استشارتك" };

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        title="احجز استشارتك"
        description="اختر اليوم والموعد المناسبين لك وبيانات التواصل."
      />
      <section className="py-16">
        <Container>
          <Reveal>
            <BookingFlow
              availability={consultationAvailability}
              steps={consultationServices.bookingSteps}
              successMessage={consultationServices.successMessage}
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
