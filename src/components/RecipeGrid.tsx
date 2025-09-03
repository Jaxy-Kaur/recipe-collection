'use client';

import { Recipe } from '@/types/recipe';
import RecipeCard from './RecipeCard';

interface RecipeGridProps {
  recipes: Recipe[];
  isLoading?: boolean;
  searchQuery?: string;
  className?: string;
}

export default function RecipeGrid({ 
  recipes, 
  isLoading = false, 
  searchQuery = '',
  className = '' 
}: RecipeGridProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-4">
        <div className="loading-spinner w-12 h-12"></div>
        <p className="text-gray-600 text-lg">Finding delicious recipes...</p>
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
        {searchQuery ? (
          <>
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">No recipes found</h3>
              <p className="text-gray-600 max-w-md">
                We couldn't find any recipes matching "{searchQuery}". Try adjusting your search terms or filters.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm text-gray-500">Suggestions:</span>
              <span className="tag-pill text-xs">pancakes</span>
              <span className="tag-pill text-xs">vegetarian</span>
              <span className="tag-pill text-xs">quick</span>
              <span className="tag-pill text-xs">healthy</span>
            </div>
          </>
        ) : (
          <>
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">No recipes available</h3>
              <p className="text-gray-600 max-w-md">
                It looks like there are no recipes to display right now. Check back later for delicious new recipes!
              </p>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="text-lg font-semibold text-gray-900">
            {recipes.length} {recipes.length === 1 ? 'Recipe' : 'Recipes'} Found
          </span>
        </div>
        
        {searchQuery && (
          <div className="text-sm text-gray-600">
            Results for "<span className="font-medium text-orange-600">{searchQuery}</span>"
          </div>
        )}
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe, index) => (
          <div
            key={recipe.id}
            className="fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>

      {/* Load More Button (if needed) */}
      {recipes.length >= 12 && (
        <div className="text-center pt-8">
          <button className="btn-primary">
            Load More Recipes
          </button>
        </div>
      )}

      {/* Recipe Count Footer */}
      <div className="text-center pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Showing {recipes.length} of {recipes.length} recipes
        </p>
        <p className="text-xs text-gray-400 mt-1">
          All recipes are carefully curated and tested for delicious results
        </p>
      </div>
    </div>
  );
}
