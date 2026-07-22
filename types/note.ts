export interface Note {
  id: string;
  title: string;
  content: string;
  category: {
    id: string;
    name: string;
  };
  cratedAt: string;
}

export interface CreateNotePayload {
  title: string;
  content: string;
  categoryId: string;
}
