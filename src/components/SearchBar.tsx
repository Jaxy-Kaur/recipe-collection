'use client';

import { useState, useEffect } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ 
  value, 
  onChange, 
  placeholder = "Search recipes by title, ingredients, or tags...",
  className = "" 
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // Load search history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recipe-search-history');
    if (saved) {
      setSearchHistory(JSON.parse(saved));
    }
  }, []);

  const handleSearch = (searchValue: string) => {
    onChange(searchValue);
    
    // Add to search history if not empty and not already in history
    if (searchValue.trim() && !searchHistory.includes(searchValue.trim())) {
      const newHistory = [searchValue.trim(), ...searchHistory.slice(0, 4)]; // Keep last 5 searches
      setSearchHistory(newHistory);
      localStorage.setItem('recipe-search-history', JSON.stringify(newHistory));
    }
  };

  const clearSearch = () => {
    onChange('');
    setIsFocused(false);
  };

  const selectFromHistory = (historyItem: string) => {
    onChange(historyItem);
    setIsFocused(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search Input */}
      <div className={`relative transition-all duration-300 ${isFocused ? 'search-glow' : ''}`}>
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className={`h-5 w-5 transition-colors duration-300 ${isFocused ? 'text-orange-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <input
          type="text"
          value={value}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
        />
        
        {value && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center hover:text-orange-500 transition-colors duration-200"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search History Dropdown */}
      {isFocused && searchHistory.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-10 slide-up">
          <div className="p-2">
            <div className="text-xs font-medium text-gray-500 px-3 py-2">Recent Searches</div>
            {searchHistory.map((item, index) => (
              <button
                key={index}
                onClick={() => selectFromHistory(item)}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 flex items-center space-x-2"
              >
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="truncate">{item}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Tips */}
      {!value && !isFocused && (
        <div className="mt-3 text-center">
          <div className="text-sm text-gray-500">
            💡 Try searching for: <span className="font-medium text-orange-600">pancakes</span>, <span className="font-medium text-orange-600">vegetarian</span>, or <span className="font-medium text-orange-600">quick</span>
          </div>
        </div>
      )}
    </div>
  );
}
