export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-14">
      <div className="mx-auto max-w-3xl">
        <header className="space-y-4">
          <p className="text-sm text-neutral-500">Jackson Hood</p>

          <h1 className="text-4xl font-semibold tracking-tight">
            Consistency Tue–Thu. Compression Fri–Mon.
          </h1>

          <p className="text-neutral-600">
            Weekly posts: Tue–Thu = habits + systems. Fri–Mon = timeboxed sprints
            where I ship something that should’ve taken 4x longer.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/logs"
              className="rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50"
            >
              Tue–Thu Logs
            </a>
            <a
              href="/sprints"
              className="rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50"
            >
              Fri–Mon Sprints
            </a>
            <a
              href="/portfolio"
              className="rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50"
            >
              Portfolio
            </a>
          </div>
        </header>

        <section className="mt-12 space-y-4">
          <h2 className="text-lg font-medium">What’s live right now</h2>
          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>Site skeleton (Home + Logs + Sprints + Portfolio)</li>
            <li>Weekly post templates (fast to publish)</li>
            <li>Project cards with “Read” + “View proof” links</li>
          </ul>
        </section>

        <footer className="mt-16 border-t pt-6 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Jackson Hood</p>
        </footer>
      </div>
    </main>
  );
}