import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { consultationServices } from "@/lib/content";

export const metadata: Metadata = { title: "بوابة الدفع" };

export default function PaymentPlaceholderPage() {
  return (
    <section className="flex flex-1 items-center justify-center py-24">
      <Container className="max-w-lg text-center">
        <h1 className="font-heading text-2xl font-bold">بوابة الدفع الإلكتروني</h1>
        <p className="mt-4 text-text-secondary">{consultationServices.paymentPlaceholderMessage}</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-sm bg-primary-900 px-6 py-3 font-semibold text-text-inverse hover:bg-primary-700"
        >
          العودة للرئيسية
        </Link>
      </Container>
    </section>
  );
}
