export function Contact() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-6">
          GET IN TOUCH
        </p>
        <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "'Young Serif', serif" }}>
          <span className="text-white">Let's Create</span>
          <br />
          <span 
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)' }}
          >
            Together
          </span>
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
          Always open to discussing new projects, creative ideas, and opportunities.
        </p>
        <a
          href="#" // TODO: Replace with LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block text-white/80 text-lg transition-colors duration-300 group"
        >
          Let's Talk
          <span 
            className="absolute left-0 right-0 bottom-[-4px] h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)' }}
          ></span>
        </a>
      </div>
    </section>
  );
}