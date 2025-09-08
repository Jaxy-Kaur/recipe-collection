'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import FilterButtons from '@/components/FilterButtons';
import TagFilter from '@/components/TagFilter';
import RecipeGrid from '@/components/RecipeGrid';
import RecipeCard from '@/components/RecipeCard';
import { recipes, categories, difficulties, commonTags } from '@/data/recipes';
import { Recipe } from '@/types/recipe';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [randomRecipe, setRandomRecipe] = useState<Recipe | null>(null);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Main rotation options for the hero section
  const mainRotationOptions = [
    "Adventure Awaits",
    "Discover Your Next Favorite Dish",
    "From Kitchen to Table with Love",
    "Where Great Meals Begin",
    "Turn Every Meal into a Masterpiece",
    "Your Personal Recipe Treasure Trove"
  ];

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

  // Set random recipe on client side only
  useEffect(() => {
    const getRandomRecipe = (): Recipe => {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      return recipes[randomIndex];
    };
    setRandomRecipe(getRandomRecipe());
  }, []);

  // Rotate main options every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => 
        (prevIndex + 1) % mainRotationOptions.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [mainRotationOptions.length]);

  const featuredRecipes = recipes.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Discover Amazing Recipes</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Culinary
              <span 
                key={currentQuoteIndex}
                className="block gradient-text animate-fade-in"
              >
                {mainRotationOptions[currentQuoteIndex]}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
              Explore our curated collection of delicious recipes from around the world. 
              From quick breakfasts to elaborate dinners, find your next favorite dish.
            </p>
            
            {/* Main Options Progress Indicators */}
            <div className="flex justify-center space-x-2 mb-8">
              {mainRotationOptions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentQuoteIndex 
                      ? 'bg-orange-500 scale-125' 
                      : 'bg-orange-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Hero Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="What would you like to cook today?"
              className="w-full"
            />
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-3 mx-auto">
                <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900">{recipes.length}</div>
              <div className="text-sm text-gray-600">Recipes</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl mb-3 mx-auto">
                <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-3 mx-auto">
                <svg className="h-6 w-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900">4.8</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Recipes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked recipes that are perfect for any occasion. 
              These crowd-pleasers are sure to become family favorites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredRecipes.map((recipe, index) => (
              <div
                key={recipe.id}
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn-primary">
              View All Recipes
              <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Random Recipe Suggestion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Feeling Adventurous?</h2>
            <p className="text-lg text-gray-600">
              Try this randomly selected recipe and discover something new!
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              {randomRecipe ? (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{randomRecipe.title}</h3>
                  <p className="text-gray-600 mb-6">{randomRecipe.description}</p>
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{randomRecipe.cookTime} min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>{randomRecipe.servings} servings</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span>4.5</span>
                    </div>
                  </div>
                  <button className="btn-primary">
                    Cook This Recipe
                    <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="loading-spinner w-8 h-8 mx-auto"></div>
                  <p className="text-gray-600">Loading random recipe...</p>
                </div>
              )}
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
