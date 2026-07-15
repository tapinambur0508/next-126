function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
          NoteHub
        </p>
        <p className="animate-pulse-soft mt-3 text-sm text-muted">Loading…</p>
      </div>
    </div>
  );
}

export default Loading;
