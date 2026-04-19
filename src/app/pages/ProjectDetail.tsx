import { useParams, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import healthTrackImg1 from 'figma:asset/a0715a55bafaf0e1ccaf645956cbea63e4c926a4.png';
import healthTrackImg2 from 'figma:asset/d05f5a94be9e74e8bc4848a9beb5287fb7dff66b.png';
import { useState, useEffect } from 'react';

const projectsData: Record<string, any> = {
  '1': {
    id: 1,
    title: 'Harmony Music',
    subtitle: 'Redefining Music Streaming',
    description: 'A next-generation music streaming platform with AI-powered playlists, social features, and immersive listening experiences.',
    tags: ['STREAMING', 'AUDIO', 'SOCIAL'],
    year: '2025',
    client: 'Harmony Labs',
    role: 'Product Designer',
    duration: '8 months',
    fullDescription: `Harmony Music reimagines the music streaming experience by blending AI-powered personalization with social discovery. The platform learns user preferences to create dynamic playlists while enabling friends to share and collaborate on music collections.

The design prioritizes an immersive, distraction-free listening experience with intuitive navigation and beautiful album artwork presentation. Every interaction was crafted to feel fluid and delightful.`,
    challenge: 'Music streaming apps often feel sterile and disconnected. Users wanted a platform that felt personal and social without compromising the listening experience or overwhelming them with features.',
    solution: 'We created a dual-mode interface: an immersive "Now Playing" experience for focused listening and a vibrant social feed for discovery. AI recommendations appear contextually, learning from both individual taste and friend activity.',
    impact: [
      '1M+ downloads in first 3 months',
      '92% user satisfaction rating',
      '40% higher engagement than competitors',
      'Featured in App Store and Google Play',
    ],
    images: [
      healthTrackImg1,
      healthTrackImg2,
    ],
  },
  '2': {
    id: 2,
    title: 'Connect Mobile',
    subtitle: 'Enterprise Communication Reimagined',
    description: 'A unified communication platform for teams, combining messaging, video calls, and project collaboration in one elegant interface.',
    tags: ['COLLABORATION', 'MOBILE', 'ENTERPRISE'],
    year: '2025',
    client: 'ConnectCorp',
    role: 'Lead UX Designer',
    duration: '10 months',
    fullDescription: `Connect Mobile unifies team communication by bringing together messaging, video conferencing, and project management tools. The platform was designed to reduce context-switching and improve team productivity.

Through extensive enterprise user research, we identified key friction points in existing tools and created a streamlined experience that works seamlessly across devices.`,
    challenge: 'Enterprise teams juggle multiple communication tools, leading to fragmented conversations and lost information. The challenge was to create a unified platform that feels lightweight while handling complex workflows.',
    solution: 'We developed a context-aware interface that surfaces relevant conversations and files based on current projects. Smart notifications reduce noise, and integrated video calls launch instantly without separate apps.',
    impact: [
      '500+ enterprise clients in year one',
      '65% reduction in tool-switching',
      '4.7/5 rating from IT administrators',
      'Winner of Enterprise App Award 2025',
    ],
    images: [
      healthTrackImg1,
      healthTrackImg2,
    ],
  },
  '3': {
    id: 3,
    title: 'HealthTrack Pro',
    subtitle: 'Transforming Fitness & Wellness',
    description: 'A comprehensive fitness tracking app that helps users monitor their workouts, nutrition, and wellness goals with personalized insights.',
    tags: ['UI/UX', 'MOBILE', 'HEALTH'],
    year: '2024',
    client: 'FitnessTech Inc.',
    role: 'Lead Product Designer',
    duration: '6 months',
    fullDescription: `HealthTrack Pro was designed to address the growing need for a holistic fitness and wellness solution. The app combines workout tracking, nutrition monitoring, and personalized health insights into a single, intuitive platform.

The design process focused on creating an experience that motivates users while providing actionable insights. Through extensive user research and iterative testing, we developed a system that adapts to individual fitness levels and goals.`,
    challenge: 'Users often abandon fitness apps due to overwhelming interfaces and lack of personalization. The challenge was to create an experience that feels approachable yet comprehensive, catering to both fitness beginners and advanced athletes.',
    solution: 'We implemented an adaptive UI that progressively reveals features based on user engagement. The onboarding flow identifies user goals and fitness levels, customizing the experience from day one. Visual data representations make progress tracking intuitive and motivating.',
    impact: [
      '85% increase in user retention after 30 days',
      '4.8 star rating on app stores',
      '250,000+ active users within first year',
      'Featured by Apple as "App of the Day"',
    ],
    images: [
      healthTrackImg1,
      healthTrackImg2,
    ],
  },
  '4': {
    id: 4,
    title: 'ShopHub Dashboard',
    subtitle: 'E-Commerce Intelligence Platform',
    description: 'An intuitive e-commerce analytics platform that empowers merchants to track sales, inventory, and customer behavior in real-time.',
    tags: ['DASHBOARD', 'ANALYTICS', 'E-COMMERCE'],
    year: '2024',
    client: 'ShopHub Inc.',
    role: 'Senior Product Designer',
    duration: '7 months',
    fullDescription: `ShopHub Dashboard transforms complex e-commerce data into actionable insights. The platform helps merchants understand their business performance through intuitive visualizations and predictive analytics.

We focused on creating a dashboard that serves both daily operations and strategic planning, with customizable views for different merchant needs.`,
    challenge: 'E-commerce merchants drown in data from multiple sources. They needed a unified dashboard that provides immediate insights without requiring data analysis expertise.',
    solution: 'We designed an intelligent dashboard that automatically highlights anomalies and opportunities. Customizable widgets let merchants focus on metrics that matter to their business, with drill-down capabilities for deeper analysis.',
    impact: [
      '10,000+ merchants using platform',
      '45% faster decision-making reported',
      '4.9/5 merchant satisfaction score',
      'Reduced support tickets by 60%',
    ],
    images: [
      healthTrackImg1,
      healthTrackImg2,
    ],
  },
  '5': {
    id: 5,
    title: 'Wanderlust Travel',
    subtitle: 'Discover Your Next Adventure',
    description: 'A seamless travel booking experience that helps users discover, plan, and book their dream destinations with curated recommendations.',
    tags: ['BOOKING', 'MOBILE', 'TRAVEL'],
    year: '2025',
    client: 'Wanderlust Co.',
    role: 'Product Designer',
    duration: '9 months',
    fullDescription: `Wanderlust Travel combines inspirational discovery with practical booking tools. The app helps travelers find authentic experiences while handling all logistics in one place.

Our research showed that travelers wanted both inspiration and efficiency. The design balances beautiful destination imagery with streamlined booking flows.`,
    challenge: 'Travel planning involves juggling multiple apps and websites. Users needed a single platform that inspires travel ideas while simplifying the booking process across flights, hotels, and activities.',
    solution: 'We created a story-driven discovery interface that transitions seamlessly into booking. AI-powered recommendations consider budget, travel style, and timing, while integrated booking ensures users never leave the app.',
    impact: [
      '2M+ app downloads',
      '78% booking completion rate',
      '$50M in bookings first year',
      'Editor\'s Choice Award 2025',
    ],
    images: [
      healthTrackImg1,
      healthTrackImg2,
    ],
  },
  '6': {
    id: 6,
    title: 'FinanceFlow',
    subtitle: 'Personal Banking Simplified',
    description: 'A modern banking app that simplifies personal finance management with smart budgeting tools, investment tracking, and secure transactions.',
    tags: ['FINTECH', 'MOBILE', 'BANKING'],
    year: '2024',
    client: 'FinanceFlow Bank',
    role: 'Lead Product Designer',
    duration: '12 months',
    fullDescription: `FinanceFlow reimagines digital banking with a focus on financial wellness. The app makes complex financial concepts accessible while providing powerful tools for budgeting, saving, and investing.

Security and trust were paramount throughout the design process. We created an interface that feels modern and approachable while maintaining the gravitas expected from financial services.`,
    challenge: 'Traditional banking apps are difficult to navigate and lack proactive financial guidance. Users needed a platform that helps them understand and improve their financial health.',
    solution: 'We designed an intelligent home screen that surfaces personalized insights and recommendations. Automated budgeting tracks spending patterns, while investment tools make portfolio management accessible to beginners.',
    impact: [
      '750,000 active users',
      '40% increase in savings rates',
      'Best Mobile Banking App 2024',
      '4.8/5 security trust rating',
    ],
    images: [
      healthTrackImg1,
      healthTrackImg2,
    ],
  },
};

function ProjectNavigation({ currentId, projectsData }: { currentId: number; projectsData: Record<string, any> }) {
  const [prevHovered, setPrevHovered] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);

  const prevId = currentId > 1 ? currentId - 1 : 6;
  const nextId = currentId < 6 ? currentId + 1 : 1;
  const prevProject = projectsData[prevId.toString()];
  const nextProject = projectsData[nextId.toString()];

  return (
    <section className="py-12 px-8 border-t border-white/10">
      <div className="max-w-[900px] mx-auto">
        <div className="flex justify-between items-center">
          {/* Previous Project */}
          <div className="flex-1">
            {prevProject && (
              <Link
                to={`/projects/${prevId}`}
                className="inline-flex items-start gap-4 cursor-pointer"
                onMouseEnter={() => setPrevHovered(true)}
                onMouseLeave={() => setPrevHovered(false)}
              >
                <span className="inline-block mt-1">
                  <ArrowLeft
                    size={20}
                    className="transition-colors duration-300"
                    style={{ color: prevHovered ? '#a855f7' : 'rgba(255, 255, 255, 0.6)' }}
                  />
                </span>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-1">
                    Previous
                  </p>
                  <p
                    className="text-lg transition-all duration-300"
                    style={{
                      fontFamily: "'Young Serif', serif",
                      ...(prevHovered
                        ? {
                            backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                          }
                        : { color: 'white' })
                    }}
                  >
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            )}
          </div>

          {/* Next Project */}
          <div className="flex-1 flex justify-end">
            {nextProject && (
              <Link
                to={`/projects/${nextId}`}
                className="inline-flex items-start gap-4 cursor-pointer"
                onMouseEnter={() => setNextHovered(true)}
                onMouseLeave={() => setNextHovered(false)}
              >
                <div className="text-right">
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-1">
                    Next
                  </p>
                  <p
                    className="text-lg transition-all duration-300"
                    style={{
                      fontFamily: "'Young Serif', serif",
                      ...(nextHovered
                        ? {
                            backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                          }
                        : { color: 'white' })
                    }}
                  >
                    {nextProject.title}
                  </p>
                </div>
                <span className="inline-block mt-1">
                  <ArrowLeft
                    size={20}
                    className="rotate-180 transition-colors duration-300"
                    style={{ color: nextHovered ? '#06b6d4' : 'rgba(255, 255, 255, 0.6)' }}
                  />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id || ''];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4" style={{ fontFamily: "'Young Serif', serif" }}>
            Project Not Found
          </h1>
          <Link to="/" className="text-white/60 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-[900px] mx-auto">
          {/* Back Button */}
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </Link>

          {/* Project Title */}
          <div className="mb-16">
            <h1 
              className="text-5xl md:text-7xl text-white mb-6 transition-all duration-300 hover:bg-clip-text hover:text-transparent cursor-default"
              style={{ fontFamily: "'Young Serif', serif" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = 'none';
              }}
            >
              {project.title}
            </h1>
            <p className="text-2xl text-white/70 mb-8">{project.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs tracking-wider bg-white/5 border border-transparent text-white/80 transition-all duration-300 cursor-default"
                  style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgba(255, 255, 255, 0.1)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundImage = 'linear-gradient(to right, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundImage = 'none';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div>
              <p className="text-white/60 text-sm mb-2 uppercase tracking-wider">Year</p>
              <p className="text-white text-lg">{project.year}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm mb-2 uppercase tracking-wider">Client</p>
              <p className="text-white text-lg">{project.client}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm mb-2 uppercase tracking-wider">Role</p>
              <p className="text-white text-lg">{project.role}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm mb-2 uppercase tracking-wider">Duration</p>
              <p className="text-white text-lg">{project.duration}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20 px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl text-white mb-6" style={{ fontFamily: "'Young Serif', serif" }}>
              Overview
            </h2>
            <p className="text-white/70 text-lg leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Young Serif', serif" }}>
                Challenge
              </h3>
              <p className="text-white/70 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Young Serif', serif" }}>
                Solution
              </h3>
              <p className="text-white/70 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-white mb-6" style={{ fontFamily: "'Young Serif', serif" }}>
              Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.impact.map((item: string, index: number) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Images */}
      <section className="pb-20 px-8">
        <div className="max-w-[900px] mx-auto space-y-8">
          {project.images.map((img: string, index: number) => (
            <div key={index} className="rounded-2xl overflow-hidden">
              <img
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Text + Image Block 1 (Image Right) */}
      <section className="py-20 px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-4xl text-white mb-6" style={{ fontFamily: "'Young Serif', serif" }}>
                Design Process
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                The design process began with extensive user research, including interviews with potential users and competitive analysis. We identified key pain points and opportunities for innovation in the market.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Through iterative prototyping and user testing sessions, we refined the interface to ensure every interaction felt natural and intuitive. The feedback loops with stakeholders helped us balance business goals with user needs.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Our design system was built from the ground up to ensure consistency across all touchpoints while maintaining flexibility for future growth. Every component was crafted with accessibility and performance in mind.
              </p>
            </div>
            <div className="col-span-12 md:col-span-1"></div>
            <div className="col-span-12 md:col-span-6">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={healthTrackImg1}
                  alt="Design Process"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text + Image Block 2 (Image Left) */}
      <section className="py-20 px-8 bg-white/[0.02]">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={healthTrackImg2}
                  alt="User Experience"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-1 order-3 md:order-2"></div>
            <div className="col-span-12 md:col-span-5 order-1 md:order-3">
              <h2 className="text-4xl text-white mb-6" style={{ fontFamily: "'Young Serif', serif" }}>
                User Experience
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Creating an exceptional user experience meant understanding the context in which people would use the product. We mapped user journeys to identify critical moments and designed micro-interactions that delight.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                The interface adapts to user behavior, progressively revealing advanced features as users become more comfortable with the platform. This approach reduces cognitive load for new users while empowering power users.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Performance was a key consideration throughout development. We optimized every animation and transition to ensure the experience feels smooth and responsive, even on lower-end devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Text + Image Block 3 (Image Right) */}
      <section className="py-20 px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-4xl text-white mb-6" style={{ fontFamily: "'Young Serif', serif" }}>
                Visual Design
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                The visual language was carefully crafted to evoke emotion while maintaining clarity and usability. Color choices reflect the brand identity while ensuring accessibility standards are met across all interactions.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Typography plays a crucial role in establishing hierarchy and guiding users through content. We selected typefaces that are both beautiful and highly legible across different screen sizes and contexts.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Motion design brings the interface to life, creating a sense of continuity and spatial awareness. Every animation serves a purpose, whether it's providing feedback, guiding attention, or simply adding delight to the experience.
              </p>
            </div>
            <div className="col-span-12 md:col-span-1"></div>
            <div className="col-span-12 md:col-span-6">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={healthTrackImg1}
                  alt="Visual Design"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl text-white mb-6" style={{ fontFamily: "'Young Serif', serif" }}>
              Conclusion
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              This project stands as a testament to the power of user-centered design and collaborative innovation. By deeply understanding user needs and iterating based on real feedback, we created a solution that not only meets but exceeds expectations. The success metrics speak for themselves, but more importantly, the positive impact on users' daily lives validates our approach and inspires us to continue pushing boundaries in design excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation currentId={Number(id)} projectsData={projectsData} />


      {/* Next Project CTA */}
      <section className="py-32 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-8" style={{ fontFamily: "'Young Serif', serif" }}>
            Want to see more?
          </h2>
          <Link
            to="/"
            className="inline-block px-8 py-4 rounded-full text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300"
            style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)' }}
          >
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
