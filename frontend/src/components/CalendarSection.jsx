import { useMemo, useState } from 'react';
import { useListing } from '../context/ListingContext';
import { ChevronLeftIcon, ChevronRightIcon, KeyboardIcon } from './Icons';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DOW = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function monthMatrix(year, month) {
  const first = new Date(Date.UTC(year, month, 1));
  const offset = first.getUTCDay();
  const days = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const cells = Array.from({ length: offset }, () => null);
  for (let d = 1; d <= days; d += 1) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function CalendarSection() {
  const { listing } = useListing();
  const [offset, setOffset] = useState(0);
  const [range, setRange] = useState(() => ({ start: new Date(Date.UTC(2026, 9, 18)), end: new Date(Date.UTC(2026, 9, 23)) }));
  const [anchor, setAnchor] = useState(null);

  const months = useMemo(() => {
    const base = { y: 2026, m: 9 };
    return [0, 1].map((i) => {
      const idx = base.m + offset + i;
      const y = base.y + Math.floor(idx / 12);
      const m = ((idx % 12) + 12) % 12;
      return { y, m, cells: monthMatrix(y, m) };
    });
  }, [offset]);

  if (!listing) return null;

  const same = (a, b) => a && b && a.getTime() === b.getTime();
  const pick = (date) => {
    if (!anchor || (range.start && range.end)) {
      setAnchor(date);
      setRange({ start: date, end: null });
      return;
    }
    if (date < anchor) {
      setRange({ start: date, end: anchor });
    } else {
      setRange({ start: anchor, end: date });
    }
    setAnchor(null);
  };

  const nights = range.start && range.end ? Math.round((range.end - range.start) / 86400000) : 0;

  return (
    <section className="py-8" aria-label="Stay dates">
      <h2 className="text-[22px] font-semibold leading-[28px]">
        {nights ? `${nights} nights in Candolim` : listing.stay.label}
      </h2>
      <p className="mt-2 text-[15px] text-muted">
        {range.start && range.end
          ? `${range.start.getUTCDate()} ${MONTHS[range.start.getUTCMonth()].slice(0, 3)} ${range.start.getUTCFullYear()} - ${range.end.getUTCDate()} ${MONTHS[range.end.getUTCMonth()].slice(0, 3)} ${range.end.getUTCFullYear()}`
          : listing.stay.rangeLabel}
      </p>
      <div className="mt-6 grid grid-cols-2 gap-x-16">
        {months.map((mo, mi) => (
          <div key={`${mo.y}-${mo.m}`} className="relative">
            {mi === 0 ? (
              <button type="button" aria-label="Previous month" disabled={offset === 0} onClick={() => setOffset((o) => Math.max(0, o - 1))} className="icon-btn absolute -left-1 top-1 h-8 w-8 disabled:text-disabled disabled:hover:bg-transparent">
                <ChevronLeftIcon size={14} />
              </button>
            ) : (
              <button type="button" aria-label="Next month" disabled={offset >= 10} onClick={() => setOffset((o) => Math.min(10, o + 1))} className="icon-btn absolute -right-1 top-1 h-8 w-8 disabled:text-disabled disabled:hover:bg-transparent">
                <ChevronRightIcon size={14} />
              </button>
            )}
            <div className="text-center text-[16px] font-semibold">
              {MONTHS[mo.m]} {mo.y}
            </div>
            <div className="mt-4 grid grid-cols-7 text-center text-[12px] font-semibold text-muted">
              {DOW.map((d, i) => (
                <span key={i} className="py-1">
                  {d}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-7 text-center">
              {mo.cells.map((d, i) => {
                if (!d) return <span key={i} />;
                const date = new Date(Date.UTC(mo.y, mo.m, d));
                const isStart = same(date, range.start);
                const isEnd = same(date, range.end);
                const between = range.start && range.end && date > range.start && date < range.end;
                return (
                  <button
                    type="button"
                    key={i}
                    onClick={() => pick(date)}
                    aria-label={`${MONTHS[mo.m]} ${d}, ${mo.y}`}
                    className={`mx-auto my-1 flex h-10 w-10 items-center justify-center rounded-full text-[15px] transition-colors ${isStart || isEnd ? 'bg-ink text-white' : between ? 'rounded-none bg-surface' : 'hover:bg-surface'}`}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <KeyboardIcon size={22} className="text-muted" />
        <button
          type="button"
          className="text-[14px] font-semibold underline-link"
          onClick={() => {
            setRange({ start: null, end: null });
            setAnchor(null);
          }}
        >
          Clear dates
        </button>
      </div>
    </section>
  );
}
