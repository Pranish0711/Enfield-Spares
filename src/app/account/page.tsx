import Link from "next/link";
import { getSession } from "@/lib/auth";

export default async function AccountPage() {
  const session = await getSession();

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold text-amber-400">My Account</h1>
      {session ? (
        <p className="text-sm text-zinc-300">
          Logged in as <span className="font-semibold text-zinc-100">{session.email}</span>
        </p>
      ) : null}
      <div className="grid gap-4 md:grid-cols-3">
        {["Profile Management", "Address Book", "Order Tracking"].map((item) => (
          <div key={item} className="rounded border border-zinc-800 bg-zinc-950 p-4">{item}</div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href="/orders" className="inline-block rounded bg-amber-500 px-4 py-2 font-semibold text-black">View Order History</Link>
        <form action="/api/auth/logout" method="post">
          <button type="submit" className="inline-block rounded border border-zinc-700 px-4 py-2 font-semibold text-zinc-100">
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}
