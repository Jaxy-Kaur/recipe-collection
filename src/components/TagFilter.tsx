'use client';

import { useState } from 'react';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagChange: (tags: string[]) => void;
}

export default function TagFilter({ tags, selectedTags, onTagChange }: TagFilterProps) {
  const [showTags, setShowTags] = useState(false);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagChange([...selectedTags, tag]);
    }
  };

  const clearAllTags = () => {
    onTagChange([]);
  };

  const selectAllTags = () => {
    onTagChange([...tags]);
  };

  const hasSelectedTags = selectedTags.length > 0;

  return (
    <div className="space-y-4">
      {/* Tag Filter Toggle */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowTags(!showTags)}
          className="flex items-center space-x-2 btn-outline"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <span>Tags ({selectedTags.length})</span>
        </button>

        {hasSelectedTags && (
          <button
            onClick={clearAllTags}
            className="text-sm text-gray-600 hover:text-orange-600 transition-colors duration-200"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Tags Panel */}
      {showTags && (
        <div className="space-y-4 p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 slide-up">
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={selectAllTags}
              className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors duration-200"
            >
              Select All
            </button>
            <button
              onClick={clearAllTags}
              className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors duration-200"
            >
              Clear All
            </button>
          </div>

          {/* Tags Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`p-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedTags.includes(tag)
                    ? 'tag-pill shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Selected Tags Display */}
          {hasSelectedTags && (
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Selected Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800 border border-orange-200"
                  >
                    {tag}
                    <button
                      onClick={() => toggleTag(tag)}
                      className="ml-2 hover:text-orange-600 transition-colors duration-200"
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

          {/* Tag Categories */}
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Tag Categories:</h4>
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
              <div>
                <div className="font-medium text-gray-700 mb-1">Dietary</div>
                <div>vegetarian, vegan, gluten-free</div>
              </div>
              <div>
                <div className="font-medium text-gray-700 mb-1">Meal Type</div>
                <div>quick, healthy, family-friendly</div>
              </div>
              <div>
                <div className="font-medium text-gray-700 mb-1">Cuisine</div>
                <div>mexican, mediterranean, classic</div>
              </div>
              <div>
                <div className="font-medium text-gray-700 mb-1">Nutrition</div>
                <div>high-protein, comfort-food, portable</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
