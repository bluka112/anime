/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Nav } from "./nav";
import { Pagination } from "./pagination";
import { Cards } from "./cards";
import data from "@/data/anime.json";

// TODO 1: Define the Anime type
export type Anime = {
  id: number;
  title: string;
  episodes: number;
  genre: string;
  image: string;
};
// Fields: id (number), title (string), episodes (number), genre (string), image (string)

// TODO 2: Declare state variables
// search - search text, initial value: ""
// selectedGenre - active genre filter, initial value: "All"
// skip - number of items skipped for pagination, initial value: 0

const ANIME_PER_PAGE = 6;

// TODO 3: Use useMemo to filter anime by search text AND selected genre
// If selectedGenre is "All", don't filter by genre
// Filter title using .toLowerCase().includes(search.toLowerCase())

// TODO 4: Use useMemo to slice the filtered results for the current page
// filteredAnime.slice(skip, skip + ANIME_PER_PAGE)

// TODO 5: Search handler
// function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
//   setSearch(e.target.value);
//   setSkip(0);
// }

// TODO 6: Genre click handler
// function handleGenreClick(genre: string) {
//   setSelectedGenre(genre);
//   setSkip(0);
// }

// TODO 7: Pagination handlers
// function handlePrev() { setSkip((s) => Math.max(0, s - ANIME_PER_PAGE)); }
// function handleNext() { setSkip((s) => s + ANIME_PER_PAGE); }

export default function Home() {
  let filteredAnime: Anime[] = [];
  const [animes, setAnimes] = useState(data);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setSkip(0);
  }, [search, selectedCategory]);
  filteredAnime = animes.filter((anime) => {
    return anime.title.toLowerCase().includes(search.toLowerCase());
  });
  filteredAnime = filteredAnime.filter((anime) => {
    return selectedCategory == "All" ? true : anime.genre == selectedCategory;
  });
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <Header />
      {/* Genre Navigation */}
      {/* TODO 9: Highlight the active genre button */}
      {/* Active: "bg-purple-600 text-white" */}
      {/* Inactive: "text-purple-300 hover:bg-purple-900/30" */}
      {/* Wire onClick to handleGenreClick */}
      <Nav
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main Content */}

      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Search */}
        <div className="mb-8">
          {/* TODO 8: Wire value={search} onChange={handleSearch} */}
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Search anime..."
            className="w-full rounded-xl border border-purple-900/40 bg-zinc-900 px-4 py-3 text-sm text-purple-100 placeholder-purple-400/40 shadow-sm outline-none transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 sm:max-w-md"
          />
        </div>

        <p className="mb-6 text-sm text-purple-300/60">
          {/* TODO 10: Show filtered anime count */}
          {/* Example: filteredAnime.length + " anime found" */}
          {filteredAnime.length} anime found
        </p>

        {/* TODO 11: Replace hardcoded cards with paginatedAnime.map() */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAnime.slice(skip, skip + ANIME_PER_PAGE).map((anime) => {
            return <Cards key={anime.id} anime={anime} />;
          })}
        </div>

        {/* Pagination */}
        <Pagination
          totalPages={Math.ceil(filteredAnime.length / ANIME_PER_PAGE)}
          currentPage={skip == 0 ? 1 : skip / ANIME_PER_PAGE + 1}
          handlePrev={() => {
            setSkip(skip - ANIME_PER_PAGE);
          }}
          handleNext={() => {
            setSkip(skip + ANIME_PER_PAGE);
          }}
        />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

// BONUS TODO 14: Extract into components
//   - app/types/anime.ts
//   - app/components/AnimeCard.tsx
//   - app/components/SearchBar.tsx
//   - app/components/GenreNav.tsx
//   - app/components/Pagination.tsx
//   - app/page.tsx
