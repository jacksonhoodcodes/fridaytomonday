export default function SubscribePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold tracking-tight">Subscribe</h1>
      <p className="max-w-2xl text-zinc-600">Get new logs, sprints, and project case studies in your inbox. UI wired; backend can be connected later.</p>
      <form className="max-w-xl space-y-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-zinc-700">Email</span>
          <input type="email" placeholder="you@example.com" className="w-full rounded-lg border border-zinc-200 px-3 py-2 outline-none ring-zinc-300 focus:ring" />
        </label>
        <button type="button" className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700">
          Subscribe
        </button>
        <p className="text-xs text-zinc-500">TODO: Connect form action to Buttondown, ConvertKit, or Resend API.</p>
      </form>
    </div>
  );
}
