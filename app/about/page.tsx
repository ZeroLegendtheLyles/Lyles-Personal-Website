import type { Metadata } from 'next';
import { Award, BookOpen, Code, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Lyle Zhang - education, interests, and background.',
};

export default function AboutPage() {
  const skills = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Node.js', 'Git', 'SQL', 'Data Structures', 'Algorithms'
  ];

  const interests = [
    { icon: Code, title: 'Software Engineering', description: 'Building scalable and efficient applications' },
    { icon: BookOpen, title: 'Research', description: 'Exploring new technologies and methodologies' },
    { icon: Award, title: 'Problem Solving', description: 'Tackling complex computational challenges' },
    { icon: GraduationCap, title: 'Continuous Learning', description: 'Always expanding my knowledge base' },
  ];

  return (
    <main className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600">
              Computer Science Student | Researcher | Developer
            </p>
          </div>

          {/* Biography */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Biography</h2>
            <p className="text-gray-600 mb-4">
              I&apos;m a Computer Science student at Haverford College, where I&apos;m pursuing my passion
              for technology and innovation. My academic journey has been focused on understanding the
              fundamental principles of computer science while applying them to solve real-world problems.
            </p>
            <p className="text-gray-600 mb-4">
              Throughout my time at Haverford, I&apos;ve had the opportunity to work on diverse projects
              ranging from web development to data structures and algorithms. I believe in the power of
              technology to create positive change, and I&apos;m constantly seeking ways to leverage my skills
              to make a meaningful impact.
            </p>
            <p className="text-gray-600 mb-4">
              When I&apos;m not coding or studying, I enjoy exploring new technologies, contributing to
              open-source projects, and staying up-to-date with the latest developments in computer science.
              I&apos;m particularly interested in the intersections of software engineering, research, and
              practical application.
            </p>
            <p className="text-gray-600">
              I&apos;m always open to new opportunities, collaborations, and discussions about technology.
              Feel free to <Link href="/contact" className="text-primary-600 hover:text-primary-700">reach out</Link> if
              you&apos;d like to connect!
            </p>
          </div>

          {/* Education */}
          <div className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary-600" />
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Bachelor of Arts in Computer Science</h3>
                <p className="text-gray-700">Haverford College</p>
                <p className="text-gray-600">Haverford, PA</p>
                <p className="text-gray-500">Expected Graduation: 2026</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg font-medium text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Interests & Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {interests.map((interest) => (
                <div key={interest.title} className="flex items-start p-4 bg-white border border-gray-200 rounded-lg">
                  <interest.icon className="h-8 w-8 text-primary-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{interest.title}</h3>
                    <p className="text-gray-600">{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CV Download */}
          <div className="bg-primary-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Download My Resume</h2>
            <p className="mb-6">
              Interested in learning more? Download my full resume for detailed information about my experience and qualifications.
            </p>
            <button
              className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors inline-flex items-center"
              disabled
            >
              Resume Available Upon Request
            </button>
            <p className="mt-4 text-sm text-primary-100">
              Please <Link href="/contact" className="underline">contact me</Link> to request my resume
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
