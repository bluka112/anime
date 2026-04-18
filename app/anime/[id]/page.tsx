/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { Footer } from "../../footer";
import { Header } from "../../header";

// =====================================================================
// EXERCISE — Anime detail page
// Everything below renders static mock markup for ONE hardcoded anime.
// Your job is to read the `:id` from the route and find the real entry.
// =====================================================================

// TODO 1: Read the dynamic segment
// import { useParams } from "next/navigation";
// const { id } = useParams<{ id: string }>();

// TODO 2: Get the anime list from the shared store
// import { useAnimes } from "@/lib/anime-store";
// const animes = useAnimes();

// TODO 3: Find the anime by id
// const anime = animes.find((a) => a.id === Number(id));

// TODO 4: Handle the not-found case
// import { notFound } from "next/navigation";
// if (!anime) { notFound(); return null; }

// TODO 5: Replace the hardcoded `anime` below with the one you just found
//         so the page reflects the actual URL (/anime/1, /anime/2, ...).

// =====================================================================

export default function AnimeDetailPage() {
  const anime = {
    id: 1,
    title: "Attack on Titan",
    genre: "Action",
    episodes: 87,
    image: "https://placehold.co/400x560/2d1b69/e879f9?text=Attack+on+Titan",
  };

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
