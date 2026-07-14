import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ContentTabs from "@/components/content-hub/ContentTabs";
import { podcastEpisodes, featuredVideos } from "@/lib/content";

export const metadata: Metadata = { title: "المحتوى" };

export default function ContentHubPage() {
  return (
    <>
      <PageHero title="المحتوى" description="بودكاست وفيديوهات خالد الشافعي في التجارة، التسويق، وإدارة الأعمال." />
      <section className="py-16">
        <Container>
          <ContentTabs podcastEpisodes={podcastEpisodes} featuredVideos={featuredVideos} />
        </Container>
      </section>
      <section className="border-t border-border bg-primary-900 py-12 text-center text-text-inverse">
        <Container>
          <p className="mb-4 text-lg">عجبك الكلام؟ احجز استشارتك</p>
          <Link
            href="/consultations/book"
            className="inline-block rounded-sm bg-accent-500 px-6 py-3 font-semibold text-primary-900 hover:bg-accent-400"
          >
            احجز استشارتك الآن
          </Link>
        </Container>
      </section>
    </>
  );
}
