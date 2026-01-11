import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              I&apos;m a Computer Science student at Haverford College with a passion for
              technology, research, and innovation. My academic journey has been focused on
              exploring the intersections of software development and real-world problem-solving.
            </p>

            <p>
              Through my coursework and research experiences, I&apos;ve developed expertise in
              areas including software engineering, data structures, algorithms, and system design.
              I&apos;m particularly interested in how technology can be leveraged to create
              meaningful impact in various domains.
            </p>

            <p>
              When I&apos;m not coding or researching, you can find me exploring new technologies,
              contributing to open-source projects, and continuously learning about emerging
              trends in computer science.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Read more about me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
