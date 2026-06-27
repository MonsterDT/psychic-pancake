import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import type { Ingredient } from '@/types';

interface ServingScalerProps {
  baseServings: number;
  ingredients: Ingredient[];
  onServingsChange: (servings: number) => void;
}

export default function ServingScaler({ baseServings, ingredients, onServingsChange }: ServingScalerProps) {
  const [servings, setServings] = useState(baseServings);
  const ratio = servings / baseServings;

  const handleChange = (newServings: number) => {
    const clamped = Math.max(0.5, Math.min(4, newServings));
    setServings(clamped);
    onServingsChange(clamped);
  };

  return (
    <div className="bg-warm-50 rounded-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-semibold text-warm-900">份量调整</h4>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleChange(servings - 0.5)}
            disabled={servings <= 0.5}
            className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-warm-100 disabled:opacity-40 transition-colors"
          >
            <Minus className="w-4 h-4 text-warm-700" />
          </button>
          <span className="text-lg font-semibold text-warm-900 w-16 text-center">
            {servings}人份
          </span>
          <button
            onClick={() => handleChange(servings + 0.5)}
            disabled={servings >= 4}
            className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-warm-100 disabled:opacity-40 transition-colors"
          >
            <Plus className="w-4 h-4 text-warm-700" />
          </button>
        </div>
      </div>

      <input
        type="range"
        min="0.5"
        max="4"
        step="0.5"
        value={servings}
        onChange={(e) => handleChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-warm-200 rounded-full appearance-none cursor-pointer accent-primary"
      />

      {ratio !== 1 && (
        <p className="text-xs text-warm-500 mt-3 text-center">
          已调整至 {servings}人份（{ratio > 1 ? `+${Math.round((ratio - 1) * 100)}%` : `${Math.round((1 - ratio) * 100)}%`}）
          {ratio > 2 || ratio < 0.75 && <span className="text-yellow-600 ml-1">大幅调整可能影响成功率</span>}
        </p>
      )}
    </div>
  );
}
