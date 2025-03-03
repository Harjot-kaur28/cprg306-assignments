"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log("New Item Added:", item);
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Item name"
          className="w-full border p-2 rounded "
        />
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">{quantity}</span>
            <button
              onClick={decrement}
              type="button"
              disabled={quantity === 1}
              className="px-4 py-2 text-lg font-bold rounded bg-gray-500 text-white hover:bg-blue-600"
            >
              -
            </button>
            <button
              onClick={increment}
              type="button"
              className="px-4 py-2 text-lg font-bold bg-blue-500 text-white hover:bg-blue-600"
            >
              +
            </button>
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded text-gray-900"
          >
            {[
              "Produce",
              "Dairy",
              "Bakery",
              "Meat",
              "Frozen Foods",
              "Canned Goods",
              "Dry Goods",
              "Beverages",
              "Snacks",
              "Household",
              "Other",
            ].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full text-2xl bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          +
        </button>
      </form>
    </div>
  );
}

