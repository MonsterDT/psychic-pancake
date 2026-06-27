import { useNavigate } from 'react-router-dom';
import { Heart, ChefHat } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import RecipeCard from '@/components/home/RecipeCard';
import { useFavoritesStore } from '@/store/favorites';
import { recipes } from '@/data/recipes';

export default function FavoritesPage() {
  const navigate = useNavigate();
  const { favorites } = useFavoritesStore();

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-8 animate-fade-in">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-warm-900 mb-2">
            我的收藏
          </h1>
          <p className="text-warm-500">已收藏 {favoriteRecipes.length} 个食谱</p>
        </div>

        {favoriteRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteRecipes.map((recipe, index) => (
              <RecipeCard key={recipe.id} recipe={recipe} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-warm-300" />
            </div>
            <h3 className="text-xl font-semibold text-warm-900 mb-2">还没有收藏</h3>
            <p className="text-warm-500 mb-6 max-w-sm mx-auto">
              浏览食谱时点击心形图标，就能把喜欢的配方收藏到这里
            </p>
            <button
              onClick={() => navigate('/')}
              className="btn-primary"
            >
              去逛逛
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
