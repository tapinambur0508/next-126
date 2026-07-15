import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-accent"
        >
          NoteHub
        </Link>

        <nav className="flex items-center gap-0.5 sm:gap-1">
          {[
            { href: "/about", label: "About" },
            { href: "/notes/filters/all", label: "Notes" },
            { href: "/profile", label: "Profile" },
            { href: "/control-panel", label: "Control panel" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-2.5 py-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground sm:px-3"
            >
              <span className="after:absolute after:inset-x-2.5 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100 sm:after:inset-x-3">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
