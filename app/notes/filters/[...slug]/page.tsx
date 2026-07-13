import PageContainer from "@/components/PageContainer/PageContainer";
import NoteList from "@/components/NoteList/NoteList";

import { getNotes } from "@/lib/api";

interface NoteFiltersProps {
  params: Promise<{ slug: string[] }>;
}

async function NoteFilters({ params }: NoteFiltersProps) {
  const { slug } = await params;
  const category = slug[0] === "all" ? undefined : slug[0];
  const response = await getNotes(category);

  return (
    <PageContainer
      title={`Notes by categories: ${slug.join(", ")}`}
      description="Browse and manage your notes in one place."
    >
      <NoteList notes={response.notes} />
    </PageContainer>
  );
}

export default NoteFilters;
