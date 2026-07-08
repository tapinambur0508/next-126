"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getNote } from "@/lib/api";

function NoteDetailsClient() {
  const { abcd } = useParams<{ abcd: string }>();

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const noteQ = useQuery({
    queryKey: ["note", abcd],
    queryFn: () => getNote(abcd),
    refetchOnMount: false,
  });

  const toggleEdit = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit);
  };

  return (
    <>
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
