import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, User, Sparkles, Heart, ChefHat, Menu, X, Home } from 'lucide-react';
import { useFavoritesStore } from '@/store/favorites';
import { useState, useEffect } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { favorites } = useFavoritesStore();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: '首页', icon: Home },
    { path: '/ai-chat', label: 'AI助手', icon: Sparkles },
    { path: '/favorites', label: '收藏', icon: Heart, badge: favorites.length },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg sm:text-xl font-semibold text-warm-900 group-hover:text-primary transition-colors">
              烘焙AI宝典
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-primary' : 'text-warm-700 hover:text-primary'
              }`}
            >
              首页
            </Link>
            <Link
              to="/ai-chat"
              className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                isActive('/ai-chat') ? 'text-primary' : 'text-warm-700 hover:text-primary'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              AI助手
            </Link>
            <Link
              to="/favorites"
              className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                isActive('/favorites') ? 'text-primary' : 'text-warm-700 hover:text-primary'
              }`}
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

          <div className="flex items-center gap-2 sm:gap-3">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-2 animate-fade-in">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索食谱..."
                  className="w-32 sm:w-48 lg:w-64 input !py-2 text-sm"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-warm-500 hover:text-warm-700 p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <>
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-full hover:bg-warm-100 transition-colors"
                  aria-label="搜索"
                >
                  <Search className="w-5 h-5 text-warm-700" />
                </button>
                <button
                  onClick={() => setMenuOpen(true)}
                  className="md:hidden p-2 rounded-full hover:bg-warm-100 transition-colors"
                  aria-label="菜单"
                >
                  <Menu className="w-5 h-5 text-warm-700" />
                </button>
                <button
                  onClick={() => navigate('/profile')}
                  className="hidden md:flex p-2 rounded-full hover:bg-warm-100 transition-colors"
                  aria-label="个人中心"
                >
                  <User className="w-5 h-5 text-warm-700" />
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 max-w-[80vw] bg-white shadow-xl animate-slide-in-right">
            <div className="p-4 border-b border-warm-100 flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-warm-900">菜单</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-full hover:bg-warm-100 transition-colors"
              >
                <X className="w-5 h-5 text-warm-700" />
              </button>
            </div>
            <nav className="p-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-btn transition-colors ${
                      isActive(item.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-warm-700 hover:bg-warm-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                    {item.badge && item.badge > 0 && (
                      <span className="ml-auto bg-secondary text-white text-xs px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
              <Link
                to="/profile"
                className={`flex items-center gap-3 px-4 py-3 rounded-btn transition-colors ${
                  isActive('/profile')
                    ? 'bg-primary/10 text-primary'
                    : 'text-warm-700 hover:bg-warm-50'
                }`}
              >
                <User className="w-5 h-5" />
                <span className="font-medium">个人中心</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-warm-100 z-40 md:hidden safe-area-bottom">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center gap-1 px-4 py-2 relative ${
                  active ? 'text-primary' : 'text-warm-500'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 ${active ? 'text-primary' : ''}`} />
                  {item.badge && item.badge > 0 && (
                    <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] px-1 py-0.5 rounded-full min-w-[16px] text-center">
                      {item.badge > 9 ? '9+' : item.badge}
                    </span>
                  )}
                </div>
                <span className={`text-[10px] font-medium ${active ? 'text-primary' : ''}`}>
                  {item.label}
                </span>
                {active && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />}
              </Link>
            );
          })}
          <Link
            to="/profile"
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 relative ${
              isActive('/profile') ? 'text-primary' : 'text-warm-500'
            }`}
          >
            <User className={`w-5 h-5 ${isActive('/profile') ? 'text-primary' : ''}`} />
            <span className={`text-[10px] font-medium ${isActive('/profile') ? 'text-primary' : ''}`}>
              我的
            </span>
            {isActive('/profile') && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
            )}
          </Link>
        </div>
      </nav>
    </>
  );
}
