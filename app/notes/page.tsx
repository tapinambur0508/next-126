import PageContainer from "@/components/PageContainer/PageContainer";
import NoteList from "@/components/NoteList/NoteList";

import { getNotes } from "@/lib/api";

async function Notes() {
  const response = await getNotes();

  return (
    <PageContainer
      title="Notes"
      description="Browse and manage your notes in one place."
    >
      <NoteList notes={response.notes} />
    </PageContainer>
  );
}

export default Notes;
