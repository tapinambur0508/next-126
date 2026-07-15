import ProfileNav from "@/components/ProfileNav/ProfileNav";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-10">
      <ProfileNav />
      {children}
    </div>
  );
}

export default ProfileLayout;
