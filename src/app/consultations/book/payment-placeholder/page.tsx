import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { consultationServices } from "@/lib/content";

export const metadata: Metadata = { title: "بوابة الدفع" };

export default function PaymentPlaceholderPage() {
  return (
    <section className="flex flex-1 items-center justify-center py-24">
      <Container className="max-w-lg text-center">
        <h1 className="font-heading text-2xl font-bold">بوابة الدفع الإلكتروني</h1>
        <p className="mt-4 text-text-secondary">{consultationServices.paymentPlaceholderMessage}</p>
        <Button href="/" variant="primary" className="mt-8">
          العودة للرئيسية
        </Button>
      </Container>
    </section>
  );
}
