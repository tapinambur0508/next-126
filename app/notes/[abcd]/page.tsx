import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";

import { getNote } from "@/lib/api";

import NoteDetailsClient from "./NoteDetails.client";

interface NoteProps {
  params: Promise<{ abcd: string }>;
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
