export default function SignupPage() {
  return (
    <div className="mx-auto max-w-md rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <h1 className="text-2xl font-bold text-amber-400">Create Account</h1>
      <form className="mt-4 grid gap-3" action="/api/auth/signup" method="post">
        <input name="name" placeholder="Full name" className="rounded bg-zinc-900 p-3" required />
        <input name="email" type="email" placeholder="Email" className="rounded bg-zinc-900 p-3" required />
        <input name="password" type="password" placeholder="Password" className="rounded bg-zinc-900 p-3" required />
        <button type="submit" className="rounded bg-amber-500 px-4 py-2 font-semibold text-black">Register</button>
      </form>
    </div>
  );
}
