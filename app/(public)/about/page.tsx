import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | NoteHub",
  description: "About NoteHub",
};

function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <p className="animate-fade-up font-display text-sm font-medium tracking-wide text-accent">
          NoteHub
        </p>
        <h1 className="animate-fade-up delay-1 mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Built for focused writing
        </h1>
        <p className="animate-fade-up delay-2 mt-5 text-lg leading-relaxed text-muted">
          NoteHub is a simple space to keep notes organized by category. Less
          clutter, more clarity — so your ideas stay easy to find and pleasant
          to revisit.
        </p>
      </div>

      <section className="animate-fade-up delay-3 mt-16 max-w-2xl border-t border-border/80 pt-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          What it is for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Draft thoughts, store references, and browse by category when you need
          them. NoteHub stays out of the way so you can write first and organize
          later.
        </p>
        <Link
          href="/notes/filters/all"
          className="mt-8 inline-block text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-200 hover:decoration-accent"
        >
          Browse your notes
        </Link>
      </section>
    </div>
  );
}

export default About;
