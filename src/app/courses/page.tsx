import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { courses } from "@/lib/content";

export const metadata: Metadata = { title: courses.title };

export default function CoursesPage() {
  return (
    <section className="flex flex-1 items-center justify-center py-24 text-center">
      <Container className="max-w-xl">
        <h1 className="font-heading text-4xl font-extrabold">{courses.title}</h1>
        <p className="mt-4 text-text-secondary">{courses.description}</p>
        <p className="mt-6 font-heading text-2xl font-bold text-accent-600">{courses.price}</p>
        <button
          type="button"
          className="mt-6 rounded-sm bg-accent-500 px-6 py-3 font-semibold text-primary-900 hover:bg-accent-400"
        >
          {courses.cta}
        </button>
      </Container>
    </section>
  );
}
