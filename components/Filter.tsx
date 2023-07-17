import React from 'react';

interface FilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ categories, selectedCategory, onCategoryChange }) => {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    onCategoryChange(category);
  };

  return (
    <div>
      <label htmlFor="category">Category:</label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

