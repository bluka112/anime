"use client";
import { useEffect, useState } from "react";
import seedData from "@/data/anime.json";

export type Anime = {
  id: number;
  title: string;
  episodes: number;
  genre: string;
  image: string;
};

export const GENRES = [
  "Action",
  "Romance",
  "Comedy",
  "Fantasy",
  "Sci-Fi",
  "Slice of Life",
] as const;

const STORAGE_KEY = "anime-store-v1";
const CHANGE_EVENT = "anime-store-change";
const seed: Anime[] = seedData as Anime[];

function read(): Anime[] {
  if (typeof window === "undefined") return seed;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw) as Anime[];
  } catch {
    return seed;
  }
}

function write(list: Anime[]): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function addAnime(input: Omit<Anime, "id">): Anime {
  const list = read();
  const nextId = list.reduce((m, a) => Math.max(m, a.id), 0) + 1;
  const created: Anime = { id: nextId, ...input };
  write([...list, created]);
  return created;
}

export function updateAnime(id: number, patch: Omit<Anime, "id">): void {
  const list = read();
  write(list.map((a) => (a.id === id ? { id, ...patch } : a)));
}

export function deleteAnime(id: number): void {
  write(read().filter((a) => a.id !== id));
}

export function resetAnimes(): void {
  write(seed);
}

export function useAnimes(): Anime[] {
  const [animes, setAnimes] = useState<Anime[]>(seed);
  useEffect(() => {
    setAnimes(read());
    const refresh = () => setAnimes(read());
    window.addEventListener(CHANGE_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(CHANGE_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);
  return animes;
}
