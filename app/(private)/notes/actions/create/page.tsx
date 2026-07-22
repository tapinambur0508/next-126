import CreateNoteForm from "@/components/CreateNoteForm/CreateNoteForm";
import { getCategories } from "@/lib/api";

async function CreateNote() {
  const categories = await getCategories();

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="animate-fade-up">
        <p className="font-display text-sm font-medium tracking-wide text-accent">
          NoteHub
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Create note
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Capture a thought, pick a category, and keep it close.
        </p>
      </div>

      <div className="mt-10">
        <CreateNoteForm categories={categories} />
      </div>
    </div>
  );
}

export default CreateNote;
