import Footer from "@/components/global/footer";
import BlogPreview from "@/components/pages/home/blog-preview";
import FeaturedProjects from "@/components/pages/home/featured-projects";
import Newsletter from "@/components/pages/home/newsletter";
import ProfileCard from "@/components/pages/home/profile-card";
import QuickStats from "@/components/pages/home/quick-stats";
import SocialsGrid from "@/components/pages/home/socials-grid";
import TechStack from "@/components/pages/home/tech-stack";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-200 selection:bg-yellow-500/30">
      {/* Content wrapper with sidebar offset */}
      <div className="pl-0 md:pl-[180px] lg:pl-[200px] transition-all duration-300">
        {/* Mobile header spacer */}
        <div className="h-14 md:hidden" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10 space-y-6">
          {/* Hero Section - Profile */}
          <section>
            <ProfileCard />
          </section>

          {/* Bento Grid Layout */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Tech Stack - 2 cols */}
            <div className="md:col-span-2 lg:col-span-2">
              <TechStack />
            </div>

            {/* Quick Stats - 1 col */}
            <QuickStats />

            {/* Featured Projects - Full width */}
            <div className="md:col-span-2 lg:col-span-3">
              <FeaturedProjects />
            </div>

            {/* Blog Preview - Full width */}
            <div className="md:col-span-2 lg:col-span-3">
              <BlogPreview />
            </div>

            {/* Connect Section - 2 cols */}
            <div className="md:col-span-2">
              <SocialsGrid />
            </div>

            {/* Newsletter - 1 col */}
            <Newsletter />
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
}
