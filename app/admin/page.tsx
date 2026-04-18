import Link from "next/link";
import { Film, Tags, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// =====================================================================
// EXERCISE — Admin dashboard landing
// Mock stats rendered statically. Replace with real values derived from
// `useAnimes()` from `@/lib/anime-store`.
// =====================================================================

// TODO 1: Make this a client component and pull data from the store
// "use client";
// import { useAnimes, GENRES } from "@/lib/anime-store";
// const animes = useAnimes();

// TODO 2: Derive the stats
//   - totalAnime  = animes.length
//   - totalGenres = new Set(animes.map(a => a.genre)).size
//   - topGenre    = the genre that appears most often

// =====================================================================

const MOCK_STATS = {
  totalAnime: 20,
  totalGenres: 6,
  topGenre: "Action",
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-purple-100">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-purple-300/60">
          Overview of your anime catalog.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="border-purple-900/30 bg-zinc-900/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-200">
              Total anime
            </CardTitle>
            <Film className="h-4 w-4 text-purple-400/70" />
          </CardHeader>
          <CardContent>
            {/* TODO 3: replace with {totalAnime} */}
            <div className="text-3xl font-bold text-purple-50">
              {MOCK_STATS.totalAnime}
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-900/30 bg-zinc-900/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-200">
              Genres in use
            </CardTitle>
            <Tags className="h-4 w-4 text-purple-400/70" />
          </CardHeader>
          <CardContent>
            {/* TODO 4: replace with {totalGenres} */}
            <div className="text-3xl font-bold text-purple-50">
              {MOCK_STATS.totalGenres}
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-900/30 bg-zinc-900/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-200">
              Top genre
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-400/70" />
          </CardHeader>
          <CardContent>
            {/* TODO 5: replace with {topGenre} */}
            <div className="text-3xl font-bold text-purple-50">
              {MOCK_STATS.topGenre}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-purple-900/30 bg-zinc-900/60">
        <CardHeader>
          <CardTitle className="text-purple-100">Quick actions</CardTitle>
          <CardDescription className="text-purple-300/60">
            Jump into a submodule to manage your catalog.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Link
            href="/admin/anime"
            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-500"
          >
            Manage anime
          </Link>
          <Link
            href="/admin/genres"
            className="rounded-lg border border-purple-900/40 bg-transparent px-4 py-2 text-sm font-medium text-purple-200 transition-colors hover:bg-purple-900/30 hover:text-purple-50"
          >
            Manage genres
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
