"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-lg font-semibold">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className="px-4 py-2 bg-orange-800 text-white"
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className="px-4 py-2 bg-orange-800 text-white"
        >
          Category
        </button>
      </div>

      
        {sortedItems.map((item) => (
            <div key={item.id} className="p-3 list-none w-80">
              <Item {...item} />
            </div>
          ))}
    </div>
  );
}
 