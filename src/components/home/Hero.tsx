import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { heroSlides } from '@/data/recipes';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrent((index + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-[500px] overflow-hidden rounded-container mx-6 mt-6 lg:mx-auto lg:max-w-6xl">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/80 via-warm-900/50 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-12 text-white animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary-light" />
                <span className="text-sm font-medium">AI 智能烘焙</span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-warm-200 text-lg mb-8 leading-relaxed">
                {slide.subtitle}
              </p>
              <button
                onClick={() => navigate('/ai-chat')}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-btn font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                {slide.cta}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="上一张"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="下一张"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current ? 'w-8 bg-white' : 'w-1.5 bg-white/50'
            }`}
            aria-label={`第${index + 1}张`}
          />
        ))}
      </div>
    </section>
  );
}
