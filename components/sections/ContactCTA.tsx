import Link from 'next/link';
import { Mail, MessageSquare } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-16 bg-primary-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <MessageSquare className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors shadow-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Me a Message
            </Link>
            <a
              href="mailto:zzhang7@haverford.edu"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-700 text-white font-medium rounded-lg border-2 border-white hover:bg-primary-800 transition-colors"
            >
              Email Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
