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

  const groupedItems = items.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  const sortedCategories = Object.keys(groupedItems).sort();

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
        <button
          onClick={() => setSortBy("group")}
          className="px-4 py-2 bg-orange-800 text-white"
        >
          Grouped Category
        </button>
      </div>

      {sortBy === "group"
        ? sortedCategories.map((category) => (
            <div key={category} className="mt-4">
              <h3 className="text-xl font-bold capitalize">{category}</h3>
              {groupedItems[category]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <div key={item.id} className="p-3 list-none w-80">
                    <Item {...item} />
                  </div>
                ))}
            </div>
          ))
        : sortedItems.map((item) => (
            <div key={item.id} className="p-3 list-none w-80">
              <Item {...item} />
            </div>
          ))}
    </div>
  );
}
