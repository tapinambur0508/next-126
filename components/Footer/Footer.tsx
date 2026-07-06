function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          NoteHub &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
