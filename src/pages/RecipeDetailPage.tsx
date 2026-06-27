import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Star, Heart, Share2, PlayCircle, Lightbulb, ChefHat } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ServingScaler from '@/components/recipe/ServingScaler';
import IngredientList from '@/components/recipe/IngredientList';
import StepList from '@/components/recipe/StepList';
import { recipes, categories } from '@/data/recipes';
import { useFavoritesStore } from '@/store/favorites';

const difficultyMap = {
  easy: { label: '简单', color: 'bg-green-100 text-green-700' },
  medium: { label: '中等', color: 'bg-yellow-100 text-yellow-700' },
  hard: { label: '困难', color: 'bg-red-100 text-red-700' },
};

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  const recipe = recipes.find((r) => r.id === id);
  const [servings, setServings] = useState(2);
  const [bakeMode, setBakeMode] = useState(false);

  if (!recipe) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="text-2xl font-bold text-warm-900 mb-4">食谱未找到</h2>
          <button onClick={() => navigate(-1)} className="btn-primary">
            返回
          </button>
        </div>
      </Layout>
    );
  }

  const favorited = isFavorite(recipe.id);
  const diff = difficultyMap[recipe.difficulty];
  const category = categories.find((c) => c.id === recipe.category);
  const ratio = servings / 2;

  const toggleFavorite = () => {
    if (favorited) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 animate-fade-in">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-warm-600 hover:text-primary transition-colors mb-4 sm:mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">返回</span>
        </button>

        <div className="relative h-[240px] sm:h-[300px] md:h-[350px] rounded-lg sm:rounded-container overflow-hidden mb-6 sm:mb-8">
          <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <span className={`badge text-xs sm:text-sm ${diff.color}`}>{diff.label}</span>
              {category && <span className="badge bg-white/20 text-white backdrop-blur-sm text-xs sm:text-sm">{category.name}</span>}
            </div>
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-3">{recipe.name}</h1>
            <p className="text-white/80 text-sm hidden sm:block">{recipe.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 p-4 sm:p-6 bg-white rounded-lg sm:rounded-card shadow-sm border border-warm-100">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-[10px] sm:text-xs text-warm-500">总时长</p>
              <p className="font-semibold text-warm-900 text-sm sm:text-base">{recipe.time}分钟</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current flex-shrink-0" />
            <div>
              <p className="text-[10px] sm:text-xs text-warm-500">评分</p>
              <p className="font-semibold text-warm-900 text-sm sm:text-base">{recipe.rating}分</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-[10px] sm:text-xs text-warm-500">份量</p>
              <p className="font-semibold text-warm-900 text-sm sm:text-base">{servings}人份</p>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-1 space-y-4 sm:space-y-6 mb-8 lg:mb-0">
            <div className="bg-white rounded-lg sm:rounded-card p-4 sm:p-6 shadow-sm border border-warm-100">
              <h3 className="font-semibold text-warm-900 mb-3 sm:mb-4 text-sm sm:text-base">调整份量</h3>
              <ServingScaler baseServings={2} ingredients={recipe.ingredients} onServingsChange={setServings} />
            </div>
            <div className="bg-white rounded-lg sm:rounded-card p-4 sm:p-6 shadow-sm border border-warm-100">
              <h3 className="font-semibold text-warm-900 mb-3 sm:mb-4 text-sm sm:text-base">食材清单</h3>
              <IngredientList ingredients={recipe.ingredients} ratio={ratio} />
            </div>

            <div className="bg-amber-50 rounded-lg sm:rounded-card p-4 sm:p-6 border border-amber-100">
              <h4 className="font-semibold text-warm-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                小贴士
              </h4>
              <ul className="space-y-2">
                {recipe.tips.map((tip, i) => (
                  <li key={i} className="text-xs sm:text-sm text-warm-700 flex gap-2">
                    <span className="text-amber-600 mt-0.5 flex-shrink-0">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="font-display text-lg sm:text-xl font-bold text-warm-900">
                制作步骤
              </h2>
              <button
                onClick={() => setBakeMode(!bakeMode)}
                className="btn-primary !py-2 !px-3 sm:!px-4 text-xs sm:text-sm inline-flex items-center gap-1.5"
              >
                <PlayCircle className="w-4 h-4" />
                <span className="hidden xs:inline">{bakeMode ? '退出跟做' : '开始跟做'}</span>
                <span className="xs:hidden">{bakeMode ? '退出' : '跟做'}</span>
              </button>
            </div>
            <StepList
              steps={recipe.steps}
              ingredients={recipe.ingredients}
              ratio={ratio}
              bakeMode={bakeMode}
              onExitBakeMode={() => setBakeMode(false)}
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-14 sm:bottom-16 md:bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-warm-100 py-3 sm:py-4 px-4 sm:px-6 z-30 md:z-40 safe-area-bottom">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleFavorite}
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all ${
                favorited
                  ? 'bg-secondary text-white'
                  : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
              }`}
            >
              <Heart className={`w-5 h-5 ${favorited ? 'fill-current' : ''}`} />
            </button>
            <button className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-warm-100 text-warm-600 flex items-center justify-center hover:bg-warm-200 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          <button onClick={() => setBakeMode(!bakeMode)} className="btn-primary !py-2.5 sm:!py-3 !px-4 sm:!px-6 text-sm">
            {bakeMode ? '退出跟做模式' : '开始跟做'}
          </button>
        </div>
      </div>

      <div className="h-20 sm:h-24 md:h-0" />
    </Layout>
  );
}
