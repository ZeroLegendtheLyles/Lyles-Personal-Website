'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m <span className="text-primary-600">Lyle Zhang</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Computer Science Student & Researcher
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Passionate about leveraging technology to solve real-world problems.
              Exploring the intersections of software development, research, and innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/achievements"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/LylesZhang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/lyle-zhang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:zzhang7@haverford.edu"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
