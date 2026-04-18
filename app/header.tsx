import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b border-purple-900/30 bg-zinc-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6">
        <Link href="/" className="group">
          <h1 className="text-2xl font-bold tracking-tight text-purple-100 group-hover:text-purple-50">
            Anime Catalog
          </h1>
          <p className="mt-1 text-sm text-purple-300/60">
            Browse our anime collection
          </p>
        </Link>
        <Link
          href="/admin"
          className="rounded-full border border-purple-900/40 bg-zinc-950/60 px-4 py-1.5 text-sm font-medium text-purple-200 transition-colors hover:bg-purple-900/30 hover:text-purple-50"
        >
          Admin
        </Link>
      </div>
    </header>
  );
};
