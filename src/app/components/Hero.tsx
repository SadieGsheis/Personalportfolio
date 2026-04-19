export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden">
      {/* Animated Blur Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blur Element 1 - Pink/Purple - Lower Left */}
        <div 
          className="absolute bottom-[15%] left-[10%] w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #ec4899 0%, #a855f7 50%, transparent 70%)',
            animation: 'pulse-slow 8s ease-in-out infinite',
          }}
        />
        
        {/* Blur Element 2 - Purple/Blue - Upper Right */}
        <div 
          className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #a855f7 0%, #3b82f6 50%, transparent 70%)',
            animation: 'pulse-medium 6s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        
        {/* Blur Element 3 - Blue/Cyan */}
        <div 
          className="absolute bottom-[25%] left-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, #06b6d4 50%, transparent 70%)',
            animation: 'pulse-fast 10s ease-in-out infinite',
            animationDelay: '4s',
          }}
        />
      </div>

      <div className="max-w-[1400px] w-full mx-auto text-center relative z-10">
        <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-6">
          HELLO
        </p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 leading-tight" style={{ fontFamily: "'Young Serif', serif" }}>
          <span className="text-white">I'm </span>
          <span 
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)' }}
          >
            Lara
          </span>
          <br />
          <span className="text-white">Digital Product</span>
          <br />
          <span className="text-white">Designer</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-4 text-white/70 text-lg" style={{ fontFamily: "'Proxima Nova', sans-serif" }}>
          <p>
            with 12+ years of experience shaping intuitive digital products for startups
            and global organizations.
          </p>
          <p>
            My work combines design expertise with strategy, collaboration, and growing
            leadership in product and team alignment.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1) translate(0, 0);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.2) translate(20px, 20px);
            opacity: 0.25;
          }
        }
        
        @keyframes pulse-medium {
          0%, 100% {
            transform: scale(1) translate(0, 0);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.3) translate(-30px, 30px);
            opacity: 0.3;
          }
        }
        
        @keyframes pulse-fast {
          0%, 100% {
            transform: scale(1) translate(0, 0);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.15) translate(40px, -20px);
            opacity: 0.25;
          }
        }
      `}</style>
    </section>
  );
}