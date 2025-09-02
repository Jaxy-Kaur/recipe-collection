'use client';

import { RecipeCategory, RecipeDifficulty } from '@/types/recipe';

interface FilterButtonsProps {
  categories: RecipeCategory[];
  difficulties: RecipeDifficulty[];
  selectedCategory: RecipeCategory | '';
  selectedDifficulty: RecipeDifficulty | '';
  onCategoryChange: (category: RecipeCategory | '') => void;
  onDifficultyChange: (difficulty: RecipeDifficulty | '') => void;
}

export default function FilterButtons({
  categories,
  difficulties,
  selectedCategory,
  selectedDifficulty,
  onCategoryChange,
  onDifficultyChange,
}: FilterButtonsProps) {
  return (
    <div className="space-y-4">
      {/* Category Filters */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange('')}
            className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
              selectedCategory === ''
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty Filters */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Difficulty</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onDifficultyChange('')}
            className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
              selectedDifficulty === ''
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => onDifficultyChange(difficulty)}
              className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
                selectedDifficulty === difficulty
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
