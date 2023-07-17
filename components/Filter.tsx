import React from 'react';

interface FilterProps {
  categories: string[];
  selectedCategory: string[];
  onCategoryChange: (category: string) => void;
  onRatingChange: (rating: number | null) => void;
  selectedRating: number | null;
}

const Filter: React.FC<FilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onRatingChange,
  selectedRating,
}) => {
  const handleCategoryChange = (category: string) => {
    onCategoryChange(category);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rating = event.target.value === '' ? null : Number(event.target.value);
    onRatingChange(rating);
  };

  const isAllChecked = selectedCategory.length === 0;

  return (
    <div className="flex flex-col">
      <h2 className="mb-4 text-2xl font-bold">Filter</h2>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Sort by Rating:</h3>
        <select
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={selectedRating !== null ? selectedRating.toString() : ''}
          onChange={handleRatingChange}
        >
          <option value="">All</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Sort by Category:</h3>
        <label key="all" className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={isAllChecked}
            onChange={() => handleCategoryChange('')}
          />
          <span className="text-lg">All</span>
        </label>
        {categories.map((category) => (
          <label key={category} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={selectedCategory.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <span className="text-lg">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;


