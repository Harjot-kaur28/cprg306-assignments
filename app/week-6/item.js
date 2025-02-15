export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-light-navy text-white p-4 shadow-md">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-lg">
          Buy <span className="font-semibold">{quantity}</span> in{" "}
          <span>{category}</span>
        </p>
      </li>
    );
  }