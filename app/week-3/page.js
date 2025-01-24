import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 bg-navy min-h-screen flex flex-col items-left text-white">
      <h1 className="text-4xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}
