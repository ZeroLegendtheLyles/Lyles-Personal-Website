import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/LylesZhang',
      icon: Github,
      ariaLabel: 'Visit GitHub profile'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/lyle-zhang',
      icon: Linkedin,
      ariaLabel: 'Visit LinkedIn profile'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/lylezhang',
      icon: Twitter,
      ariaLabel: 'Visit Twitter profile'
    },
    {
      name: 'Email',
      href: 'mailto:zzhang7@haverford.edu',
      icon: Mail,
      ariaLabel: 'Send email'
    },
  ];

  const footerLinks = [
    { name: 'About', href: '/about' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Lyle Zhang</h3>
            <p className="text-gray-600 text-sm">
              Computer Science student and researcher passionate about technology and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            &copy; {currentYear} Lyle Zhang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
