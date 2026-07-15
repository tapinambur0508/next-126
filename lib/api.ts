import axios from "axios";

import type { Note } from "@/types/note";
import type { Category } from "@/types/category";

const API = axios.create({
  baseURL: "https://next-v1-notes-api.goit.study",
});

export async function getNotes(
  categoryId?: string,
): Promise<{ notes: Note[]; total: number }> {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const { data } = await API.get<{ notes: Note[]; total: number }>(
          "/notes",
          {
            params: {
              categoryId,
            },
          },
        );
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 0);
  });
}

export async function getNote(id: Note["id"]): Promise<Note> {
  const { data } = await API.get<Note>(`/notes/${id}`);
  return data;
}

export async function getCategories(): Promise<Category[]> {
  const { data } = await API.get<Category[]>("/categories");
  return data;
}
