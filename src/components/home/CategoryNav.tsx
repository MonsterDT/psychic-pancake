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
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
        <h2 className="font-display text-3xl font-bold text-warm-900 mb-3">
          探索美味
        </h2>
        <p className="text-warm-500">
          选择你喜欢的烘焙品类，开启甜蜜之旅
        </p>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || Cake;
          return (
            <button
              key={cat.id}
              onClick={() => navigate(`/category/${cat.id}`)}
              className="group flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-card"
                style={{ backgroundColor: `${cat.color}15` }}
              >
                <Icon
                  className="w-9 h-9 transition-transform duration-300"
                  style={{ color: cat.color }}
                />
              </div>
              <span className="text-sm font-medium text-warm-700 group-hover:text-primary transition-colors">
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
      </div>
    </section>
  );
}
