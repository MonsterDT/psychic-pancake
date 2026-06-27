import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import CategoryNav from '@/components/home/CategoryNav';
import RecipeCard from '@/components/home/RecipeCard';
import { recipes } from '@/data/recipes';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const topRecipes = recipes.slice(0, 6);

  return (
    <Layout>
      <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Hero />
      <CategoryNav />

      <section className="py-16 bg-warm-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl font-bold text-warm-900 mb-2">
                热门食谱
              </h2>
              <p className="text-warm-500">大家都在做的人气配方</p>
            </div>
            <button
              onClick={() => navigate('/category/cake')}
              className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              查看更多 <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRecipes.map((recipe, index) => (
              <RecipeCard key={recipe.id} recipe={recipe} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-container p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">AI 智能定制</span>
            </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                不知道做什么？
                <br />
                让 AI 帮你定制配方
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                告诉AI你的口味偏好、食材限制、甚至设备情况，
                智能为你匹配最适合的烘焙方案。
              </p>
              <button
                onClick={() => navigate('/ai-chat')}
                className="bg-white text-primary px-8 py-3.5 rounded-btn font-medium transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                开始体验
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-warm-900 mb-3">
              为什么选择我们
            </h2>
            <p className="text-warm-500">三大优势，让烘焙变得简单有趣</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-card p-8 shadow-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-warm-900 text-lg mb-2">AI 智能定制</h3>
              <p className="text-sm text-warm-500 leading-relaxed">
                基于专业配方知识库，结合你的个性化需求，生成专属配方方案
              </p>
            </div>

            <div className="bg-white rounded-card p-8 shadow-card text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-warm-900 text-lg mb-2">分步跟做</h3>
              <p className="text-sm text-warm-500 leading-relaxed">
                图文并茂的分步教程，智能计时器，让你跟着做零失败
              </p>
            </div>

            <div className="bg-white rounded-card p-8 shadow-card text-center">
              <div className="w-16 h-16 bg-warm-400/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-warm-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-semibold text-warm-900 text-lg mb-2">质量保障</h3>
              <p className="text-sm text-warm-500 leading-relaxed">
                精选专业配方，AI生成内容经过严格审核，成功率有保障
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
