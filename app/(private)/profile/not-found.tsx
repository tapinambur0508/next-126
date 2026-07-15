import Link from "next/link";

function NotFound() {
  return (
    <div className="animate-fade-up px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        Profile page not found
      </h1>
      <p className="mt-3 max-w-md text-muted">
        This profile route does not exist. Try another section from the tabs
        above.
      </p>
      <Link
        href="/profile"
        className="mt-8 inline-block text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-200 hover:decoration-accent"
      >
        Back to profile
      </Link>
    </div>
  );
}

export default NotFound;
