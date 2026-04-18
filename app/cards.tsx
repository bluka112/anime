import Link from "next/link";
import { Anime } from "@/lib/anime-store";

/* eslint-disable @next/next/no-img-element */
export const Cards = ({ anime }: { anime: Anime }) => {
  return (
    <Link
      href={`/anime/${anime.id}`}
      className="group rounded-2xl border border-purple-900/30 bg-zinc-900 shadow-sm transition-all hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden rounded-t-2xl bg-zinc-800">
        <img
          src={anime.image}
          alt={anime.title}
          className="h-56 w-full object-cover transition-transform group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-purple-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {anime.genre}
        </span>
      </div>
      <div className="p-5">
        <h2 className="text-lg font-semibold leading-tight text-purple-100">
          {anime.title}
        </h2>
        <p className="mt-2 text-sm text-purple-300/60">
          {anime.episodes} episodes
        </p>
      </div>
    </Link>
  );
};
