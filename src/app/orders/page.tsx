const orders = [
  { id: "ORD-1001", status: "Processing", items: 3 },
  { id: "ORD-1002", status: "Shipped", items: 1 },
  { id: "ORD-1003", status: "Delivered", items: 2 },
];

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-400">Order History</h1>
      <div className="mt-5 space-y-3">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between rounded border border-zinc-800 bg-zinc-950 p-4">
            <div>
              <p className="font-semibold">{order.id}</p>
              <p className="text-sm text-zinc-400">{order.items} items</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-amber-300">{order.status}</p>
              <button className="mt-1 text-xs underline">Download Invoice</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
