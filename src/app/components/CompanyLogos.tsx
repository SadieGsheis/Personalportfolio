import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const companies = [
  { name: "Volvo", logo: "https://logo.clearbit.com/volvo.com" },
  { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
  { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
  { name: "Nike", logo: "https://logo.clearbit.com/nike.com" },
  { name: "Uber", logo: "https://logo.clearbit.com/uber.com" },
  { name: "Figma", logo: "https://logo.clearbit.com/figma.com" },
  { name: "Adidas", logo: "https://logo.clearbit.com/adidas.com" },
];

export function CompanyLogos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-8">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-8 text-center">
          TRUSTED BY
        </p>
        
        <Slider {...settings} className="company-logos-slider">
          {companies.map((company, index) => (
            <div key={index} className="px-6">
              <div className="group relative flex items-center justify-center h-16 overflow-visible">
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: 'linear-gradient(135deg, #ec4899, #a855f7, #3b82f6, #06b6d4)',
                    transform: 'scale(1.2)',
                  }}
                />
                
                {/* Logo */}
                <img
                  src={company.logo}
                  alt={company.name}
                  className="relative z-10 w-auto h-12 object-contain filter brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    mixBlendMode: 'normal',
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <style>{`
        .company-logos-slider .slick-track {
          display: flex;
          align-items: center;
        }
        
        .company-logos-slider .slick-slide {
          height: auto;
        }
        
        .company-logos-slider .slick-slide > div {
          height: 100%;
        }
        
        .company-logos-slider .slick-arrow {
          display: none !important;
        }
      `}</style>
    </section>
  );
}