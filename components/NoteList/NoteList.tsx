import Link from "next/link";

import type { Note } from "@/types/note";

interface NoteListProps {
  notes: Note[];
}

function NoteList({ notes }: NoteListProps) {
  if (notes.length === 0) {
    return (
      <p className="animate-fade-up text-muted">
        No notes in this category yet.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-border/80 border-t border-border/80">
      {notes.map((note, index) => (
        <li
          key={note.id}
          className="animate-fade-up"
          style={{ animationDelay: `${Math.min(index, 8) * 0.04}s` }}
        >
          <Link
            href={`/notes/${note.id}`}
            className="group flex items-baseline justify-between gap-4 py-4 transition-colors duration-200"
          >
            <span className="font-display text-lg font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">
              {note.title}
            </span>
            <span className="shrink-0 text-sm text-ink-faint transition-colors duration-200 group-hover:text-muted">
              {note.category.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
