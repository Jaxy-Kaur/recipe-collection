'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import FilterButtons from '@/components/FilterButtons';
import TagFilter from '@/components/TagFilter';
import RecipeGrid from '@/components/RecipeGrid';
import { recipes, categories, difficulties, commonTags } from '@/data/recipes';
import { Recipe, RecipeCategory, RecipeDifficulty } from '@/types/recipe';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory | ''>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<RecipeDifficulty | ''>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Filter recipes based on search and filters
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        recipe.tags.some(tag => 
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Category filter
      const matchesCategory = selectedCategory === '' || recipe.category === selectedCategory;

      // Difficulty filter
      const matchesDifficulty = selectedDifficulty === '' || recipe.difficulty === selectedDifficulty;

      // Tags filter
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => recipe.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesDifficulty && matchesTags;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedTags]);

  const handleTagChange = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedDifficulty('');
    setSelectedTags([]);
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedDifficulty || selectedTags.length > 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover Delicious Recipes
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our collection of carefully curated recipes for every meal and occasion. 
              From quick breakfasts to elaborate dinners, find your next favorite dish.
            </p>
            <div className="max-w-md mx-auto">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search recipes, ingredients, or tags..."
              />
            </div>
          </div>
        </section>

        {/* Filters and Content Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                    {hasActiveFilters && (
                      <button
                        onClick={clearAllFilters}
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-6">
                    <FilterButtons
                      categories={categories}
                      difficulties={difficulties}
                      selectedCategory={selectedCategory}
                      selectedDifficulty={selectedDifficulty}
                      onCategoryChange={setSelectedCategory}
                      onDifficultyChange={setSelectedDifficulty}
                    />
                    
                    <TagFilter
                      tags={commonTags}
                      selectedTags={selectedTags}
                      onTagChange={handleTagChange}
                    />
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {hasActiveFilters ? 'Search Results' : 'All Recipes'}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Showing {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  
                  {hasActiveFilters && (
                    <button
                      onClick={clearAllFilters}
                      className="btn-secondary"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>

                {/* Recipe Grid */}
                <RecipeGrid recipes={filteredRecipes} />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
