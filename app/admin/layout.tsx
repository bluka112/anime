"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Film, Tags } from "lucide-react";
import { Footer } from "../footer";
import { Header } from "../header";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/anime", label: "Anime", icon: Film },
  { href: "/admin/genres", label: "Genres", icon: Tags },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Header />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-6 py-10 md:flex-row">
        <aside className="md:w-56 md:shrink-0">
          <nav className="sticky top-6 flex flex-row gap-1 rounded-xl border border-purple-900/30 bg-zinc-900/60 p-2 md:flex-col">
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
              const active =
                href === "/admin"
                  ? pathname === "/admin"
                  : pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={href}
                  href={href}
                  className={
                    active
                      ? "flex items-center gap-2 rounded-lg bg-purple-600 px-3 py-2 text-sm font-medium text-white"
                      : "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-purple-300 transition-colors hover:bg-purple-900/30 hover:text-purple-100"
                  }
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">{children}</div>
      </div>

      <Footer />
    </div>
  );
}
