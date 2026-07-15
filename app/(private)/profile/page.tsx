import { notFound } from "next/navigation";

import PageContainer from "@/components/PageContainer/PageContainer";

function Profile() {
  const coin = Math.random();

  if (coin < 0.5) {
    notFound();
  }

  return (
    <PageContainer
      flush
      title="Profile"
      description="View and update your account settings."
    >
      <p className="text-muted">
        Your account is ready. Use the tabs above to manage settings and
        notifications.
      </p>
    </PageContainer>
  );
}

export default Profile;
