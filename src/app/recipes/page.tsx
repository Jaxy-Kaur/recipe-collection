'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import FilterButtons from '@/components/FilterButtons';
import TagFilter from '@/components/TagFilter';
import RecipeGrid from '@/components/RecipeGrid';
import { recipes, categories, difficulties, commonTags } from '@/data/recipes';

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Filter recipes based on search and filters
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
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

      // Category filter
      const categoryMatch = selectedCategory === 'All' || recipe.category === selectedCategory;

      // Difficulty filter
      const difficultyMatch = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;

      // Tags filter
      const tagsMatch = selectedTags.length === 0 || 
        selectedTags.some(tag => recipe.tags.includes(tag));

      return searchMatch && categoryMatch && difficultyMatch && tagsMatch;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedTags]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedDifficulty('All');
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Page Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Recipes</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our complete collection of delicious recipes. Use the filters below to find exactly what you&apos;re looking for.
          </p>
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
                    placeholder="Search recipes..."
                  />
                </div>

                {/* Filter Buttons */}
                <div className="mb-6">
                  <FilterButtons
                    categories={['All', ...categories]}
                    difficulties={['All', ...difficulties]}
                    selectedCategory={selectedCategory}
                    selectedDifficulty={selectedDifficulty}
                    onCategoryChange={setSelectedCategory}
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
                {(selectedCategory !== 'All' || selectedDifficulty !== 'All' || selectedTags.length > 0) && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-medium text-orange-800 mb-2">Active Filters:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategory !== 'All' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800 border border-orange-200">
                          {selectedCategory}
                          <button
                            onClick={() => setSelectedCategory('All')}
                            className="ml-2 hover:text-orange-600 transition-colors duration-200"
                          >
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </span>
                      )}
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
                      {selectedTags.map((tag) => (
                        <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 border border-blue-200">
                          {tag}
                          <button
                            onClick={() => setSelectedTags(selectedTags.filter(t => t !== tag))}
                            className="ml-2 hover:text-blue-600 transition-colors duration-200"
                          >
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{filteredRecipes.length} Recipes Found</h3>
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
