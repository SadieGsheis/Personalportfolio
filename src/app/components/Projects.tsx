import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';
import harmonyMusicImg from 'figma:asset/2980e010098dd1e811bb8923800d6e3a333a7458.png';
import connectMobileImg from 'figma:asset/2980e010098dd1e811bb8923800d6e3a333a7458.png';
import healthTrackImg from 'figma:asset/47175686548ac9956caf80665376e4a4d48dd540.png';
import shopHubImg from 'figma:asset/47175686548ac9956caf80665376e4a4d48dd540.png';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  useUnsplash?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'BBVA Payments',
    description: 'A next-generation music streaming platform with AI-powered playlists, social features, and immersive listening experiences.',
    tags: ['STREAMING', 'AUDIO', 'SOCIAL'],
    image: 'https://images.unsplash.com/photo-1762222687051-4c9926eba36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0cmVhbWluZyUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzQ0NjE2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    useUnsplash: true,
  },
  {
    id: 2,
    title: "Telefonica's Cybersecurity Portal",
    description: 'A unified communication platform for teams, combining messaging, video calls, and project collaboration in one elegant interface.',
    tags: ['COLLABORATION', 'MOBILE', 'ENTERPRISE'],
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc0NTE4NDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    useUnsplash: true,
  },
  {
    id: 3,
    title: "Telefonica's Icon Library",
    description: 'A comprehensive fitness tracking app that helps users monitor their workouts, nutrition, and wellness goals with personalized insights.',
    tags: ['UI/UX', 'MOBILE', 'HEALTH'],
    image: 'https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaGVhbHRoJTIwdHJhY2tpbmd8ZW58MXx8fHwxNzc0NTQyNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    useUnsplash: true,
  },
  {
    id: 4,
    title: 'LUCA COMMS',
    description: 'An intuitive e-commerce analytics platform that empowers merchants to track sales, inventory, and customer behavior in real-time.',
    tags: ['DASHBOARD', 'ANALYTICS', 'E-COMMERCE'],
    image: 'https://images.unsplash.com/photo-1629963918958-1b62cfe3fe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc0NDQ3ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    useUnsplash: true,
  },
  {
    id: 5,
    title: 'Valora Futbol',
    description: 'A seamless travel booking experience that helps users discover, plan, and book their dream destinations with curated recommendations.',
    tags: ['BOOKING', 'MOBILE', 'TRAVEL'],
    image: 'https://images.unsplash.com/photo-1701686794404-3670ea43687e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDU0MjU4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    useUnsplash: true,
  },
  {
    id: 6,
    title: 'Santander Justicia',
    description: 'A modern banking app that simplifies personal finance management with smart budgeting tools, investment tracking, and secure transactions.',
    tags: ['FINTECH', 'MOBILE', 'BANKING'],
    image: 'https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBiYW5raW5nJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc3NDU0MjU4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    useUnsplash: true,
  },
];

export function Projects() {
  return (
    <section id="work" className="py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">
            PORTFOLIO
          </p>
          <h2 className="text-5xl md:text-6xl text-white mb-4" style={{ fontFamily: "'Young Serif', serif" }}>
            Selected Work
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)' }}></div>
          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Exploring the intersection of design, technology, and human experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 block"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.4))'
                  }}
                ></div>
                {project.useUnsplash ? (
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-8">
                <h3 
                  className="text-3xl mb-3 text-white transition-all duration-300 hover:bg-clip-text hover:text-transparent cursor-default"
                  style={{ fontFamily: "'Young Serif', serif" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundImage = 'none';
                  }}
                >
                  {project.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}