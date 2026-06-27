import { Sparkles, User, ThumbsUp, ThumbsDown, ExternalLink, Heart } from 'lucide-react';
import type { Recipe } from '@/types';
import { useNavigate } from 'react-router-dom';
import { useFavoritesStore } from '@/store/favorites';

interface ChatMessageProps {
  role: 'user' | 'ai';
  content: string;
  recipe?: Recipe | null;
  onFeedback?: (type: 'up' | 'down') => void;
}

export default function ChatMessage({ role, content, recipe, onFeedback }: ChatMessageProps) {
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  const isUser = role === 'user';
  const favorited = recipe ? isFavorite(recipe.id) : false;

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!recipe) return;
    if (favorited) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div
        className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center ${
          isUser ? 'bg-primary text-white' : 'bg-gradient-to-br from-primary to-secondary text-white'
        }`}
      >
        {isUser ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
      </div>

      <div className={`max-w-[75%] ${isUser ? 'text-right' : ''}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isUser
              ? 'bg-primary text-white rounded-tr-sm'
              : 'bg-white border border-warm-100 text-warm-800 rounded-tl-sm shadow-sm'
          }`}
        >
          {!isUser && (
            <span className="text-xs text-primary font-medium mb-1 block">
              [AI 生成]
            </span>
          )}
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>

        {recipe && (
          <div
            onClick={() => navigate(`/recipe/${recipe.id}`)}
            className="mt-3 bg-white rounded-card overflow-hidden border border-warm-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow text-left"
          >
            <div className="flex gap-3 p-3">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-warm-900 text-sm mb-1 truncate">{recipe.name}</h4>
                <p className="text-xs text-warm-500 line-clamp-2 mb-2">{recipe.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-warm-500">{recipe.time}分钟 · {recipe.difficulty === 'easy' ? '简单' : recipe.difficulty === 'medium' ? '中等' : '困难'}</span>
                  <button
                    onClick={handleFavorite}
                    className={`p-1.5 rounded-full transition-colors ${
                      favorited ? 'text-secondary' : 'text-warm-400 hover:text-secondary'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
            <div className="px-3 py-2 border-t border-warm-50 flex items-center justify-between">
              <span className="text-xs text-primary">查看完整配方</span>
              <ExternalLink className="w-3.5 h-3.5 text-primary" />
            </div>
          </div>
        )}

        {!isUser && (
          <div className="mt-2 flex items-center gap-2 justify-start">
            <button
              onClick={() => onFeedback?.('up')}
              className="p-1.5 text-warm-400 hover:text-green-500 transition-colors"
              title="有用"
            >
              <ThumbsUp className="w-4 h-4" />
            </button>
            <button
              onClick={() => onFeedback?.('down')}
              className="p-1.5 text-warm-400 hover:text-red-500 transition-colors"
              title="无用"
            >
              <ThumbsDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
