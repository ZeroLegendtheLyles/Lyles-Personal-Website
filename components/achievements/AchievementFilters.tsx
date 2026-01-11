'use client';

import { cn } from '@/lib/utils/cn';

interface AchievementFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function AchievementFilters({ activeFilter, onFilterChange }: AchievementFiltersProps) {
  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Publications', value: 'publications' },
    { label: 'Projects', value: 'projects' },
    { label: 'Awards', value: 'awards' },
    { label: 'Education', value: 'education' },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            'px-4 py-2 rounded-lg font-medium text-sm transition-colors',
            activeFilter === filter.value
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
