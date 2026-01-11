import { Award, BookOpen, Code, GraduationCap, ExternalLink, Github } from 'lucide-react';
import type { Publication, Award as AwardType, Project, Education } from '@/lib/types/achievement';

type AchievementItem = Publication | AwardType | Project | Education;

interface AchievementCardProps {
  achievement: AchievementItem;
  type: 'publication' | 'award' | 'project' | 'education';
}

export default function AchievementCard({ achievement, type }: AchievementCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'publication':
        return <BookOpen className="h-6 w-6 text-primary-600" />;
      case 'award':
        return <Award className="h-6 w-6 text-primary-600" />;
      case 'project':
        return <Code className="h-6 w-6 text-primary-600" />;
      case 'education':
        return <GraduationCap className="h-6 w-6 text-primary-600" />;
    }
  };

  const renderPublication = (pub: Publication) => (
    <>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{pub.authors.join(', ')}</p>
      <p className="text-sm text-gray-700 font-medium mb-2">
        {pub.journal || pub.conference} ({pub.year})
      </p>
      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{pub.abstract}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {pub.tags.map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      {(pub.doi || pub.pdf) && (
        <div className="flex gap-3">
          {pub.doi && (
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:text-primary-700 flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              DOI
            </a>
          )}
          {pub.pdf && (
            <a
              href={pub.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:text-primary-700 flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              PDF
            </a>
          )}
        </div>
      )}
    </>
  );

  const renderAward = (award: AwardType) => (
    <>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.title}</h3>
      <p className="text-sm text-gray-700 font-medium mb-2">{award.organization}</p>
      <p className="text-sm text-gray-600 mb-2">Year: {award.year}</p>
      <p className="text-sm text-gray-600">{award.description}</p>
    </>
  );

  const renderProject = (project: Project) => (
    <>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{project.role} • {project.year}</p>
      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.technologies.map((tech) => (
          <span key={tech} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      {(project.github || project.website) && (
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:text-primary-700 flex items-center"
            >
              <Github className="h-4 w-4 mr-1" />
              GitHub
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:text-primary-700 flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Website
            </a>
          )}
        </div>
      )}
    </>
  );

  const renderEducation = (edu: Education) => (
    <>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h3>
      <p className="text-sm text-gray-700 font-medium mb-1">{edu.institution}</p>
      <p className="text-sm text-gray-600 mb-2">{edu.location}</p>
      <p className="text-sm text-gray-600 mb-2">
        {new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} -{' '}
        {edu.endDate ? new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present'}
      </p>
      {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
      {edu.thesis && <p className="text-sm text-gray-600 mt-2">Thesis: {edu.thesis}</p>}
      {edu.advisor && <p className="text-sm text-gray-600">Advisor: {edu.advisor}</p>}
    </>
  );

  const renderContent = () => {
    switch (type) {
      case 'publication':
        return renderPublication(achievement as Publication);
      case 'award':
        return renderAward(achievement as AwardType);
      case 'project':
        return renderProject(achievement as Project);
      case 'education':
        return renderEducation(achievement as Education);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start mb-4">
        {getIcon()}
        <span className="ml-2 text-xs font-medium text-gray-500 uppercase">{type}</span>
      </div>
      {renderContent()}
    </div>
  );
}
