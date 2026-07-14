import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { siteSettings, mokhzangy } from "@/lib/content";

export const metadata: Metadata = { title: "تواصل معنا" };

export default function ContactPage() {
  const mainBranch = mokhzangy.branches[0];

  return (
    <>
      <PageHero
        title="تواصل معنا"
        description="لأي استفسار عن الاستشارات، البراندات، أو الفرص الاستثمارية، تقدر تتواصل معانا مباشرة."
      />

      <section className="py-16">
        <Container className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold">نموذج التواصل</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold">بيانات التواصل</h2>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <a href={siteSettings.contact.facebookUrl} className="text-accent-600 hover:underline">
                  فيسبوك — {siteSettings.contact.facebookPageName}
                </a>
              </li>
              <li>
                <a href={`tel:${siteSettings.contact.alibabaMallawiWhatsapp}`} className="text-accent-600 hover:underline">
                  واتساب: {siteSettings.contact.alibabaMallawiWhatsapp}
                </a>
              </li>
            </ul>

            <h2 className="mb-4 mt-8 font-heading text-2xl font-bold">أقرب فرع</h2>
            <div className="rounded-md border border-border bg-surface p-4">
              <h3 className="font-heading font-bold">{mainBranch.name}</h3>
              <p className="mt-1 text-sm text-text-secondary">{mainBranch.address}</p>
              <a href={`tel:${mainBranch.phone}`} className="mt-1 block text-sm text-accent-600">
                {mainBranch.phone}
              </a>
            </div>
            <div
              className="mt-4 flex aspect-video items-center justify-center rounded-md border border-dashed border-border-strong bg-bg-alt text-sm text-text-muted"
              role="img"
              aria-label="خريطة مصغرة (Placeholder)"
            >
              خريطة مصغرة (Placeholder)
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
