import GitHubActivity from '@/components/social/GitHubActivity';

export default function SocialFeed() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Activity
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with my latest projects and contributions
            </p>
          </div>

          <GitHubActivity />
        </div>
      </div>
    </section>
  );
}
