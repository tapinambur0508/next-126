import { getNote } from "@/lib/api";

import Modal from "@/components/Modal/Modal";
import OpenFullNoteLink from "@/components/OpenFullNoteLink/OpenFullNoteLink";

interface NotePreviewProps {
  params: Promise<{ abcd: string }>;
}

async function NotePreview({ params }: NotePreviewProps) {
  const { abcd } = await params;
  const note = await getNote(abcd);

  return (
    <Modal>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
        {note.category.name}
      </p>
      <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {note.title}
      </h2>
      <p className="mt-5 whitespace-pre-wrap text-base leading-relaxed text-muted">
        {note.content}
      </p>
      <OpenFullNoteLink noteId={note.id} />
    </Modal>
  );
}

export default NotePreview;
