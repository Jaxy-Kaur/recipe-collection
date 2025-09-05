'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import FilterButtons from '@/components/FilterButtons';
import TagFilter from '@/components/TagFilter';
import RecipeGrid from '@/components/RecipeGrid';
import { recipes, categories, difficulties, commonTags } from '@/data/recipes';
import { Recipe } from '@/types/recipe';

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get category display name and emoji
  const getCategoryDisplay = (cat: string) => {
    const emojis: { [key: string]: string } = {
      'Breakfast': '🥞',
      'Lunch': '🥗',
      'Dinner': '🍝',
      'Dessert': '🍰',
      'Snack': '🍽️'
    };
    return { name: cat, emoji: emojis[cat] || '🍽️' };
  };

  const categoryDisplay = getCategoryDisplay(category);

  // Filter recipes by category and other filters
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      // Category filter (must match the page category)
      const categoryMatch = recipe.category === category;

      // Search filter
      const searchMatch = searchQuery === '' || 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        recipe.tags.some(tag => 
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Difficulty filter
      const difficultyMatch = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;

      // Tags filter
      const tagsMatch = selectedTags.length === 0 || 
        selectedTags.some(tag => recipe.tags.includes(tag));

      return categoryMatch && searchMatch && difficultyMatch && tagsMatch;
    });
  }, [category, searchQuery, selectedDifficulty, selectedTags]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedDifficulty('All');
    setSelectedTags([]);
  };

  const hasActiveFilters = searchQuery || selectedDifficulty !== 'All' || selectedTags.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Category Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg mb-6">
              <span className="text-3xl">{categoryDisplay.emoji}</span>
              <span className="text-lg font-medium text-gray-700">Category</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {categoryDisplay.emoji} {categoryDisplay.name}
              <span className="block text-2xl sm:text-3xl text-orange-600 mt-4">
                {filteredRecipes.length} Delicious Recipes
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover amazing {category.toLowerCase()} recipes that will delight your taste buds. 
              From quick and easy to gourmet creations, find your perfect {category.toLowerCase()} recipe.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder={`Search ${category.toLowerCase()} recipes...`}
              className="w-full"
            />
          </div>

          {/* Category Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-gray-900">{filteredRecipes.length}</div>
              <div className="text-sm text-gray-600">Recipes</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-gray-900">
                {Math.round(filteredRecipes.reduce((acc, recipe) => acc + recipe.cookTime, 0) / filteredRecipes.length)}
              </div>
              <div className="text-sm text-gray-600">Avg. Cook Time</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-gray-900">
                {Math.round(filteredRecipes.filter(r => r.difficulty === 'Easy').length / filteredRecipes.length * 100)}%
              </div>
              <div className="text-sm text-gray-600">Easy Recipes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with Filters */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
                
                {/* Filter Buttons */}
                <div className="mb-6">
                  <FilterButtons
                    categories={['All', ...categories]}
                    difficulties={['All', ...difficulties]}
                    selectedCategory={category}
                    selectedDifficulty={selectedDifficulty}
                    onCategoryChange={() => {}} // Disabled on category page
                    onDifficultyChange={setSelectedDifficulty}
                    onClearFilters={clearAllFilters}
                  />
                </div>

                {/* Tag Filter */}
                <div className="mb-6">
                  <TagFilter
                    tags={commonTags}
                    selectedTags={selectedTags}
                    onTagChange={setSelectedTags}
                  />
                </div>

                {/* Active Filters Summary */}
                {hasActiveFilters && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-medium text-orange-800 mb-2">Active Filters:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDifficulty !== 'All' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {selectedDifficulty}
                          <button
                            onClick={() => setSelectedDifficulty('All')}
                            className="ml-2 hover:text-emerald-600 transition-colors duration-200"
                          >
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <RecipeGrid
                recipes={filteredRecipes}
                searchQuery={searchQuery}
                className="min-h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
