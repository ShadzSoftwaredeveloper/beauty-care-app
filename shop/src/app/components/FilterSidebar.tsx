import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';

interface FilterSidebarProps {
  category: string;
  productCount?: number;
  onClearFilters?: () => void;
  selectedFilters?: {
    [key: string]: string[];
  };
  onFilterChange?: (filterType: string, value: string, checked: boolean) => void;
  priceRange?: number[];
  onPriceRangeChange?: (value: number[]) => void;
}

export function FilterSidebar({ 
  category, 
  productCount, 
  onClearFilters,
  selectedFilters = {},
  onFilterChange,
  priceRange = [250],
  onPriceRangeChange
}: FilterSidebarProps) {
  // Define filters based on category
  const getFiltersForCategory = () => {
    switch (category) {
      case 'perfumes':
      {productCount !== undefined && (
        <div className="mb-6">
          <p className="text-sm text-gray-600">{productCount} products found</p>
        </div>
      )}

        return {
          filters: [
            {
              title: 'Scent Notes',
              key: 'scentNotes',
              options: ['Floral', 'Woody', 'Fresh', 'Citrus', 'Oriental', 'Sweet'],
            },
            {
              title: 'Bottle Size',
              key: 'bottleSize',
              options: ['30ml', '50ml', '100ml'],
            },
          ],
        };
      case 'bags':
        return {
          filters: [
            {
              title: 'Material',
              key: 'material',
              options: ['Leather', 'Canvas', 'Synthetic', 'Suede'],
            },
            {
              title: 'Style',
              key: 'style',
              options: ['Tote', 'Crossbody', 'Shoulder', 'Backpack', 'Clutch'],
            },
          ],
        };
      case 'shoes':
        return {
          filters: [
            {
              title: 'Type',
              key: 'type',
              options: ['Sneakers', 'Heels', 'Boots', 'Flats', 'Sandals'],
            },
            {
              title: 'Size',
              key: 'size',
              options: ['36', '37', '38', '39', '40', '41'],
            },
          ],
        };
      case 'earrings':
        return {
          filters: [
            {
              title: 'Style',
              key: 'style',
              options: ['Studs', 'Hoops', 'Drop', 'Dangle', 'Chandelier'],
            },
            {
              title: 'Material',
              key: 'material',
              options: ['Gold', 'Silver', 'Rose Gold', 'Pearl'],
            },
          ],
        };
      case 'keyholders':
        return {
          filters: [
            {
              title: 'Material',
              key: 'material',
              options: ['Leather', 'Metal', 'Fabric', 'Plastic'],
            },
            {
              title: 'Style',
              key: 'style',
              options: ['Classic', 'Modern', 'Luxury', 'Minimal'],
            },
          ],
        };
      default:
        return { filters: [] };
    }
  };

  const { filters } = getFiltersForCategory();

  return (
    <aside className="w-full lg:w-64 lg:pr-8">
      {/* Filters Header */}
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h3 className="text-base md:text-lg">Filters</h3>
        {onClearFilters && (
          <button 
            onClick={onClearFilters}
            className="text-xs md:text-sm text-[#FF6B5B] hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Product Count */}
      {productCount !== undefined && (
        <div className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
          {productCount} products
        </div>
      )}

      {/* Dynamic Filter Sections */}
      {filters.map((filterSection, sectionIndex) => (
        <div key={sectionIndex} className="mb-6 md:mb-8">
          <h3 className="text-base md:text-lg mb-3 md:mb-4">{filterSection.title}</h3>
          <div className="space-y-2 md:space-y-3">
            {filterSection.options.map((option) => {
              const isChecked = selectedFilters[filterSection.key]?.includes(option) || false;
              return (
                <div key={option} className="flex items-center gap-2">
                  <Checkbox 
                    id={`${filterSection.key}-${option}`}
                    checked={isChecked}
                    onCheckedChange={(checked) => {
                      if (onFilterChange) {
                        onFilterChange(filterSection.key, option, checked === true);
                      }
                    }}
                  />
                  <label htmlFor={`${filterSection.key}-${option}`} className="text-xs md:text-sm cursor-pointer">
                    {option}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Price Range - Always shown */}
      <h3 className="text-base md:text-lg mb-3 md:mb-4">Price Range</h3>
      <div className="space-y-3 md:space-y-4">
        <Slider 
          value={priceRange} 
          onValueChange={onPriceRangeChange}
          max={500} 
          step={10} 
        />
        <div className="flex justify-between text-xs md:text-sm text-gray-600">
          <span>$0</span>
          <span>${priceRange[0]}</span>
        </div>
      </div>

      {onClearFilters && (
        <button
          onClick={onClearFilters}
          className="mt-4 md:mt-6 w-full px-3 md:px-4 py-2 text-xs md:text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </aside>
  );
}