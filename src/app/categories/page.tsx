'use client';

import { useState } from 'react';
import { recipes } from '@/data/recipes';
import { Recipe } from '@/types/recipe';
import RecipeCard from '@/components/RecipeCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categories = [
  { name: 'Breakfast', icon: '🌅', color: 'from-yellow-400 to-orange-400' },
  { name: 'Lunch', icon: '☀️', color: 'from-orange-400 to-red-400' },
  { name: 'Dinner', icon: '🌙', color: 'from-purple-400 to-pink-400' },
  { name: 'Dessert', icon: '🍰', color: 'from-pink-400 to-red-400' },
  { name: 'Snack', icon: '🍿', color: 'from-green-400 to-blue-400' },
];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredRecipes = selectedCategory 
    ? recipes.filter(recipe => recipe.category === selectedCategory)
    : recipes;

  const getCategoryStats = (categoryName: string) => {
    const categoryRecipes = recipes.filter(recipe => recipe.category === categoryName);
    return {
      count: categoryRecipes.length,
      avgTime: Math.round(categoryRecipes.reduce((sum, recipe) => sum + recipe.cookTime, 0) / categoryRecipes.length) || 0,
      difficulty: categoryRecipes.length > 0 ? categoryRecipes[0].difficulty : 'Easy'
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mb-6 shadow-lg">
            <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Recipe <span className="gradient-text">Categories</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore our delicious recipes organized by meal type. From hearty breakfasts to sweet desserts, 
            find the perfect recipe for every occasion.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {categories.map((category) => {
              const stats = getCategoryStats(category.name);
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                  className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white'
                      : 'bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`text-4xl mb-3 ${selectedCategory === category.name ? 'animate-bounce' : ''}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                    <div className="space-y-1 text-sm opacity-80">
                      <p>{stats.count} recipes</p>
                      <p>~{stats.avgTime} min avg</p>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                </button>
              );
            })}
          </div>

          {/* Selected Category Header */}
          {selectedCategory && (
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedCategory} Recipes
              </h2>
              <p className="text-gray-600">
                {filteredRecipes.length} delicious {selectedCategory.toLowerCase()} recipes to choose from
              </p>
            </div>
          )}

          {/* Recipes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          {/* No recipes message */}
          {filteredRecipes.length === 0 && selectedCategory && (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">🍽️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No {selectedCategory} recipes yet
              </h3>
              <p className="text-gray-600 mb-8">
                We're working on adding more {selectedCategory.toLowerCase()} recipes. Check back soon!
              </p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Categories
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

