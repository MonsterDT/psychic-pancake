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
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
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
      <div className="max-w-4xl mx-auto px-6 py-8 animate-fade-in">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-warm-600 hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          返回
        </button>

        <div className="relative h-[350px] rounded-container overflow-hidden mb-8">
          <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center gap-3 mb-3">
              <span className={`badge ${diff.color}`}>{diff.label}</span>
              {category && <span className="badge bg-white/20 text-white backdrop-blur-sm">{category.name}</span>}
            </div>
            <h1 className="font-display text-3xl lg:text-4xl font-bold mb-3">{recipe.name}</h1>
            <p className="text-white/80">{recipe.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 mb-8 p-6 bg-white rounded-card shadow-sm border border-warm-100">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-warm-500">总时长</p>
              <p className="font-semibold text-warm-900">{recipe.time} 分钟</p>
            </div>
          </div>
          <div className="w-px h-10 bg-warm-100" />
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <div>
              <p className="text-xs text-warm-500">评分</p>
              <p className="font-semibold text-warm-900">{recipe.rating} 分</p>
            </div>
          </div>
          <div className="w-px h-10 bg-warm-100" />
          <div className="flex items-center gap-2">
            <ChefHat className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-warm-500">份量</p>
              <p className="font-semibold text-warm-900">{servings} 人份</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <ServingScaler baseServings={2} ingredients={recipe.ingredients} onServingsChange={setServings} />
            <IngredientList ingredients={recipe.ingredients} ratio={ratio} />

            <div className="bg-amber-50 rounded-card p-6 border border-amber-100">
              <h4 className="font-semibold text-warm-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-600" />
                小贴士
              </h4>
              <ul className="space-y-2">
                {recipe.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-warm-700 flex gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-bold text-warm-900">
                制作步骤
              </h2>
              <button
                onClick={() => setBakeMode(!bakeMode)}
                className="btn-primary !py-2 !px-4 text-sm inline-flex items-center gap-1.5"
              >
                <PlayCircle className="w-4 h-4" />
                {bakeMode ? '退出跟做' : '开始跟做'}
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

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-warm-100 py-4 px-6 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleFavorite}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                favorited
                  ? 'bg-secondary text-white'
                  : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
              }`}
            >
              <Heart className={`w-5 h-5 ${favorited ? 'fill-current' : ''}`} />
            </button>
            <button className="w-11 h-11 rounded-full bg-warm-100 text-warm-600 flex items-center justify-center hover:bg-warm-200 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          <button onClick={() => setBakeMode(!bakeMode)} className="btn-primary">
            {bakeMode ? '退出跟做模式' : '开始跟做'}
          </button>
        </div>
      </div>

      <div className="h-24" />
    </Layout>
  );
}
