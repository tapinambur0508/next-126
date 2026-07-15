"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/profile", label: "Profile", exact: true },
  { href: "/profile/settings", label: "Settings", exact: false },
  { href: "/profile/notifications", label: "Notifications", exact: false },
];

function ProfileNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Profile sections" className="animate-fade-in">
      <ul className="flex flex-wrap gap-1 border-b border-border/80">
        {links.map((link) => {
          const isActive = link.exact
            ? pathname === link.href
            : pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative block px-3 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-foreground after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default ProfileNav;
