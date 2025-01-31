"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="flex items-center space-x-4 p-6 border shadow-lg bg-white w-71">
      <span className="text-2xl font-bold">{quantity}</span>
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className={`px-4 py-2 text-lg font-bold rounded ${
          quantity === 1
            ? "bg-gray-300 text-white cursor-not-allowed"
            : "bg-gray-500 text-white hover:bg-gray-600"
        }`}
      >
        -
      </button>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className={`px-4 py-2 text-lg font-bold rounded ${
          quantity === 20
            ? "bg-gray-300 text-white cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        +
      </button>
    </div>
  );
}
