
"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
      if (!user) {
        router.push("/week-9");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [user, router]);

  if (loading) {
    return <div className="p-4 text-white">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="p-6 bg-black min-h-screen flex flex-col items-left text-white">
      <h1 className="text-4xl font-bold mb-6">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <div className="flex">
        <ItemList items={items} onItemSelect={handleItemSelect} />
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}