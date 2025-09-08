export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number; // in minutes
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Dessert' | 'Snack';
  ingredients: string[];
  instructions: string[];
  tags: string[];
  isNew?: boolean;
  isPopular?: boolean;
  isChefChoice?: boolean;
}

export type RecipeCategory = Recipe['category'];
export type RecipeDifficulty = Recipe['difficulty'];
export type RecipeTag = string;
