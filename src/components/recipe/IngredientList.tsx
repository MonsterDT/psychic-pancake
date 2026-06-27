import type { Ingredient } from '@/types';

interface IngredientListProps {
  ingredients: Ingredient[];
  ratio: number;
}

export default function IngredientList({ ingredients, ratio }: IngredientListProps) {
  const formatAmount = (amount: number): string => {
    const scaled = amount * ratio;
    if (Number.isInteger(scaled)) return scaled.toString();
    return scaled.toFixed(1);
  };

  return (
    <div className="bg-white rounded-card p-6 shadow-sm border border-warm-100">
      <h4 className="font-semibold text-warm-900 mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-primary rounded-full" />
        食材清单
      </h4>
      <ul className="space-y-3">
        {ingredients.map((ing, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-2 border-b border-warm-50 last:border-0"
          >
            <span className="text-warm-700">{ing.name}</span>
            <span className="font-medium text-warm-900">
              {formatAmount(ing.amount)} {ing.unit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
