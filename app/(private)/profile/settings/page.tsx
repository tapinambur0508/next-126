import PageContainer from "@/components/PageContainer/PageContainer";

function ProfileSettings() {
  return (
    <PageContainer
      flush
      title="Settings"
      description="Edit your account preferences."
    >
      <div className="max-w-md space-y-6">
        <div>
          <label
            htmlFor="display-name"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint"
          >
            Display name
          </label>
          <input
            id="display-name"
            type="text"
            placeholder="Your name"
            className="mt-2 w-full border-b border-border bg-transparent py-2 text-foreground placeholder:text-ink-faint focus:border-accent focus:outline-none"
            readOnly
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full border-b border-border bg-transparent py-2 text-foreground placeholder:text-ink-faint focus:border-accent focus:outline-none"
            readOnly
          />
        </div>
      </div>
    </PageContainer>
  );
}

export default ProfileSettings;
