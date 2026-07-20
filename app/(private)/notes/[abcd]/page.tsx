import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";

import { getNote } from "@/lib/api";

import NoteDetailsClient from "./NoteDetails.client";
import { Metadata } from "next";

interface NoteProps {
  params: Promise<{ abcd: string }>;
}

export async function generateMetadata({
  params,
}: NoteProps): Promise<Metadata> {
  const { abcd } = await params;
  const note = await getNote(abcd);

  return {
    title: note.title,
    description: note.content.slice(0, 30),
    openGraph: {
      title: note.title,
      description: note.content.slice(0, 30),
      url: `https://3e2b-176-37-50-208.ngrok-free.app/notes/${note.id}`,
      images: {
        url: "https://3e2b-176-37-50-208.ngrok-free.app/note.jpg",
        alt: note.title,
      },
    },
  };
}

async function Note({ params }: NoteProps) {
  const { abcd } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", abcd],
    queryFn: () => getNote(abcd),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}

export default Note;
