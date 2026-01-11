'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import AchievementCard from '@/components/achievements/AchievementCard';
import AchievementFilters from '@/components/achievements/AchievementFilters';
import achievementsData from '@/lib/data/achievements.json';

export default function AchievementsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const getFilteredAchievements = () => {
    if (activeFilter === 'all') {
      return [
        ...achievementsData.publications.map(item => ({ ...item, type: 'publication' as const })),
        ...achievementsData.projects.map(item => ({ ...item, type: 'project' as const })),
        ...achievementsData.awards.map(item => ({ ...item, type: 'award' as const })),
        ...achievementsData.education.map(item => ({ ...item, type: 'education' as const })),
      ];
    }

    switch (activeFilter) {
      case 'publications':
        return achievementsData.publications.map(item => ({ ...item, type: 'publication' as const }));
      case 'projects':
        return achievementsData.projects.map(item => ({ ...item, type: 'project' as const }));
      case 'awards':
        return achievementsData.awards.map(item => ({ ...item, type: 'award' as const }));
      case 'education':
        return achievementsData.education.map(item => ({ ...item, type: 'education' as const }));
      default:
        return [];
    }
  };

  const filteredAchievements = getFilteredAchievements();

  return (
    <main className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Achievements & Projects
            </h1>
            <p className="text-xl text-gray-600">
              A comprehensive overview of my academic work, research, projects, and recognitions
            </p>
          </div>

          {/* Filters */}
          <AchievementFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

          {/* Achievements Grid */}
          {filteredAchievements.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAchievements.map((achievement: any) => (
                <AchievementCard
                  key={achievement.id || `${achievement.type}-${achievement.degree || achievement.title}`}
                  achievement={achievement}
                  type={achievement.type}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No achievements found in this category.</p>
            </div>
          )}

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {achievementsData.publications.length}
              </div>
              <div className="text-sm text-gray-600">Publications</div>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {achievementsData.projects.length}
              </div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {achievementsData.awards.length}
              </div>
              <div className="text-sm text-gray-600">Awards</div>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {achievementsData.education.length}
              </div>
              <div className="text-sm text-gray-600">Education</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
