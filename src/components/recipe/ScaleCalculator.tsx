import { useState } from 'react';
import { Scale, Plus, Minus, RefreshCw } from 'lucide-react';
import type { Ingredient } from '@/types';

interface ScaleCalculatorProps {
  ingredients: Ingredient[];
  ratio: number;
}

export default function ScaleCalculator({ ingredients, ratio }: ScaleCalculatorProps) {
  const [customRatio, setCustomRatio] = useState(ratio);
  const [selectedIngredient, setSelectedIngredient] = useState<number | null>(null);
  const [actualWeight, setActualWeight] = useState<string>('');

  const scaledIngredients = ingredients.map((ing) => ({
    ...ing,
    scaledAmount: +(ing.amount * customRatio).toFixed(1),
  }));

  const handleRatioIncrease = () => {
    setCustomRatio((prev) => +(prev + 0.5).toFixed(1));
  };

  const handleRatioDecrease = () => {
    if (customRatio > 0.5) {
      setCustomRatio((prev) => +(prev - 0.5).toFixed(1));
    }
  };

  const handleReset = () => {
    setCustomRatio(ratio);
    setSelectedIngredient(null);
    setActualWeight('');
  };

  const handleSelectIngredient = (index: number) => {
    setSelectedIngredient(index);
    setActualWeight(scaledIngredients[index].scaledAmount.toString());
  };

  const calculateNeededRatio = () => {
    if (selectedIngredient === null || !actualWeight) return null;
    const original = ingredients[selectedIngredient].amount;
    const actual = parseFloat(actualWeight);
    if (isNaN(actual) || actual <= 0 || original === 0) return null;
    return +(actual / original).toFixed(2);
  };

  const neededRatio = calculateNeededRatio();

  const adjustedIngredients = neededRatio
    ? ingredients.map((ing) => ({
        ...ing,
        adjustedAmount: +(ing.amount * neededRatio).toFixed(1),
      }))
    : [];

  return (
    <div className="bg-white rounded-card p-5 shadow-sm border border-warm-100">
      <div className="flex items-center gap-2 mb-4">
        <Scale className="w-5 h-5 text-primary" />
        <h4 className="font-semibold text-warm-900">克重秤计算器</h4>
      </div>

      <div className="mb-4">
        <p className="text-sm text-warm-500 mb-2">当前份量倍数</p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleRatioDecrease}
            className="w-10 h-10 rounded-full bg-warm-100 text-warm-700 flex items-center justify-center hover:bg-warm-200 transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <div className="flex-1 text-center">
            <span className="text-2xl font-display font-bold text-primary">
              {customRatio}x
            </span>
          </div>
          <button
            onClick={handleRatioIncrease}
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="border-t border-warm-100 pt-4 mb-4">
        <p className="text-sm text-warm-500 mb-3">食材用量（点击可换算）</p>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {scaledIngredients.map((ing, index) => (
            <button
              key={ing.name}
              onClick={() => handleSelectIngredient(index)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-btn text-sm transition-colors ${
                selectedIngredient === index
                  ? 'bg-primary/10 text-primary'
                  : 'hover:bg-warm-50 text-warm-700'
              }`}
            >
              <span>{ing.name}</span>
              <span className="font-medium">
                {ing.scaledAmount} {ing.unit}
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedIngredient !== null && (
        <div className="bg-amber-50 rounded-btn p-4 border border-amber-100">
          <p className="text-sm text-amber-800 mb-2">
            实际称重「{ingredients[selectedIngredient].name}」：
          </p>
          <div className="flex items-center gap-2 mb-3">
            <input
              type="number"
              value={actualWeight}
              onChange={(e) => setActualWeight(e.target.value)}
              className="flex-1 px-3 py-2 rounded-btn border border-amber-200 bg-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="输入实际重量"
            />
            <span className="text-sm text-warm-600">
              {ingredients[selectedIngredient].unit}
            </span>
          </div>

          {neededRatio !== null && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-amber-700">换算系数：</span>
                <span className="font-semibold text-amber-800">{neededRatio}x</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-amber-700">调整用量：</span>
                <button
                  onClick={() => setCustomRatio(neededRatio)}
                  className="text-amber-800 font-semibold hover:text-amber-900 underline underline-offset-2"
                >
                  应用此比例
                </button>
              </div>
              <div className="border-t border-amber-200 pt-2 mt-2 max-h-32 overflow-y-auto space-y-1">
                {adjustedIngredients.map((ing) => (
                  <div
                    key={ing.name}
                    className="flex items-center justify-between text-xs text-amber-700"
                  >
                    <span>{ing.name}</span>
                    <span>
                      {ing.adjustedAmount} {ing.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <button
        onClick={handleReset}
        className="w-full mt-4 py-2 text-sm text-warm-500 inline-flex items-center justify-center gap-1.5 hover:text-warm-700 transition-colors"
      >
        <RefreshCw className="w-3.5 h-3.5" />
        重置
      </button>
    </div>
  );
}
