import Link from 'next/link';
import { ArrowRight, Award, BookOpen, Code } from 'lucide-react';
import achievementsData from '@/lib/data/achievements.json';

export default function AchievementsPreview() {
  const featuredPublications = achievementsData.publications.filter((pub) => pub.featured).slice(0, 2);
  const featuredProjects = achievementsData.projects.filter((proj) => proj.featured).slice(0, 2);
  const featuredAwards = achievementsData.awards.filter((award) => award.featured).slice(0, 2);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Achievements & Projects
            </h2>
            <p className="text-lg text-gray-600">
              A selection of my academic work, research, and projects
            </p>
          </div>

          {/* Featured Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Publications */}
            {featuredPublications.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Publications</h3>
                </div>
                {featuredPublications.map((pub: any) => (
                  <div key={pub.id} className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-1">{pub.title}</h4>
                    <p className="text-sm text-gray-600">{pub.journal || pub.conference || 'Publication'}</p>
                    <p className="text-sm text-gray-500">{pub.year}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {featuredProjects.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-primary-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Projects</h3>
                </div>
                {featuredProjects.map((proj) => (
                  <div key={proj.id} className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-1">{proj.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{proj.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {proj.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Awards */}
            {featuredAwards.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-primary-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Awards</h3>
                </div>
                {featuredAwards.map((award) => (
                  <div key={award.id} className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-1">{award.title}</h4>
                    <p className="text-sm text-gray-600">{award.organization}</p>
                    <p className="text-sm text-gray-500">{award.year}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* View All Link */}
          <div className="text-center">
            <Link
              href="/achievements"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Achievements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
