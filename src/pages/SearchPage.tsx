import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, Clock, Sparkles } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import RecipeCard from '@/components/home/RecipeCard';
import { recipes } from '@/data/recipes';

const hotSearches = ['戚风蛋糕', '曲奇饼干', '吐司面包', '提拉米苏', '熔岩蛋糕', '布丁'];
const searchHistory = ['巧克力蛋糕', '饼干', '面包'];

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const [input, setInput] = useState(query);

  useEffect(() => {
    setInput(query);
  }, [query]);

  const filteredRecipes = query
    ? recipes.filter(
        (r) =>
          r.name.includes(query) ||
          r.description.includes(query) ||
          r.ingredients.some((ing) => ing.name.includes(query))
      )
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setSearchParams({ q: input.trim() });
    }
  };

  const handleQuickSearch = (term: string) => {
    setInput(term);
    setSearchParams({ q: term });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-8 animate-fade-in">
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="搜索食谱名称、食材..."
              className="w-full pl-12 pr-24 py-4 text-lg rounded-container border border-warm-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary !py-2.5 !px-6"
            >
              搜索
            </button>
          </div>
        </form>

        {!query && (
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-warm-900 mb-4">热门搜索</h3>
              <div className="flex flex-wrap gap-2">
                {hotSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleQuickSearch(term)}
                    className="px-4 py-2 bg-white border border-warm-100 rounded-full text-sm text-warm-700 hover:border-primary hover:text-primary transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-warm-900 mb-4">搜索历史</h3>
              <div className="flex flex-wrap gap-2">
                {searchHistory.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleQuickSearch(term)}
                    className="px-4 py-2 bg-warm-50 rounded-full text-sm text-warm-600 hover:bg-warm-100 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-warm-50 rounded-container p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-warm-900 mb-2">找不到想要的？</h3>
              <p className="text-sm text-warm-500 mb-4">让 AI 为你量身定制专属配方</p>
              <button
                onClick={() => navigate('/ai-chat')}
                className="btn-primary"
              >
                开始 AI 定制
              </button>
            </div>
          </div>
        )}

        {query && (
          <div>
            <p className="text-warm-500 mb-6">
              找到 <span className="font-semibold text-warm-900">{filteredRecipes.length}</span> 个相关结果
            </p>

            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.map((recipe, index) => (
                  <RecipeCard key={recipe.id} recipe={recipe} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-warm-400" />
                </div>
                <h3 className="text-lg font-medium text-warm-900 mb-2">没有找到匹配的食谱</h3>
                <p className="text-warm-500 text-sm mb-4">试试其他关键词，或者让AI帮你定制</p>
                <button
                  onClick={() => navigate('/ai-chat')}
                  className="btn-primary"
                >
                  让 AI 帮我定制
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
