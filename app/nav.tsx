import React from "react";

export const Nav = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const categories = [
    "Action",
    "Romance",
    "Comedy",
    "Fantasy",
    "Sci-Fi",
    "Slice of Life",
  ];
  const activeClass =
    "rounded-full bg-purple-600 px-4 py-1.5 text-sm font-medium text-white";
  const defaultClass =
    "rounded-full px-4 py-1.5 text-sm font-medium text-purple-300 transition-colors hover:bg-purple-900/30";
  return (
    <nav className="border-b border-purple-900/30 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6">
        <ul className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
          <li>
            <button
              onClick={() => {
                setSelectedCategory("All");
              }}
              className={selectedCategory == "All" ? activeClass : defaultClass}
            >
              All
            </button>
          </li>
          {categories.map((category) => {
            return (
              <li key={category}>
                <button
                  onClick={() => {
                    setSelectedCategory(category);
                  }}
                  className={
                    selectedCategory == category ? activeClass : defaultClass
                  }
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
