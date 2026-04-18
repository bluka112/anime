/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import data from "@/data/anime.json";
import { Footer } from "../../footer";
import { Header } from "../../header";
import type { Anime } from "../../page";

// TODO 1: Read the dynamic segment with `useParams`
// useParams<{ id: string }>() returns the route params on the client.
// const { id } = useParams<{ id: string }>();

// TODO 2: Find the anime in the JSON data
// const anime = data.find((a) => a.id === Number(id));

// TODO 3: Handle the not-found case
// If `anime` is undefined, call notFound() from "next/navigation".
// Returning null after it helps TypeScript narrow the type below.

// TODO 4: Render the page
// Reuse <Header /> and <Footer /> from the index page to match the layout.
// Skip <Nav /> — genre filtering has no meaning on a detail view.

export default function AnimeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const anime: Anime | undefined = (data as Anime[]).find(
    (a) => a.id === Number(id),
  );

  if (!anime) {
    notFound();
    return null;
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Back link — returns to the catalog */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-purple-300 transition-colors hover:text-purple-100"
        >
          <span aria-hidden>&larr;</span>
          Back to catalog
        </Link>

        {/* Detail grid: poster on the left, info on the right */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          {/* Poster */}
          <div className="overflow-hidden rounded-2xl border border-purple-900/30 bg-zinc-900 shadow-sm">
            <img
              src={anime.image}
              alt={anime.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Info panel */}
          <div className="rounded-2xl border border-purple-900/30 bg-zinc-900 p-8 shadow-sm">
            <span className="inline-block rounded-full bg-purple-600/90 px-3 py-1 text-xs font-medium text-white">
              {anime.genre}
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-purple-100 sm:text-4xl">
              {anime.title}
            </h1>

            <p className="mt-3 text-sm text-purple-300/60">
              {anime.episodes} episodes
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-purple-900/30 pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-wide text-purple-400/60">
                  ID
                </dt>
                <dd className="mt-1 text-sm text-purple-100">#{anime.id}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-purple-400/60">
                  Genre
                </dt>
                <dd className="mt-1 text-sm text-purple-100">{anime.genre}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-purple-400/60">
                  Episodes
                </dt>
                <dd className="mt-1 text-sm text-purple-100">
                  {anime.episodes}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
