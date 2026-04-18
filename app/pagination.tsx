export const Pagination = ({
  totalPages,
  currentPage,
  handleNext,
  handlePrev,
}: {
  totalPages: number;
  currentPage: number;
  handleNext: () => void;
  handlePrev: () => void;
}) => {
  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      {/* TODO 12: Wire onClick={handlePrev} disabled={skip === 0} */}
      <button
        disabled={currentPage == 1}
        onClick={handlePrev}
        className="rounded-lg border border-purple-900/40 bg-zinc-900 px-4 py-2 text-sm font-medium text-purple-300 shadow-sm transition-colors hover:bg-purple-900/20 disabled:cursor-not-allowed disabled:opacity-40"
      >
        &larr; Prev
      </button>
      <span className="text-sm text-purple-300/60">
        {/* TODO 13: Show page number */}
        {/* Page {Math.floor(skip / ANIME_PER_PAGE) + 1} / {Math.ceil(filteredAnime.length / ANIME_PER_PAGE)} */}
        Page {currentPage} / {totalPages}
      </span>
      {/* TODO 12: Wire onClick={handleNext} disabled={skip + ANIME_PER_PAGE >= filteredAnime.length} */}
      <button
        onClick={handleNext}
        disabled={currentPage == totalPages}
        className="rounded-lg border border-purple-900/40 bg-zinc-900 px-4 py-2 text-sm font-medium text-purple-300 shadow-sm transition-colors hover:bg-purple-900/20 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next &rarr;
      </button>
    </div>
  );
};
