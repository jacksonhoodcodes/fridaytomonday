export default function NowPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold tracking-tight">Now</h1>
      <p className="max-w-2xl text-zinc-600">A living page with my current focus. Update this anytime as priorities change.</p>
      <section className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Current focus</h2>
        <ul className="list-disc space-y-2 pl-6 text-zinc-700">
          <li>Publish 3 consistency logs each Tue–Thu.</li>
          <li>Run one 8-hour sprint each Fri–Mon and share proof publicly.</li>
          <li>Document projects into clean case studies for the portfolio.</li>
        </ul>
      </section>
    </div>
  );
}
