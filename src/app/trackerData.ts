export type TrackStatus = 'pickup' | 'long-walk' | 'none';

export type TrackDay = {
  day: number;
  status: TrackStatus;
  note?: string;
};

const month = {
  year: 2026,
  monthIndex: 3,
  monthLabel: 'April 2026',
  loggedThroughDay: 18,
};

const dayEntries: TrackDay[] = [
  { day: 1, status: 'pickup', note: 'Neighborhood walk' },
  { day: 2, status: 'none' },
  { day: 3, status: 'pickup', note: 'Neighborhood walk' },
  { day: 4, status: 'long-walk', note: 'Weekend trail cleanup' },
  { day: 5, status: 'pickup', note: 'Neighborhood walk' },
  { day: 6, status: 'none' },
  { day: 7, status: 'pickup', note: 'Neighborhood walk' },
  { day: 8, status: 'pickup', note: 'Neighborhood walk' },
  { day: 9, status: 'none' },
  { day: 10, status: 'pickup', note: 'Neighborhood walk' },
  { day: 11, status: 'long-walk', note: 'Beach cleanup' },
  { day: 12, status: 'pickup', note: 'Neighborhood walk' },
  { day: 13, status: 'pickup', note: 'Neighborhood walk' },
  { day: 14, status: 'pickup', note: 'Neighborhood walk' },
  { day: 15, status: 'none' },
  { day: 16, status: 'pickup', note: 'Neighborhood walk' },
  { day: 17, status: 'pickup', note: 'Neighborhood walk' },
  { day: 18, status: 'long-walk', note: 'Weekend hike cleanup' },
];

const daysInMonth = new Date(month.year, month.monthIndex + 1, 0).getDate();
const firstWeekday = new Date(month.year, month.monthIndex, 1).getDay();

const dayMap = new Map(dayEntries.map((entry) => [entry.day, entry]));

export const trackerMonth = {
  ...month,
  weekdayLabels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  days: Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;

    return dayMap.get(day) ?? {
      day,
      status: 'none' as const,
    };
  }),
};

export const trackerCells = [
  ...Array.from({ length: firstWeekday }, () => null),
  ...trackerMonth.days,
];

export const trackerSummary = {
  cleanupDays: trackerMonth.days.filter(
    (entry) => entry.day <= trackerMonth.loggedThroughDay && entry.status !== 'none',
  ).length,
  longWalkCleanups: trackerMonth.days.filter(
    (entry) => entry.day <= trackerMonth.loggedThroughDay && entry.status === 'long-walk',
  ).length,
  currentStreak: (() => {
    let streak = 0;

    for (let day = trackerMonth.loggedThroughDay; day >= 1; day -= 1) {
      const entry = trackerMonth.days[day - 1];

      if (entry.status === 'none') {
        break;
      }

      streak += 1;
    }

    return streak;
  })(),
};
