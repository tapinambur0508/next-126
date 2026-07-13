"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timerId = setTimeout(() => {
      router.replace("/");
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [router]);

  return (
    <div>
      <h1>Oops. Page that are you looking for is not exist</h1>
      <p>You will be redirect to home page after 3 seconds</p>
    </div>
  );
}

export default NotFound;
