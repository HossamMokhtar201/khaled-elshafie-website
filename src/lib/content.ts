import siteSettings from "@content/site-settings.json";
import stats from "@content/stats.json";
import quotes from "@content/quotes.json";
import timeline from "@content/timeline.json";
import aboutContent from "@content/about.json";
import homeContent from "@content/home.json";
import mokhzangy from "@content/brands/mokhzangy.json";
import alibaba from "@content/brands/alibaba.json";
import consultationServices from "@content/consultations/services.json";
import consultationAvailability from "@content/consultations/availability.json";
import podcastEpisodes from "@content/content-hub/podcast.json";
import featuredVideos from "@content/content-hub/videos.json";
import realEstateProjects from "@content/real-estate/projects.json";
import beitElwatan from "@content/real-estate/beit-elwatan-tg5.json";
import unionSystem from "@content/real-estate/union-system.json";
import investmentOpportunities from "@content/investments-opportunities.json";
import careers from "@content/careers.json";
import courses from "@content/courses.json";
import legal from "@content/legal.json";

export {
  siteSettings,
  stats,
  quotes,
  timeline,
  aboutContent,
  homeContent,
  mokhzangy,
  alibaba,
  consultationServices,
  consultationAvailability,
  podcastEpisodes,
  featuredVideos,
  realEstateProjects,
  beitElwatan,
  unionSystem,
  investmentOpportunities,
  careers,
  courses,
  legal,
};

const realEstateProjectDetails: Record<string, typeof beitElwatan> = {
  "beit-elwatan-tg5": beitElwatan,
};

export function getRealEstateProject(slug: string) {
  return realEstateProjectDetails[slug] ?? null;
}
