"use client";

import { useMemo, useState } from "react";
import VideoCard from "@/components/cards/VideoCard";
import type {
  podcastEpisodes as PodcastType,
  featuredVideos as VideosType,
} from "@/lib/content";

const TOPICS = ["الكل", "تسويق", "إدارة وتوسع", "تجارة تجزئة", "عقارات"];

export default function ContentTabs({
  podcastEpisodes,
  featuredVideos,
}: {
  podcastEpisodes: typeof PodcastType;
  featuredVideos: typeof VideosType;
}) {
  const [tab, setTab] = useState<"podcast" | "videos">("podcast");
  const [topic, setTopic] = useState("الكل");

  const filteredPodcast = useMemo(
    () =>
      topic === "الكل"
        ? podcastEpisodes
        : podcastEpisodes.filter((ep) => ep.topics.includes(topic)),
    [podcastEpisodes, topic],
  );

  const filteredVideos = useMemo(
    () =>
      topic === "الكل"
        ? featuredVideos
        : featuredVideos.filter((v) => v.topics.includes(topic)),
    [featuredVideos, topic],
  );

  return (
    <div>
      <div
        role="tablist"
        aria-label="نوع المحتوى"
        className="mb-6 flex gap-2 border-b border-border"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "podcast"}
          onClick={() => setTab("podcast")}
          className={`px-4 py-2 font-semibold transition-colors duration-[var(--duration-micro)] ease-[var(--ease-standard)] ${
            tab === "podcast"
              ? "border-b-2 border-accent-500 text-primary-900"
              : "text-text-secondary"
          }`}
        >
          بودكاست
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "videos"}
          onClick={() => setTab("videos")}
          className={`px-4 py-2 font-semibold transition-colors duration-[var(--duration-micro)] ease-[var(--ease-standard)] ${
            tab === "videos"
              ? "border-b-2 border-accent-500 text-primary-900"
              : "text-text-secondary"
          }`}
        >
          فيديوهات مميزة
        </button>
      </div>

      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="فلترة حسب الموضوع"
      >
        {TOPICS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTopic(t)}
            aria-pressed={topic === t}
            className={`rounded-full border px-4 py-1 text-sm transition-colors duration-[var(--duration-micro)] ease-[var(--ease-standard)] ${
              topic === t
                ? "border-accent-500 bg-accent-500 text-primary-900"
                : "border-border-strong text-text-secondary"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "podcast" && (
        <ul className="grid gap-6 sm:grid-cols-2">
          {filteredPodcast.map((ep) => (
            <li key={ep.id}>
              <VideoCard
                title={ep.title}
                description={ep.description}
                href={ep.youtubeUrl}
                isPlaceholder={ep.isPlaceholder}
              />
            </li>
          ))}
        </ul>
      )}

      {tab === "videos" && (
        <ul className="grid gap-6 sm:grid-cols-3">
          {filteredVideos.map((video) => (
            <li key={video.id}>
              <VideoCard
                title={video.title}
                href={video.youtubeUrl}
                isPlaceholder={video.isPlaceholder}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
