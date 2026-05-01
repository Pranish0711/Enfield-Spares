const analytics = [
  { label: "Sales", value: "$42,580" },
  { label: "Orders", value: "328" },
  { label: "Low Inventory", value: "14 SKUs" },
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-amber-400">Admin Dashboard</h1>
      <p className="text-zinc-300">Admin email configured: admin@enfieldspares.com</p>
      <div className="grid gap-4 md:grid-cols-3">
        {analytics.map((a) => (
          <div key={a.label} className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <p className="text-sm text-zinc-400">{a.label}</p>
            <p className="mt-2 text-2xl font-bold">{a.value}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
          <h2 className="font-semibold">Inventory Management</h2>
          <ul className="mt-2 list-disc pl-4 text-sm text-zinc-300">
            <li>Add / Edit / Delete products</li>
            <li>Update pricing and stock</li>
            <li>Manage categories and bike compatibility</li>
          </ul>
        </section>
        <section className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
          <h2 className="font-semibold">Order & Customer Operations</h2>
          <ul className="mt-2 list-disc pl-4 text-sm text-zinc-300">
            <li>View customer profiles</li>
            <li>Update order statuses</li>
            <li>Review payment activity</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
