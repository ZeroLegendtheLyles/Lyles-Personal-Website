import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import AchievementsPreview from '@/components/sections/AchievementsPreview';
import SocialFeed from '@/components/sections/SocialFeed';
import ContactCTA from '@/components/sections/ContactCTA';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lyle Zhang',
    url: 'https://lyle-zhang.vercel.app',
    jobTitle: 'Computer Science Student',
    alumniOf: 'Haverford College',
    email: 'zzhang7@haverford.edu',
    sameAs: [
      'https://github.com/LylesZhang',
      'https://linkedin.com/in/lyle-zhang',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <AboutSection />
        <AchievementsPreview />
        <SocialFeed />
        <ContactCTA />
      </main>
    </>
  );
}
