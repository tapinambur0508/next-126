function Footer() {
  return (
    <footer className="mt-auto border-t border-border/70">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-4 py-8 sm:px-6">
        <p className="font-display text-sm font-medium tracking-tight text-foreground">
          NoteHub
        </p>
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} — write calmly, keep clearly
        </p>
      </div>
    </footer>
  );
}

export default Footer;
