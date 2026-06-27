import { useNavigate } from 'react-router-dom';
import { Clock, Star, Heart } from 'lucide-react';
import type { Recipe } from '@/types';
import { useFavoritesStore } from '@/store/favorites';
import { useState } from 'react';

interface RecipeCardProps {
  recipe: Recipe;
  index?: number;
}

const difficultyMap = {
  easy: { label: '简单', color: 'bg-green-100 text-green-700' },
  medium: { label: '中等', color: 'bg-yellow-100 text-yellow-700' },
  hard: { label: '困难', color: 'bg-red-100 text-red-700' },
};

export default function RecipeCard({ recipe, index = 0 }: RecipeCardProps) {
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();
  const [imageLoaded, setImageLoaded] = useState(false);
  const favorited = isFavorite(recipe.id);
  const diff = difficultyMap[recipe.difficulty];

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (favorited) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div
      className="group bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => navigate(`/recipe/${recipe.id}`)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-warm-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-warm-100 to-warm-200 animate-pulse" />
        )}
        <img
          src={recipe.image}
          alt={recipe.name}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <button
          onClick={handleFavorite}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
            favorited
              ? 'bg-secondary text-white'
              : 'bg-white/80 backdrop-blur-sm text-warm-600 hover:bg-white hover:text-secondary'
          }`}
          aria-label={favorited ? '取消收藏' : '收藏'}
        >
          <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
        </button>
        <div className={`absolute top-3 left-3 badge ${diff.color} backdrop-blur-sm`}>
          {diff.label}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-warm-900 text-lg mb-2 group-hover:text-primary transition-colors">
          {recipe.name}
        </h3>
        <p className="text-sm text-warm-500 line-clamp-2 mb-4 leading-relaxed">
          {recipe.description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-warm-500">
              <Clock className="w-4 h-4" />
              {recipe.time}分钟
            </span>
            <span className="flex items-center gap-1 text-yellow-600">
              <Star className="w-4 h-4 fill-current" />
              {recipe.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
