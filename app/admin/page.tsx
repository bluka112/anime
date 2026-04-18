/* eslint-disable @next/next/no-img-element */
"use client";
import { MoreHorizontal, Pencil, Plus, RotateCcw, Trash2 } from "lucide-react";
import { Footer } from "../footer";
import { Header } from "../header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// =====================================================================
// EXERCISE — Anime admin page (CRUD)
// The table, dropdowns, sheet, and alert dialog below are static markup.
// Nothing is wired. Your job is to connect them to the shared store in
// `@/lib/anime-store` so Add / Edit / Delete / Reset actually work.
// =====================================================================

// TODO 1: Imports you will need
// import { useEffect, useState } from "react";
// import { toast } from "sonner";
// import {
//   addAnime,
//   deleteAnime,
//   GENRES,
//   resetAnimes,
//   updateAnime,
//   useAnimes,
//   type Anime,
// } from "@/lib/anime-store";

// TODO 2: State for the editor (add vs. edit) and delete confirmation
//   - editor:  { mode: "create" } | { mode: "edit"; anime: Anime } | null
//   - deleting: Anime | null
// const [editor, setEditor] = useState<EditorState>(null);
// const [deleting, setDeleting] = useState<Anime | null>(null);

// TODO 3: Read animes from the store
// const animes = useAnimes();

// TODO 4: Handlers
// function handleReset() { resetAnimes(); toast.success("Catalog reset"); }
// function handleDelete() {
//   if (!deleting) return;
//   deleteAnime(deleting.id);
//   toast.success(`Deleted "${deleting.title}"`);
//   setDeleting(null);
// }

// TODO 5: Form state inside the Sheet
//   - title, genre, episodes, image
//   - When `editor.mode === "edit"`, preload fields via useEffect
//   - On submit: validate, then call addAnime(...) or updateAnime(id, ...)

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

const MOCK_GENRES = [
  "Action",
  "Romance",
  "Comedy",
  "Fantasy",
  "Sci-Fi",
  "Slice of Life",
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <Card className="border-purple-900/30 bg-zinc-900/60">
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle className="text-purple-100">Anime admin</CardTitle>
              <CardDescription className="text-purple-300/60">
                Create, update, or remove entries from the catalog.
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              {/* TODO 6: Wire onClick to `handleReset` */}
              <Button
                variant="outline"
                size="sm"
                className="border-purple-900/40 bg-transparent text-purple-200 hover:bg-purple-900/30 hover:text-purple-50"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
              {/* TODO 7: Wire onClick to open the editor in "create" mode
                  onClick={() => setEditor({ mode: "create" })} */}
              <Button
                size="sm"
                className="bg-purple-600 text-white hover:bg-purple-500"
              >
                <Plus className="h-4 w-4" />
                Add anime
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <div className="overflow-hidden rounded-lg border border-purple-900/30">
              <Table>
                <TableHeader>
                  <TableRow className="border-purple-900/30 hover:bg-transparent">
                    <TableHead className="w-20 text-purple-300/80">
                      Poster
                    </TableHead>
                    <TableHead className="text-purple-300/80">Title</TableHead>
                    <TableHead className="text-purple-300/80">Genre</TableHead>
                    <TableHead className="text-right text-purple-300/80">
                      Episodes
                    </TableHead>
                    <TableHead className="w-16" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* TODO 8: Replace the mock rows with `animes.map((anime) => ...)` */}
                  {MOCK_ANIMES.map((anime) => (
                    <TableRow
                      key={anime.id}
                      className="border-purple-900/30 hover:bg-purple-900/10"
                    >
                      <TableCell>
                        <img
                          src={anime.image}
                          alt={anime.title}
                          className="h-14 w-10 rounded-md object-cover"
                        />
                      </TableCell>
                      <TableCell className="font-medium text-purple-100">
                        {anime.title}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className="bg-purple-600/20 text-purple-200 hover:bg-purple-600/30"
                        >
                          {anime.genre}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm text-purple-200">
                        {anime.episodes}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-md text-purple-300 outline-none transition-colors hover:bg-purple-900/30 hover:text-purple-100 focus-visible:ring-2 focus-visible:ring-purple-500/40">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {/* TODO 9: onSelect={() => setEditor({ mode: "edit", anime })} */}
                            <DropdownMenuItem>
                              <Pencil className="h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            {/* TODO 10: onSelect={() => setDeleting(anime)} */}
                            <DropdownMenuItem variant="destructive">
                              <Trash2 className="h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <p className="mt-4 text-xs text-purple-300/50">
              Data is stored in <code className="font-mono">localStorage</code>.
              Use Reset to restore the seed from{" "}
              <code className="font-mono">data/anime.json</code>.
            </p>
          </CardContent>
        </Card>
      </main>

      {/* -----------------------------------------------------------------
          TODO 11: Editor Sheet
          Open/close via `editor !== null` + `setEditor(null)`.
          Swap the mocked form fields below to controlled inputs.
          On submit, call addAnime() or updateAnime(id, ...).
      ----------------------------------------------------------------- */}
      <Sheet>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Add anime</SheetTitle>
            <SheetDescription>
              Create a new entry for the catalog.
            </SheetDescription>
          </SheetHeader>

          <form className="flex flex-1 flex-col gap-5 overflow-y-auto px-4 py-2">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              {/* TODO 12: value + onChange → title state */}
              <Input id="title" placeholder="Attack on Titan" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="genre">Genre</Label>
              {/* TODO 13: value + onValueChange → genre state
                  Use GENRES from the store instead of MOCK_GENRES. */}
              <Select>
                <SelectTrigger id="genre" className="w-full">
                  <SelectValue placeholder="Select genre" />
                </SelectTrigger>
                <SelectContent>
                  {MOCK_GENRES.map((g) => (
                    <SelectItem key={g} value={g}>
                      {g}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="episodes">Episodes</Label>
              {/* TODO 14: value + onChange → episodes state (number) */}
              <Input id="episodes" type="number" min={1} step={1} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="image">Image URL</Label>
              {/* TODO 15: value + onChange → image state; render a preview below */}
              <Input
                id="image"
                placeholder="https://placehold.co/400x560/..."
              />
            </div>
          </form>

          <SheetFooter>
            {/* TODO 16: onClick → validate + addAnime / updateAnime, then close */}
            <Button
              type="submit"
              className="bg-purple-600 text-white hover:bg-purple-500"
            >
              Create
            </Button>
            {/* TODO 17: onClick → setEditor(null) */}
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* -----------------------------------------------------------------
          TODO 18: Delete confirmation dialog
          Open/close via `deleting !== null` + `setDeleting(null)`.
          Wire the destructive action to `handleDelete`.
      ----------------------------------------------------------------- */}
      <AlertDialog>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this anime?</AlertDialogTitle>
            <AlertDialogDescription>
              This anime will be removed from the catalog. This cannot be
              undone from the UI — use Reset to restore the seed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {/* TODO 19: onClick={handleDelete} */}
            <AlertDialogAction className="bg-red-600 text-white hover:bg-red-500">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
}
