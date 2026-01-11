import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Lyle Zhang - send a message or connect on social media.',
};

export default function ContactPage() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/LylesZhang',
      username: '@LylesZhang',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/lyle-zhang',
      username: '/in/lyle-zhang',
    },
  ];

  return (
    <main className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              I&apos;d love to hear from you! Whether you have a question, want to discuss a project, or just want to connect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:zzhang7@haverford.edu"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      zzhang7@haverford.edu
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      I typically respond within 24-48 hours
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">Haverford, PA</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Currently studying at Haverford College
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Connect on Social Media</h3>
                  <div className="space-y-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                      >
                        <social.icon className="h-5 w-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
                        <div className="ml-3">
                          <p className="font-medium text-gray-900">{social.name}</p>
                          <p className="text-sm text-gray-600">{social.username}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Response Time:</strong> I aim to respond to all inquiries within 24-48 hours.
                    For urgent matters, please mention it in your message subject.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
