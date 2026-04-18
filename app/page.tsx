"use client";
import { Footer } from "./footer";
import { Header } from "./header";
import { Nav } from "./nav";
import { Pagination } from "./pagination";
import { Cards } from "./cards";

// =====================================================================
// EXERCISE — Anime catalog list page
// Everything below renders static mock markup. Your job is to replace
// the mocks with real React state, derived values, and event handlers.
// =====================================================================

// TODO 1: Import React hooks
// import { useEffect, useMemo, useState } from "react";

// TODO 2: Import the shared store + Anime type
// import { useAnimes, type Anime } from "@/lib/anime-store";

// TODO 3: Declare state
//   - search          (string,  initial "")
//   - selectedGenre   (string,  initial "All")
//   - skip            (number,  initial 0)
// const [search, setSearch] = useState("");
// const [selectedGenre, setSelectedGenre] = useState("All");
// const [skip, setSkip] = useState(0);

// TODO 4: Read the anime list from the store
// const animes = useAnimes();

// TODO 5: Page size constant
// const ANIME_PER_PAGE = 6;

// TODO 6: Derive `filtered` with useMemo
//   - If selectedGenre !== "All", keep only anime.genre === selectedGenre
//   - Also keep only those whose title includes `search` (case-insensitive)

// TODO 7: Derive `paginated` — filtered.slice(skip, skip + ANIME_PER_PAGE)

// TODO 8: Handlers
// function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
//   setSearch(e.target.value);
//   setSkip(0);
// }
// function handleGenreClick(genre: string) {
//   setSelectedGenre(genre);
//   setSkip(0);
// }
// function handlePrev() { setSkip((s) => Math.max(0, s - ANIME_PER_PAGE)); }
// function handleNext() { setSkip((s) => s + ANIME_PER_PAGE); }

// =====================================================================

const MOCK_ANIMES = [
  {
    id: 1,
    title: "Attack on Titan",
    genre: "Action",
    episodes: 87,
    image: "https://placehold.co/400x560/2d1b69/e879f9?text=Attack+on+Titan",
  },
  {
    id: 4,
    title: "Your Lie in April",
    genre: "Romance",
    episodes: 22,
    image: "https://placehold.co/400x560/4a1942/f9a8d4?text=Your+Lie+in+April",
  },
  {
    id: 11,
    title: "Steins;Gate",
    genre: "Sci-Fi",
    episodes: 24,
    image: "https://placehold.co/400x560/1b2d69/93c5fd?text=Steins;Gate",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <Header />

      {/* Genre Navigation */}
      {/* TODO 9: Pass your real `selectedGenre` + `setSelectedGenre` here */}
      <Nav selectedCategory="All" setSelectedCategory={() => {}} />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Search */}
        <div className="mb-8">
          {/* TODO 10: Wire `value={search}` and `onChange={handleSearch}` */}
          <input
            type="text"
            placeholder="Search anime..."
            className="w-full rounded-xl border border-purple-900/40 bg-zinc-900 px-4 py-3 text-sm text-purple-100 placeholder-purple-400/40 shadow-sm outline-none transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 sm:max-w-md"
          />
        </div>

        {/* TODO 11: Replace the hardcoded count with `filtered.length + " anime found"` */}
        <p className="mb-6 text-sm text-purple-300/60">20 anime found</p>

        {/* TODO 12: Replace the three mock cards with `paginated.map(...)` */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_ANIMES.map((anime) => (
            <Cards key={anime.id} anime={anime} />
          ))}
        </div>

        {/* Pagination */}
        {/* TODO 13: Compute totalPages + currentPage, wire handlePrev / handleNext */}
        <Pagination
          totalPages={1}
          currentPage={1}
          handlePrev={() => {}}
          handleNext={() => {}}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// BONUS TODO 14: Extract into components
//   - app/components/AnimeCard.tsx
//   - app/components/SearchBar.tsx
//   - app/components/GenreNav.tsx
//   - app/components/Pagination.tsx
