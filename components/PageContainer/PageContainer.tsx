type PageContainerProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  wide?: boolean;
  flush?: boolean;
};

function PageContainer({
  title,
  description,
  children,
  wide = false,
  flush = false,
}: PageContainerProps) {
  return (
    <div
      className={
        flush
          ? "py-10 sm:py-12"
          : "mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14"
      }
    >
      <div className={`animate-fade-up ${wide ? "max-w-none" : "max-w-2xl"}`}>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </div>
  );
}

export default PageContainer;
