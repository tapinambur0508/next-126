import { redirect } from "next/navigation";

function Notes() {
  redirect("/notes/filters/all");

  return null;
}

export default Notes;
