import aboutImage from 'figma:asset/247da3412739f1f48c72d0231a5fb9eb605e5bb1.png';
import { Contact } from './Contact';

export function About() {
  const skills = [
    'User Research',
    'Wireframing',
    'Prototyping',
    'Visual Design',
    'Design Systems',
    'Interaction Design',
    'Usability Testing',
    'Information Architecture',
  ];

  const tools = [
    'Figma',
    'Adobe Creative Suite',
    'Sketch',
    'Principle',
    'InVision',
    'Miro',
  ];

  return (
    <>
      <section id="about" className="py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* About Me Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-5xl md:text-6xl text-white mb-8" style={{ fontFamily: "'Young Serif', serif" }}>
                Hi, I'm Lara
              </h2>
              <div className="w-24 h-1 mb-8" style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)' }}></div>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  A passionate Product Designer with over 6 years of experience crafting digital 
                  experiences that users love. I believe great design is where aesthetics meet 
                  functionality, and I'm obsessed with creating interfaces that are not only 
                  beautiful but intuitive and accessible.
                </p>
                <p>
                  My journey in design began with a curiosity about how things work and a love 
                  for visual storytelling. Today, I combine data-driven insights with creative 
                  vision to solve complex problems and deliver exceptional user experiences.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Lara at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="mb-20">
            <h3 className="text-4xl md:text-5xl text-white mb-12">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-6 py-4 rounded-full bg-white/5 border border-white/10 text-center text-white/80 transition-all duration-300 cursor-default"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundImage = 'linear-gradient(to right, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))';
                    e.currentTarget.style.border = 'none';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundImage = 'none';
                    e.currentTarget.style.border = '';
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Tools I Use */}
          <div className="mb-20">
            <h3 className="text-4xl md:text-5xl text-white mb-12">
              Tools I Use
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="px-6 py-4 rounded-full bg-white/5 border border-white/10 text-center text-white/80 transition-all duration-300 cursor-default flex items-center justify-center min-h-[56px]"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundImage = 'linear-gradient(to right, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))';
                    e.currentTarget.style.border = 'none';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundImage = 'none';
                    e.currentTarget.style.border = '';
                  }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-4xl md:text-5xl text-white mb-12">
              Experience
            </h3>
            <div className="space-y-6">
              {/* Experience Item 1 */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                  <div>
                    <h4 className="text-2xl mb-2">
                      <span 
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)' }}
                      >
                        Senior Product Designer
                      </span>
                    </h4>
                    <p className="text-white/80">Tech Innovations Inc.</p>
                  </div>
                  <span className="text-white/60">2021 - Present</span>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Leading design initiatives for enterprise SaaS products serving 10,000+ users</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Managing and mentoring a team of 3 designers, fostering collaboration and growth</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Established comprehensive design system that reduced design-to-development time by 40%</span>
                  </li>
                </ul>
              </div>

              {/* Experience Item 2 */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                  <div>
                    <h4 className="text-2xl mb-2">
                      <span 
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)' }}
                      >
                        Product Designer
                      </span>
                    </h4>
                    <p className="text-white/80">Digital Creative Agency</p>
                  </div>
                  <span className="text-white/60">2019 - 2021</span>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Designed end-to-end digital experiences for Fortune 500 clients across multiple industries</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Conducted user research and usability testing with 200+ participants to inform design decisions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Collaborated with cross-functional teams to deliver 15+ successful product launches</span>
                  </li>
                </ul>
              </div>

              {/* Experience Item 3 */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                  <div>
                    <h4 className="text-2xl mb-2">
                      <span 
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)' }}
                      >
                        Junior Designer
                      </span>
                    </h4>
                    <p className="text-white/80">Startup Studio</p>
                  </div>
                  <span className="text-white/60">2017 - 2019</span>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Contributed to early-stage product design from concept validation to MVP launches</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Created wireframes, prototypes, and high-fidelity designs for mobile and web applications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Participated in design sprints and agile development processes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
    </>
  );
}