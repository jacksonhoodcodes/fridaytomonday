import Link from 'next/link';
import { ReactNode } from 'react';

const primaryNav = [
  { href: '/logs', label: 'Tue–Thu Log' },
  { href: '/sprints', label: 'Fri–Mon Grind' },
  { href: '/portfolio', label: 'Portfolio' }
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/logs', label: 'Tue–Thu Logs' },
  { href: '/sprints', label: 'Fri–Mon Sprints' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/now', label: 'Now' },
  { href: '/subscribe', label: 'Subscribe' }
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="flex justify-center py-5">
            <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">
              Jackson Hood
            </Link>
          </div>

          <nav className="border-t border-zinc-200/70 py-3">
            <ul className="grid grid-cols-1 gap-2 text-sm font-medium text-zinc-600 sm:grid-cols-3 sm:items-center">
              <li className="text-center sm:text-left">
                <Link href={primaryNav[0].href} className="inline-block rounded-full px-3 py-1.5 hover:bg-zinc-100 hover:text-zinc-900">
                  {primaryNav[0].label}
                </Link>
              </li>
              <li className="text-center">
                <Link href={primaryNav[1].href} className="inline-block rounded-full px-3 py-1.5 hover:bg-zinc-100 hover:text-zinc-900">
                  {primaryNav[1].label}
                </Link>
              </li>
              <li className="text-center sm:text-right">
                <Link href={primaryNav[2].href} className="inline-block rounded-full px-3 py-1.5 hover:bg-zinc-100 hover:text-zinc-900">
                  {primaryNav[2].label}
                </Link>
              </li>
            </ul>
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="text-base font-semibold tracking-tight text-zinc-900">
            Jackson Hood
          </Link>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-zinc-600">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-3 py-1.5 hover:bg-zinc-100 hover:text-zinc-900">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-12">{children}</main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>Consistency Tue–Thu. Compression Fri–Mon.</p>
          <div className="flex items-center gap-4">
            <Link href="/subscribe" className="font-medium text-zinc-900 hover:text-zinc-700">
              Subscribe
            </Link>
            <p>© {new Date().getFullYear()} Jackson Hood</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
