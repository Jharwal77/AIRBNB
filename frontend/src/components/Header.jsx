import { SearchIcon, GlobeIcon, MenuIcon } from './Icons';

export default function Header() {
  return (
    <header className="relative z-10 border-b border-line bg-white">
      <div className="flex h-20 items-center justify-between px-10 md:px-20">
        <a
          href="/"
          aria-label="Airbnb home"
          className="shrink-0 rounded-md px-1 py-2 transition-colors hover:bg-surface/60"
        >
          <img
            src="/images/logo.svg"
            alt=""
            className="h-8 w-[104px]"
          />
        </a>

        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex h-12 items-center rounded-full border border-line bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_6px_16px_rgba(0,0,0,0.08)]">
            <button
              type="button"
              className="flex h-full items-center gap-3 rounded-l-full pl-4 pr-5 text-sm font-semibold transition-colors hover:bg-surface"
            >
              <img
                src="/images/searchbar-house.png"
                alt=""
                className="-ml-1.5 h-12 w-12 object-fill"
              />
              Anywhere
            </button>

            <span
              className="h-6 w-px bg-line"
              aria-hidden="true"
            />

            <button
              type="button"
              className="h-full px-5 text-sm font-semibold transition-colors hover:bg-surface"
            >
              Anytime
            </button>

            <span
              className="h-6 w-px bg-line"
              aria-hidden="true"
            />

            <button
              type="button"
              className="flex h-full items-center gap-3 rounded-r-full pl-5 pr-2 text-sm font-medium text-muted transition-colors hover:bg-surface"
            >
              Add guests

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rausch text-white">
                <SearchIcon size={12} />
              </span>
            </button>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="rounded-full px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-surface"
          >
            Become a host
          </button>

          <button
            type="button"
            aria-label="Choose language"
            className="icon-btn h-10 w-10"
          >
            <GlobeIcon size={16} />
          </button>

          <button
            type="button"
            aria-label="Main navigation menu"
            className="icon-btn h-10 w-10 bg-surface"
          >
            <MenuIcon size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}