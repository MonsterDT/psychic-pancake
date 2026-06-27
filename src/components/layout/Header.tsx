import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, User, Sparkles, Heart, ChefHat } from 'lucide-react';
import { useFavoritesStore } from '@/store/favorites';
import { useState } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { favorites } = useFavoritesStore();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-warm-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
            <ChefHat className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-xl font-semibold text-warm-900 group-hover:text-primary transition-colors">
            烘焙AI宝典
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive('/') ? 'text-primary' : 'text-warm-700 hover:text-primary'}`}
          >
            首页
          </Link>
          <Link
            to="/ai-chat"
            className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
              isActive('/ai-chat') ? 'text-primary' : 'text-warm-700 hover:text-primary'}`}
          >
            <Sparkles className="w-4 h-4" />
            AI助手
          </Link>
          <Link
            to="/favorites"
            className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
              isActive('/favorites') ? 'text-primary' : 'text-warm-700 hover:text-primary'}`}
          >
            <Heart className="w-4 h-4" />
            收藏
            {favorites.length > 0 && (
              <span className="bg-secondary text-white text-xs px-1.5 py-0.5 rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {searchOpen ? (
            <form onSubmit={handleSearch} className="flex items-center gap-2 animate-fade-in">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索食谱或食材..."
                className="w-48 lg:w-64 input !py-2 text-sm"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-warm-500 hover:text-warm-700"
              >
                取消
              </button>
            </form>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full hover:bg-warm-100 transition-colors"
              aria-label="搜索"
            >
              <Search className="w-5 h-5 text-warm-700" />
            </button>
          )}
          <button
              onClick={() => navigate('/profile')}
              className="p-2 rounded-full hover:bg-warm-100 transition-colors"
              aria-label="个人中心"
            >
              <User className="w-5 h-5 text-warm-700" />
            </button>
        </div>
      </div>
    </header>
  );
}
