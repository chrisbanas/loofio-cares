import { motion, useInView } from 'motion/react';
import { CalendarDays, Footprints, Leaf, MapPinned } from 'lucide-react';
import { useRef } from 'react';
import { trackerCells, trackerMonth, trackerSummary, type TrackDay } from '../trackerData';

const fullCellStyles: Record<TrackDay['status'], string> = {
  pickup: 'bg-emerald-100 text-emerald-900 ring-1 ring-inset ring-emerald-200',
  'long-walk': 'bg-amber-100 text-amber-900 ring-1 ring-inset ring-amber-200',
  none: 'bg-stone-100 text-stone-500 ring-1 ring-inset ring-stone-200',
};

export function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const recentEntries = trackerMonth.days
    .filter((entry) => entry.day <= trackerMonth.loggedThroughDay && entry.status !== 'none')
    .slice(-3)
    .reverse();

  return (
    <section id="track" className="bg-[#fffaf2] px-6 py-16 sm:px-8 sm:py-20 md:py-24" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-6 text-4xl font-light text-stone-900 sm:text-5xl md:text-6xl">
            Daily Track
          </h2>
          <div className="mx-auto h-1 w-24 bg-emerald-500" />
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-stone-700 sm:text-xl">
            This tracker is about consistency. We are not measuring perfect numbers. We are simply marking the days we cleaned up along the walk.
          </p>
        </motion.div>

        <div className="mb-8 grid gap-5 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-[2rem] bg-white p-6 shadow-lg"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <CalendarDays className="h-7 w-7" />
            </div>
            <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Cleanup Days</p>
            <p className="mt-3 text-4xl font-light text-stone-900">{trackerSummary.cleanupDays}</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">Days this month with a cleanup logged.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-[2rem] bg-white p-6 shadow-lg"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <MapPinned className="h-7 w-7" />
            </div>
            <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Long Walk Cleanups</p>
            <p className="mt-3 text-4xl font-light text-stone-900">{trackerSummary.longWalkCleanups}</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">Weekend hikes, beach days, and longer routes.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="rounded-[2rem] bg-white p-6 shadow-lg"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-700">
              <Footprints className="h-7 w-7" />
            </div>
            <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Current Streak</p>
            <p className="mt-3 text-4xl font-light text-stone-900">{trackerSummary.currentStreak}</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">Cleanup days in a row through the latest logged walk.</p>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="rounded-[2rem] bg-stone-950 p-6 text-white shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-amber-300/80">Monthly View</p>
                <h3 className="mt-2 text-3xl font-light sm:text-4xl">{trackerMonth.monthLabel}</h3>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-stone-300">
                Green marks a regular pickup day. Gold marks a longer weekend cleanup. Future days stay open.
              </p>
            </div>

            <div className="mb-3 grid grid-cols-7 gap-2 text-center text-[11px] uppercase tracking-[0.24em] text-stone-500 sm:text-xs">
              {trackerMonth.weekdayLabels.map((weekday) => (
                <span key={weekday}>{weekday}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {trackerCells.map((cell, index) => {
                if (!cell) {
                  return <div key={`empty-${index}`} className="aspect-square rounded-2xl bg-transparent" />;
                }

                const isFuture = cell.day > trackerMonth.loggedThroughDay;

                return (
                  <div
                    key={cell.day}
                    className={`aspect-square rounded-2xl p-2 sm:p-3 ${
                      isFuture ? 'bg-white/5 text-stone-500 ring-1 ring-inset ring-white/8' : fullCellStyles[cell.status]
                    }`}
                  >
                    <div className="flex h-full flex-col justify-between">
                      <span className="text-sm font-medium sm:text-base">{cell.day}</span>
                      {!isFuture && cell.status === 'pickup' && <Leaf className="h-4 w-4 self-end sm:h-5 sm:w-5" />}
                      {!isFuture && cell.status === 'long-walk' && (
                        <Footprints className="h-4 w-4 self-end sm:h-5 sm:w-5" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="space-y-5"
          >
            <div className="rounded-[2rem] bg-white p-6 shadow-lg sm:p-7">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Legend</p>
              <div className="mt-5 space-y-4 text-sm text-stone-700 sm:text-base">
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded-full bg-emerald-400" />
                  <span>Pickup done</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded-full bg-amber-300" />
                  <span>Long walk cleanup</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded-full bg-stone-200" />
                  <span>No pickup logged</span>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-lg sm:p-7">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Recent Notes</p>
              <div className="mt-5 space-y-4">
                {recentEntries.map((entry) => (
                  <div key={entry.day} className="rounded-2xl bg-stone-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-500">{trackerMonth.monthLabel} · Day {entry.day}</p>
                    <p className="mt-2 text-base font-medium text-stone-900">
                      {entry.status === 'long-walk' ? 'Long walk cleanup' : 'Pickup done'}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-stone-600">{entry.note ?? 'Cleanup logged.'}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
