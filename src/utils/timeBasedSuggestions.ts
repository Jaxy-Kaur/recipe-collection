import { Recipe } from '@/types/recipe';

export type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'late-night';

export interface TimeBasedConfig {
  timeOfDay: TimeOfDay;
  priorityCategories: string[];
  messaging: {
    title: string;
    subtitle: string;
    featuredTitle: string;
  };
}

export const getTimeBasedConfig = (): TimeBasedConfig => {
  const currentHour = new Date().getHours();
  
  if (currentHour >= 6 && currentHour < 11) {
    // Morning (6AM-11AM)
    return {
      timeOfDay: 'morning',
      priorityCategories: ['Breakfast', 'Beverage'],
      messaging: {
        title: 'Good Morning!',
        subtitle: 'Start your day with these delicious breakfast recipes',
        featuredTitle: 'Perfect for Breakfast'
      }
    };
  } else if (currentHour >= 11 && currentHour < 17) {
    // Afternoon (11AM-5PM)
    return {
      timeOfDay: 'afternoon',
      priorityCategories: ['Lunch', 'Snack', 'Appetizer'],
      messaging: {
        title: 'Afternoon Delights',
        subtitle: 'Light and satisfying meals for your midday break',
        featuredTitle: 'Great for Lunch'
      }
    };
  } else if (currentHour >= 17 && currentHour < 22) {
    // Evening (5PM-10PM)
    return {
      timeOfDay: 'evening',
      priorityCategories: ['Dinner', 'Main Course'],
      messaging: {
        title: 'Evening Feast',
        subtitle: 'Hearty and comforting dinner recipes for the family',
        featuredTitle: 'Perfect for Dinner Tonight'
      }
    };
  } else {
    // Late Night (10PM-6AM)
    return {
      timeOfDay: 'late-night',
      priorityCategories: ['Dessert', 'Snack', 'Beverage'],
      messaging: {
        title: 'Late Night Treats',
        subtitle: 'Quick snacks and comfort food for those late hours',
        featuredTitle: 'Great for Late Night'
      }
    };
  }
};

export const getTimeBasedRecipes = (recipes: Recipe[], count: number = 4): Recipe[] => {
  const config = getTimeBasedConfig();
  
  // Define specific recipe IDs for each time period
  const timeBasedRecipeIds = {
    morning: ['1', '4', '13', '19', '22', '28', '7'], // Classic Pancakes, Avocado Toast, French Toast, Oatmeal, Pancakes, Smoothie Bowl, Banana Smoothie
    afternoon: ['6', '11', '12', '16', '21', '22', '17', '26'], // Greek Salad, Vegetable Soup, Chicken Caesar Wrap, Caesar Salad, Caprese Salad, Chicken Noodle Soup, Hummus, Trail Mix
    evening: ['2', '5', '9', '14', '18', '20', '27'], // Chicken Stir Fry, Beef Tacos, Grilled Salmon, Spaghetti Carbonara, Beef Stew, Fish Tacos, Risotto
    'late-night': ['3', '10', '15', '21', '25', '17', '26'] // Chocolate Chip Cookies, Berry Parfait, Chocolate Mousse, Apple Pie, Tiramisu, Hummus, Trail Mix
  };
  
  // Get the specific recipe IDs for current time
  const currentTimeRecipeIds = timeBasedRecipeIds[config.timeOfDay] || [];
  
  // Filter recipes by the specific IDs
  const priorityRecipes = recipes.filter(recipe => 
    currentTimeRecipeIds.includes(recipe.id)
  );
  
  // If we don't have enough priority recipes, fill with other recipes from the same categories
  const remainingCount = count - priorityRecipes.length;
  const otherRecipes = recipes.filter(recipe => 
    config.priorityCategories.includes(recipe.category) && 
    !currentTimeRecipeIds.includes(recipe.id)
  );
  
  // Shuffle and take the needed amount
  const shuffledOther = [...otherRecipes].sort(() => Math.random() - 0.5);
  const selectedOther = shuffledOther.slice(0, Math.max(0, remainingCount));
  
  // Combine and shuffle the final selection
  const finalRecipes = [...priorityRecipes, ...selectedOther];
  return [...finalRecipes].sort(() => Math.random() - 0.5).slice(0, count);
};

export const getTimeBasedRandomRecipe = (recipes: Recipe[]): Recipe => {
  const config = getTimeBasedConfig();
  
  // Define specific recipe IDs for each time period (same as featured recipes)
  const timeBasedRecipeIds = {
    morning: ['1', '4', '13', '19', '22', '28', '7'], // Classic Pancakes, Avocado Toast, French Toast, Oatmeal, Pancakes, Smoothie Bowl, Banana Smoothie
    afternoon: ['6', '11', '12', '16', '21', '22', '17', '26'], // Greek Salad, Vegetable Soup, Chicken Caesar Wrap, Caesar Salad, Caprese Salad, Chicken Noodle Soup, Hummus, Trail Mix
    evening: ['2', '5', '9', '14', '18', '20', '27'], // Chicken Stir Fry, Beef Tacos, Grilled Salmon, Spaghetti Carbonara, Beef Stew, Fish Tacos, Risotto
    'late-night': ['3', '10', '15', '21', '25', '17', '26'] // Chocolate Chip Cookies, Berry Parfait, Chocolate Mousse, Apple Pie, Tiramisu, Hummus, Trail Mix
  };
  
  // Get the specific recipe IDs for current time
  const currentTimeRecipeIds = timeBasedRecipeIds[config.timeOfDay] || [];
  
  // Filter recipes by the specific IDs
  const priorityRecipes = recipes.filter(recipe => 
    currentTimeRecipeIds.includes(recipe.id)
  );
  
  // If we have priority recipes, choose from them, otherwise choose any recipe
  const recipePool = priorityRecipes.length > 0 ? priorityRecipes : recipes;
  const randomIndex = Math.floor(Math.random() * recipePool.length);
  
  return recipePool[randomIndex];
};

export const getTimeBasedGreeting = (): string => {
  const config = getTimeBasedConfig();
  return config.messaging.title;
};

export const getTimeBasedSubtitle = (): string => {
  const config = getTimeBasedConfig();
  return config.messaging.subtitle;
};

export const getTimeBasedFeaturedTitle = (): string => {
  const config = getTimeBasedConfig();
  return config.messaging.featuredTitle;
};
