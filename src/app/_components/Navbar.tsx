import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-neutral-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Menu className="size-6 text-neutral-700 md:hidden" />
          <h1 className="text-xl text-neutral-900">Portfolio</h1>
        </div>
        <div className="flex items-center gap-6">
          <a 
            href="#portfolio" 
            className="text-neutral-700 hover:text-neutral-900 transition-colors"
          >
            See Portfolio
          </a>
          <a 
            href="#article" 
            className="text-neutral-700 hover:text-neutral-900 transition-colors"
          >
            Article
          </a>
        </div>
      </div>
    </nav>
  );
}
