"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col justify-center px-4 py-16 sm:px-6">
      <p className="font-display text-sm font-medium tracking-wide text-accent">
        Something went wrong
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground">
        {error.message || "Unexpected error"}
      </h1>
      <p className="mt-3 text-muted">
        You can try resetting this view or reloading the page.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="bg-accent px-5 py-2.5 text-sm font-semibold text-surface transition-opacity duration-200 hover:opacity-90"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="text-sm font-medium text-muted underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
        >
          Reload page
        </button>
      </div>
    </div>
  );
}

export default Error;
