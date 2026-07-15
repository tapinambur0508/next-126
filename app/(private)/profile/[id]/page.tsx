import { notFound } from "next/navigation";

import PageContainer from "@/components/PageContainer/PageContainer";

interface UserProfileProps {
  params: Promise<{ id: string }>;
}

async function UserProfile({ params }: UserProfileProps) {
  const { id } = await params;

  if (Number.parseInt(id, 10) === 10) {
    notFound();
  }

  return (
    <PageContainer
      flush
      title={`User ${id}`}
      description="Public profile view for this account."
    />
  );
}

export default UserProfile;
