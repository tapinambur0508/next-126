import { redirect } from "next/navigation";

function NoteFilters() {
  redirect("/notes/filters/all");

  return null;
}

export default NoteFilters;
