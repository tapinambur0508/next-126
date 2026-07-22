"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import type { Category } from "@/types/category";

import { createNote } from "@/lib/api";

import { useNoteDraftStore } from "@/store/noteStore";

interface CreateNoteFormProps {
  categories: Category[];
}

function CreateNoteForm({ categories }: CreateNoteFormProps) {
  const router = useRouter();

  const { draft, setDraft, clearDraft } = useNoteDraftStore();

  const { mutate, isPending } = useMutation({
    mutationFn: createNote,
    onSuccess: (note) => {
      clearDraft();
      router.push(`/notes/${note.id}`);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setDraft({ ...draft, [name]: value });
  };

  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const categoryId = formData.get("categoryId") as string;

    mutate({ title, content, categoryId });
  };

  console.log({ draft });

  return (
    <form action={handleSubmit} className="animate-fade-up space-y-8">
      <div>
        <label
          htmlFor="note-title"
          className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint"
        >
          Title
        </label>
        <input
          id="note-title"
          name="title"
          placeholder="Give your note a name"
          required
          className="mt-2 w-full border-b border-border bg-transparent py-2 font-display text-2xl font-medium tracking-tight text-foreground placeholder:text-ink-faint focus:border-accent focus:outline-none"
          value={draft.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="note-content"
          className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint"
        >
          Content
        </label>
        <textarea
          id="note-content"
          name="content"
          placeholder="Write freely…"
          required
          rows={10}
          className="mt-2 w-full resize-y border border-border bg-surface/60 px-3 py-3 text-base leading-relaxed text-foreground placeholder:text-ink-faint focus:border-accent focus:outline-none"
          value={draft.content}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="note-category"
          className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint"
        >
          Category
        </label>
        <select
          id="note-category"
          name="categoryId"
          required
          className="mt-2 w-full max-w-xs border-b border-border bg-transparent py-2 text-base text-foreground focus:border-accent focus:outline-none"
          value={draft.categoryId}
          onChange={handleChange}
        >
          <option value="" disabled>
            Choose a category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="bg-accent px-5 py-2.5 text-sm font-semibold text-surface transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Creating…" : "Create note"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="text-sm font-medium text-muted underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CreateNoteForm;
