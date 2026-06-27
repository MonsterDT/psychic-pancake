export type Category = 'cake' | 'bread' | 'cookie' | 'dessert' | 'drink';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Step {
  order: number;
  title: string;
  description: string;
  duration?: number;
  relatedIngredients?: string[];
  temperature?: {
    celsius: number;
    note?: string;
  };
  tips?: string;
}

export interface Recipe {
  id: string;
  name: string;
  category: Category;
  difficulty: Difficulty;
  time: number;
  rating: number;
  image: string;
  description: string;
  ingredients: Ingredient[];
  steps: Step[];
  tips: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}
