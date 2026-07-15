"use client";

interface OpenFullNoteLinkProps {
  noteId: string;
}

function OpenFullNoteLink({ noteId }: OpenFullNoteLinkProps) {
  return (
    <a
      href={`/notes/${noteId}`}
      className="mt-8 inline-block text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-200 hover:decoration-accent"
      target="_blank"
      // onClick={(event) => {
      //   // Soft navigation keeps the intercepting modal (URL is already /notes/:id).
      //   // A full document load clears the modal slot and shows the note page.
      //   event.preventDefault();
      //   window.location.assign(`/notes/${noteId}`);
      // }}
    >
      Open full note
    </a>
  );
}

export default OpenFullNoteLink;
