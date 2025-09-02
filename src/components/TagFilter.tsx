'use client';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagChange: (tag: string) => void;
}

export default function TagFilter({ tags, selectedTags, onTagChange }: TagFilterProps) {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-700 mb-2">Dietary & Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagChange(tag)}
            className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
              selectedTags.includes(tag)
                ? 'bg-secondary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
