'use client';

import { useState, useEffect } from 'react';
import { recipes } from '@/data/recipes';
import { Recipe } from '@/types/recipe';
import RecipeCard from '@/components/RecipeCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FavoritesPage() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get favorites from localStorage
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    if (savedFavorites) {
      const favoriteIds = JSON.parse(savedFavorites);
      const favorites = recipes.filter(recipe => favoriteIds.includes(recipe.id));
      setFavoriteRecipes(favorites);
    }
    setLoading(false);
  }, []);

  // Listen for changes in localStorage (when favorites are added/removed from other pages)
  useEffect(() => {
    const handleStorageChange = () => {
      const savedFavorites = localStorage.getItem('favoriteRecipes');
      if (savedFavorites) {
        const favoriteIds = JSON.parse(savedFavorites);
        const favorites = recipes.filter(recipe => favoriteIds.includes(recipe.id));
        setFavoriteRecipes(favorites);
      } else {
        setFavoriteRecipes([]);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events (for same-tab updates)
    window.addEventListener('favoritesUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('favoritesUpdated', handleStorageChange);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your favorites...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mb-6 shadow-lg">
            <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your <span className="gradient-text">Favorite Recipes</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            {favoriteRecipes.length > 0 
              ? `You have ${favoriteRecipes.length} favorite recipe${favoriteRecipes.length === 1 ? '' : 's'} saved. Enjoy cooking these delicious dishes!`
              : "No favorites yet! Start exploring recipes and add them to your favorites by clicking the heart icon."
            }
          </p>
        </div>
      </section>

      {/* Favorites Grid */}
      {favoriteRecipes.length > 0 ? (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {favoriteRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 border border-orange-100 shadow-xl">
              <div className="text-6xl mb-6">💔</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">No Favorites Yet</h2>
              <p className="text-lg text-gray-600 mb-8">
                Start exploring our delicious recipes and add them to your favorites by clicking the heart icon!
              </p>
              <a
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Explore Recipes
              </a>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

