"use client";
import { MoreHorizontal, Pencil, Plus, Trash2 } from "lucide-react";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

// =====================================================================
// EXERCISE — Genre admin submodule
// Mock rows, inert buttons, closed dialogs. Your job is to:
//   1. Read animes via `useAnimes()` and compute a count per genre.
//   2. Wire Add / Edit / Delete against your own genre store
//      (or extend `@/lib/anime-store` with genre helpers).
// =====================================================================

// TODO 1: Imports
// import { useMemo, useState } from "react";
// import { toast } from "sonner";
// import { GENRES, useAnimes } from "@/lib/anime-store";

// TODO 2: Compute usage per genre
// const animes = useAnimes();
// const rows = useMemo(
//   () =>
//     GENRES.map((name) => ({
//       name,
//       count: animes.filter((a) => a.genre === name).length,
//     })),
//   [animes],
// );

// TODO 3: State for the Add / Edit dialog and Delete confirmation
// const [editing, setEditing] = useState<{ name: string } | "new" | null>(null);
// const [deleting, setDeleting] = useState<string | null>(null);

// TODO 4: Handlers
//   - handleSubmit(name): add or rename a genre (you design the storage shape)
//   - handleDelete(): remove `deleting` and clear state

// =====================================================================

const MOCK_ROWS = [
  { name: "Action", count: 7 },
  { name: "Romance", count: 3 },
  { name: "Comedy", count: 2 },
  { name: "Fantasy", count: 3 },
  { name: "Sci-Fi", count: 2 },
  { name: "Slice of Life", count: 3 },
];

export default function AdminGenresPage() {
  return (
    <>
      <Card className="border-purple-900/30 bg-zinc-900/60">
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle className="text-purple-100">Genres</CardTitle>
            <CardDescription className="text-purple-300/60">
              Manage the genres available to the catalog.
            </CardDescription>
          </div>
          {/* TODO 5: onClick={() => setEditing("new")} */}
          <Button
            size="sm"
            className="bg-purple-600 text-white hover:bg-purple-500"
          >
            <Plus className="h-4 w-4" />
            Add genre
          </Button>
        </CardHeader>

        <CardContent>
          <div className="overflow-hidden rounded-lg border border-purple-900/30">
            <Table>
              <TableHeader>
                <TableRow className="border-purple-900/30 hover:bg-transparent">
                  <TableHead className="text-purple-300/80">Name</TableHead>
                  <TableHead className="text-right text-purple-300/80">
                    Anime count
                  </TableHead>
                  <TableHead className="w-16" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* TODO 6: Replace MOCK_ROWS with the derived `rows` */}
                {MOCK_ROWS.map((row) => (
                  <TableRow
                    key={row.name}
                    className="border-purple-900/30 hover:bg-purple-900/10"
                  >
                    <TableCell className="font-medium text-purple-100">
                      <Badge
                        variant="secondary"
                        className="bg-purple-600/20 text-purple-200 hover:bg-purple-600/30"
                      >
                        {row.name}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm text-purple-200">
                      {row.count}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-md text-purple-300 outline-none transition-colors hover:bg-purple-900/30 hover:text-purple-100 focus-visible:ring-2 focus-visible:ring-purple-500/40">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {/* TODO 7: onSelect={() => setEditing({ name: row.name })} */}
                          <DropdownMenuItem>
                            <Pencil className="h-4 w-4" />
                            Rename
                          </DropdownMenuItem>
                          {/* TODO 8: onSelect={() => setDeleting(row.name)}
                              Consider disabling when row.count > 0. */}
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
            The current genre list lives in{" "}
            <code className="font-mono">GENRES</code> inside{" "}
            <code className="font-mono">lib/anime-store.ts</code>.
          </p>
        </CardContent>
      </Card>

      {/* -----------------------------------------------------------------
          TODO 9: Add / Rename dialog
          Open/close via `editing !== null` + `setEditing(null)`.
          Swap the mocked input to a controlled one.
      ----------------------------------------------------------------- */}
      <Dialog>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add genre</DialogTitle>
            <DialogDescription>
              Enter a name to add a new genre to the catalog.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-2 py-2">
            <Label htmlFor="genre-name">Name</Label>
            {/* TODO 10: value + onChange → name state */}
            <Input id="genre-name" placeholder="Psychological" />
          </div>

          <DialogFooter>
            {/* TODO 11: onClick → handleSubmit(name) */}
            <Button className="bg-purple-600 text-white hover:bg-purple-500">
              Save
            </Button>
            {/* TODO 12: onClick → setEditing(null) */}
            <Button variant="outline">Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* -----------------------------------------------------------------
          TODO 13: Delete confirmation
          Open/close via `deleting !== null` + `setDeleting(null)`.
      ----------------------------------------------------------------- */}
      <AlertDialog>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this genre?</AlertDialogTitle>
            <AlertDialogDescription>
              Removing a genre does not change any existing anime — those
              entries will keep the old value until you update them.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {/* TODO 14: onClick={handleDelete} */}
            <AlertDialogAction className="bg-red-600 text-white hover:bg-red-500">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
