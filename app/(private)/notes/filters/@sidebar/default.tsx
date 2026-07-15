import { getCategories } from "@/lib/api";
import NotesSidebarNav from "@/components/NotesSidebarNav/NotesSidebarNav";

async function NotesSidebar() {
  const categories = await getCategories();

  return <NotesSidebarNav categories={categories} />;
}

export default NotesSidebar;
