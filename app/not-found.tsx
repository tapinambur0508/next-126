"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col justify-center px-4 py-16 sm:px-6">
      <p className="animate-fade-up font-display text-sm font-medium tracking-wide text-accent">
        404
      </p>
      <h1 className="animate-fade-up delay-1 mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="animate-fade-up delay-2 mt-3 text-muted">
        The page you are looking for does not exist. You will be redirected home
        in a few seconds.
      </p>
      <Link
        href="/"
        className="animate-fade-up delay-3 mt-8 inline-block text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-200 hover:decoration-accent"
      >
        Go home now
      </Link>
    </div>
  );
}

export default NotFound;
