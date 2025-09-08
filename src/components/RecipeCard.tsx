'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

export default function RecipeCard({ recipe, className = '' }: RecipeCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    
    // Trigger animation when adding to favorites
    if (!isFavorite) {
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 1500);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: `${window.location.origin}/recipe/${recipe.id}`,
      }).catch((error) => {
        console.log('Error sharing:', error);
        // Fallback to clipboard
        navigator.clipboard.writeText(`${window.location.origin}/recipe/${recipe.id}`);
        alert('Recipe link copied to clipboard!');
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/recipe/${recipe.id}`).then(() => {
        alert('Recipe link copied to clipboard!');
      }).catch((error) => {
        console.log('Error copying to clipboard:', error);
        alert('Unable to copy link. Please copy manually from the address bar.');
      });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'difficulty-easy';
      case 'Medium': return 'difficulty-medium';
      case 'Hard': return 'difficulty-hard';
      default: return 'difficulty-easy';
    }
  };

  const getRatingStars = (rating: number = 4.5) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<svg key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>);
    }
    
    if (hasHalfStar) {
      stars.push(<svg key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<svg key={`empty-${i}`} className="h-4 w-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>);
    }
    
    return stars;
  };

  return (
    <Link href={`/recipe/${recipe.id}`} className={`block group ${className}`}>
      <article 
        className="card card-hover overflow-hidden h-full relative"
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
      >
        {/* Recipe Image */}
        <div className="relative overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={400}
              height={225}
              className="recipe-card-image w-full h-48 object-cover"
            />
          </div>
          

          {/* Difficulty Badge */}
          <div className="absolute top-3 left-3">
            <span className={`difficulty-badge ${getDifficultyColor(recipe.difficulty)}`}>
              {recipe.difficulty}
            </span>
          </div>

          {/* Special Badges */}
          <div className="absolute top-3 right-3 flex flex-col space-y-1">
            {recipe.isNew && (
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                New
              </span>
            )}
            {recipe.isPopular && (
              <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                Popular
              </span>
            )}
            {recipe.isChefChoice && (
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg flex items-center">
                <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Chef's Choice
              </span>
            )}
          </div>

          {/* Category Badge */}
          <div className="absolute bottom-3 left-3">
            <span className="category-chip text-xs">
              {recipe.category}
            </span>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="p-6 space-y-4">
          {/* Title and Rating */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
              {recipe.title}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {getRatingStars()}
              </div>
              <span className="text-sm text-gray-600">4.5</span>
              <span className="text-sm text-gray-400">(24 reviews)</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 line-clamp-2 leading-relaxed">
            {recipe.description}
          </p>

          {/* Recipe Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{recipe.cookTime} min</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{recipe.servings} servings</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {recipe.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag-pill text-xs">
                {tag}
              </span>
            ))}
            {recipe.tags.length > 3 && (
              <span className="text-xs text-gray-400 px-2 py-1">
                +{recipe.tags.length - 3} more
              </span>
            )}
          </div>

          {/* View Recipe Button */}
          <div className="pt-2">
            <div className="flex items-center justify-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors duration-300">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              View Recipe
            </div>
          </div>
        </div>

        {/* Hover Preview Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-white via-orange-50/80 to-pink-50/80 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 overflow-visible border border-orange-100 shadow-2xl ${
            showPreview ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="h-full overflow-y-auto">
            {/* Cute Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mb-3 shadow-lg">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Quick Preview
              </h4>
              <p className="text-sm text-gray-500 mt-1">✨ Take a peek inside ✨</p>
            </div>
            
            <div className="space-y-6">
              {/* Cute Ingredients Section */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-orange-100 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🥘</span>
                    </div>
                    <h5 className="font-bold text-gray-800 text-lg">Ingredients</h5>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* Share Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleShare(e);
                      }}
                      className="p-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-500 hover:from-blue-200 hover:to-purple-200 hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                    
                    {/* Heart Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(e);
                      }}
                      className={`relative p-2 rounded-full transition-all duration-300 shadow-md hover:scale-110 ${
                        isFavorite 
                          ? 'bg-gradient-to-r from-red-100 to-pink-100 text-red-500' 
                          : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-400 hover:from-red-100 hover:to-pink-100 hover:text-red-500'
                      }`}
                    >
                    <svg className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''} ${showAnimation ? 'heart-beat' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    
                    {/* Firework Explosion Animation */}
                    {showAnimation && (
                      <div className="absolute inset-0 pointer-events-none overflow-visible">
                        {/* Stars exploding in all directions */}
                        {[...Array(12)].map((_, i) => {
                          const angle = (i * 30) * (Math.PI / 180); // 30 degrees apart
                          const distance = 60 + (i % 3) * 20; // Varying distances
                          const x = Math.cos(angle) * distance;
                          const y = Math.sin(angle) * distance;
                          
                          return (
                            <div
                              key={`star-${i}`}
                              className="absolute text-yellow-400 firework-explosion"
                              style={{
                                '--explosion-x': `${x}px`,
                                '--explosion-y': `${y}px`,
                                animationDelay: `${i * 0.05}s`,
                                left: '50%',
                                top: '50%',
                                fontSize: '14px',
                                transform: 'translate(-50%, -50%)',
                              } as React.CSSProperties}
                            >
                              ⭐
                            </div>
                          );
                        })}
                        
                        {/* Sparkles with random directions */}
                        {[...Array(8)].map((_, i) => {
                          const angle = (i * 45 + 15) * (Math.PI / 180); // Offset by 15 degrees
                          const distance = 40 + (i % 2) * 30;
                          const x = Math.cos(angle) * distance;
                          const y = Math.sin(angle) * distance;
                          
                          return (
                            <div
                              key={`sparkle-${i}`}
                              className="absolute text-pink-400 sparkle-explosion"
                              style={{
                                '--sparkle-x': `${x}px`,
                                '--sparkle-y': `${y}px`,
                                animationDelay: `${i * 0.08}s`,
                                left: '50%',
                                top: '50%',
                                fontSize: '12px',
                                transform: 'translate(-50%, -50%)',
                              } as React.CSSProperties}
                            >
                              ✨
                            </div>
                          );
                        })}
                        
                        {/* Heart particles */}
                        {[...Array(6)].map((_, i) => {
                          const angle = (i * 60 + 30) * (Math.PI / 180);
                          const distance = 50 + (i % 2) * 25;
                          const x = Math.cos(angle) * distance;
                          const y = Math.sin(angle) * distance;
                          
                          return (
                            <div
                              key={`heart-${i}`}
                              className="absolute text-red-400 firework-explosion"
                              style={{
                                '--explosion-x': `${x}px`,
                                '--explosion-y': `${y}px`,
                                animationDelay: `${i * 0.1}s`,
                                left: '50%',
                                top: '50%',
                                fontSize: '10px',
                                transform: 'translate(-50%, -50%)',
                              } as React.CSSProperties}
                            >
                              💖
                            </div>
                          );
                        })}
                        
                        {/* Small dots for extra sparkle */}
                        {[...Array(16)].map((_, i) => {
                          const angle = (i * 22.5) * (Math.PI / 180);
                          const distance = 30 + (i % 4) * 15;
                          const x = Math.cos(angle) * distance;
                          const y = Math.sin(angle) * distance;
                          
                          return (
                            <div
                              key={`dot-${i}`}
                              className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full firework-explosion"
                              style={{
                                '--explosion-x': `${x}px`,
                                '--explosion-y': `${y}px`,
                                animationDelay: `${i * 0.03}s`,
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                              } as React.CSSProperties}
                            />
                          );
                        })}
                      </div>
                    )}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  {recipe.ingredients.slice(0, 4).map((ingredient, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 bg-white/50 rounded-lg hover:bg-white/80 transition-all duration-200">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{ingredient}</span>
                    </div>
                  ))}
                  {recipe.ingredients.length > 4 && (
                    <div className="text-center p-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg border border-orange-200">
                      <span className="text-sm text-orange-600 font-semibold">
                        +{recipe.ingredients.length - 4} more ingredients 🥄
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Cute Instructions Section */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-pink-100 shadow-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">👨‍🍳</span>
                  </div>
                  <h5 className="font-bold text-gray-800 text-lg">First Steps</h5>
                </div>
                <div className="bg-white/50 rounded-lg p-3 border border-pink-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {recipe.instructions[0]}
                  </p>
                </div>
                {recipe.instructions.length > 1 && (
                  <div className="text-center mt-3 p-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg border border-pink-200">
                    <span className="text-sm text-pink-600 font-semibold">
                      +{recipe.instructions.length - 1} more steps 📝
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
    );
}
