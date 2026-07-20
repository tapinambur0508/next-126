import PageContainer from "@/components/PageContainer/PageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Control panel",
  description: "Control panel NoteHub",
};

function ControlPanel() {
  return (
    <PageContainer
      title="Control panel"
      description="Manage app settings and preferences."
    >
      <ul className="divide-y divide-border/80 border-t border-border/80">
        <li className="flex items-baseline justify-between gap-4 py-4">
          <div>
            <p className="font-medium text-foreground">Workspace</p>
            <p className="mt-1 text-sm text-muted">
              Default view and note sorting preferences.
            </p>
          </div>
          <span className="shrink-0 text-sm text-ink-faint">Coming soon</span>
        </li>
        <li className="flex items-baseline justify-between gap-4 py-4">
          <div>
            <p className="font-medium text-foreground">Categories</p>
            <p className="mt-1 text-sm text-muted">
              Organize how notes are grouped in the sidebar.
            </p>
          </div>
          <span className="shrink-0 text-sm text-ink-faint">Coming soon</span>
        </li>
      </ul>
    </PageContainer>
  );
}

export default ControlPanel;
