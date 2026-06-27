import { useNavigate } from 'react-router-dom';
import { Cake, Croissant, Cookie, Candy, Coffee } from 'lucide-react';
import { categories } from '@/data/recipes';

const iconMap: Record<string, React.ElementType> = {
  cake: Cake,
  bread: Croissant,
  cookie: Cookie,
  dessert: Candy,
  drink: Coffee,
};

export default function CategoryNav() {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-warm-900 mb-2 sm:mb-3">
            探索美味
          </h2>
          <p className="text-warm-500 text-sm sm:text-base">
            选择你喜欢的烘焙品类，开启甜蜜之旅
          </p>
        </div>

        <div className="md:grid md:grid-cols-5 md:gap-6">
          <div className="flex md:grid gap-3 md:contents overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] || Cake;
              return (
                <button
                  key={cat.id}
                  onClick={() => navigate(`/category/${cat.id}`)}
                  className="group flex-shrink-0 flex flex-col items-center gap-2 sm:gap-3 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-card"
                    style={{ backgroundColor: `${cat.color}15` }}
                  >
                    <Icon
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 transition-transform duration-300"
                      style={{ color: cat.color }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-warm-700 group-hover:text-primary transition-colors whitespace-nowrap">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
