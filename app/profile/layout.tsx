import Link from "next/link";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="ProfileLayout">
      <nav>
        <ul>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/profile/settings">Settings</Link>
          </li>
          <li>
            <Link href="/profile/notifications">Notifications</Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
}

export default ProfileLayout;
