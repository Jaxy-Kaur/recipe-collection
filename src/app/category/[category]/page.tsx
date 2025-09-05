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

  // Filter recipes by category and other filters
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      // Category filter (fixed by the route)
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

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'Breakfast': return '🥞';
      case 'Lunch': return '🥗';
      case 'Dinner': return '🍝';
      case 'Dessert': return '🍰';
      case 'Snack': return '🍿';
      default: return '🍽️';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Category Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <span className="text-2xl">{getCategoryEmoji(category)}</span>
              <span className="text-sm font-medium text-gray-700">{category} Recipes</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {category}
              <span className="block gradient-text">
                Collection
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover our curated collection of {category.toLowerCase()} recipes. 
              From quick and easy to elaborate and impressive, find the perfect recipe for any occasion.
            </p>
            <div className="text-lg text-orange-600 font-semibold">
              {filteredRecipes.length} {filteredRecipes.length === 1 ? 'Recipe' : 'Recipes'} Found
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters & Search</h3>
                
                {/* Search Bar */}
                <div className="mb-6">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder={`Search ${category.toLowerCase()} recipes...`}
                  />
                </div>

                {/* Filter Buttons - Category is fixed, only show difficulty */}
                <div className="mb-6">
                  <FilterButtons
                    categories={[category]} // Only show the current category
                    difficulties={['All', ...difficulties]}
                    selectedCategory={category}
                    selectedDifficulty={selectedDifficulty}
                    onCategoryChange={() => {}} // Disabled since category is fixed
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
                {(selectedDifficulty !== 'All' || selectedTags.length > 0) && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-medium text-orange-800 mb-2">Active Filters:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800 border border-orange-200">
                        {category}
                      </span>
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
