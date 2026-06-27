import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import RecipeCard from '@/components/home/RecipeCard';
import { recipes, categories } from '@/data/recipes';
import { ArrowLeft, Cake, Croissant, Cookie, Candy, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const iconMap: Record<string, React.ElementType> = {
  cake: Cake,
  bread: Croissant,
  cookie: Cookie,
  dessert: Candy,
  drink: Coffee,
};

export default function CategoryPage() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');

  const category = categories.find((c) => c.id === type);
  const filteredRecipes = recipes
    .filter((r) => r.category === type)
    .filter((r) => filter === 'all' || r.difficulty === filter);

  const Icon = category ? iconMap[category.icon] || Cake : Cake;

  const filters = [
    { id: 'all', label: '全部' },
    { id: 'easy', label: '简单' },
    { id: 'medium', label: '中等' },
    { id: 'hard', label: '困难' },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 animate-fade-in">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-warm-600 hover:text-primary transition-colors mb-4 sm:mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">返回</span>
        </button>

        <div
          className="rounded-lg sm:rounded-container p-5 sm:p-8 mb-6 sm:mb-8 text-white relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${category?.color || '#D4956A'}, #C45D3E)` }}
        >
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
              <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-1">{category?.name || '分类'}</h1>
              <p className="text-white/80 text-sm">{filteredRecipes.length} 个精选食谱</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4 sm:mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as typeof filter)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-btn text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                filter === f.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-warm-600 hover:bg-warm-100 border border-warm-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard key={recipe.id} recipe={recipe} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-warm-400" />
            </div>
            <h3 className="text-base sm:text-lg font-medium text-warm-900 mb-2">暂无相关食谱</h3>
            <p className="text-xs sm:text-sm text-warm-500 mb-3 sm:mb-4">换个筛选条件试试？</p>
            <button
              onClick={() => navigate('/ai-chat')}
              className="btn-primary !py-2 !px-4 sm:!py-3 sm:!px-6 text-sm"
            >
              让 AI 帮我定制
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
