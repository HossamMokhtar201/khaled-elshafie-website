import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import ContentTabs from "@/components/content-hub/ContentTabs";
import { podcastEpisodes, featuredVideos } from "@/lib/content";

export const metadata: Metadata = { title: "المحتوى" };

export default function ContentHubPage() {
  return (
    <>
      <PageHero
        title="المحتوى"
        description="بودكاست وفيديوهات خالد الشافعي في التجارة، التسويق، وإدارة الأعمال."
      />
      <section className="py-16">
        <Container>
          <Reveal>
            <ContentTabs
              podcastEpisodes={podcastEpisodes}
              featuredVideos={featuredVideos}
            />
          </Reveal>
        </Container>
      </section>
      <section className="border-t border-border bg-primary-900 py-12 text-center text-text-inverse">
        <Container>
          <Reveal>
            <p className="mb-4 text-lg">عجبك الكلام؟ احجز استشارتك</p>
            <Button href="/consultations/book" variant="primary">
              احجز استشارتك الآن
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
