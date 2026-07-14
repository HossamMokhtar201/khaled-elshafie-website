import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { courses } from "@/lib/content";

export const metadata: Metadata = { title: courses.title };

export default function CoursesPage() {
  return (
    <section className="flex flex-1 items-center justify-center py-24 text-center">
      <Container className="max-w-xl">
        <h1 className="font-heading text-4xl font-extrabold">{courses.title}</h1>
        <p className="mt-4 text-text-secondary">{courses.description}</p>
        <p className="mt-6 font-heading text-2xl font-bold text-accent-600">{courses.price}</p>
        <Button type="button" variant="primary" className="mt-6">
          {courses.cta}
        </Button>
      </Container>
    </section>
  );
}
