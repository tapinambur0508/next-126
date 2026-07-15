import PageContainer from "@/components/PageContainer/PageContainer";

function ProfileNotifications() {
  return (
    <PageContainer
      flush
      title="Notifications"
      description="Stay on top of updates about your notes."
    >
      <ul className="divide-y divide-border/80 border-t border-border/80">
        <li className="py-4">
          <p className="font-medium text-foreground">Welcome to NoteHub</p>
          <p className="mt-1 text-sm text-muted">
            Your workspace is ready. Start capturing ideas anytime.
          </p>
        </li>
        <li className="py-4">
          <p className="font-medium text-foreground">Categories available</p>
          <p className="mt-1 text-sm text-muted">
            Filter notes by category from the Notes sidebar.
          </p>
        </li>
      </ul>
    </PageContainer>
  );
}

export default ProfileNotifications;
