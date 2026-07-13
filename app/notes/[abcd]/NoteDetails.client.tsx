"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getNote } from "@/lib/api";

function NoteDetailsClient() {
  const { abcd } = useParams<{ abcd: string }>();
  const router = useRouter();

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const noteQ = useQuery({
    queryKey: ["note", abcd],
    queryFn: () => getNote(abcd),
    refetchOnMount: false,
  });

  const handleBack = () => {
    if (confirm("Are you sure?")) {
      // router.back();
      router.push("/notes");
    }
  };

  const toggleEdit = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit);
  };

  return (
    <>
      <button onClick={handleBack}>Back</button>
      <button onClick={() => toggleEdit()}>Edit</button>

      {isEdit ? (
        <form>
          <div>
            <input placeholder="Title" defaultValue={noteQ.data?.title} />
          </div>
          <div>
            <textarea
              placeholder="Content"
              defaultValue={noteQ.data?.content}
            />
          </div>
        </form>
      ) : (
        <>
          <h1>{noteQ.data?.title}</h1>
          <p>{noteQ.data?.content}</p>
          <strong>{noteQ.data?.category.name}</strong>
        </>
      )}
    </>
  );
}

export default NoteDetailsClient;
