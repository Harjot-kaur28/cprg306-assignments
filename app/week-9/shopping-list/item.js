export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li onClick={() => onSelect(name)} className="bg-light-navy text-white p-4 shadow-md cursor-pointer">
      <p className="text-xl font-bold">{name}</p>
      <p className="text-lg">
        Buy <span className="font-semibold">{quantity}</span> in <span>{category}</span>
      </p>
    </li>
  );
}
