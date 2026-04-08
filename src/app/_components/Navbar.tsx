import { Menu } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-neutral-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Menu className="size-6 text-neutral-700 md:hidden" />
          <Link href="/" className="size-6 w-auto text-neutral-700">
          <h1 className="text-neutral-900">home_sweet_home</h1>

          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link 
            href="/portfolio" 
            className="text-neutral-700 hover:text-neutral-900 transition-colors"
          >
            Portfolio
          </Link>
          <Link 
            href="/experience" 
            className="text-neutral-700 hover:text-neutral-900 transition-colors"
          >
            Experience
          </Link>
        </div>
      </div>
    </nav>
  );
}
