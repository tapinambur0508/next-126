import ProfileNav from "@/components/ProfileNav/ProfileNav";
import { Metadata } from "next";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Profile | NoteHub",
  description: "Your profile on NoteHub",
};

function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-10">
      <ProfileNav />
      {children}
    </div>
  );
}

export default ProfileLayout;
