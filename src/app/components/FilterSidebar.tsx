import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';

interface FilterSidebarProps {
  category: string;
}

export function FilterSidebar({ category }: FilterSidebarProps) {
  return (
    <aside className="w-64 pr-8">
      <h3 className="text-lg mb-4">Scent Notes</h3>
      <div className="space-y-3 mb-8">
        {['Floral', 'Woody', 'Fresh', 'Citrus', 'Oriental', 'Sweet'].map((note) => (
          <div key={note} className="flex items-center gap-2">
            <Checkbox id={note} />
            <label htmlFor={note} className="text-sm cursor-pointer">
              {note}
            </label>
          </div>
        ))}
      </div>

      <h3 className="text-lg mb-4">Bottle Size</h3>
      <div className="space-y-3 mb-8">
        {['30ml', '50ml', '100ml'].map((size) => (
          <div key={size} className="flex items-center gap-2">
            <Checkbox id={size} />
            <label htmlFor={size} className="text-sm cursor-pointer">
              {size}
            </label>
          </div>
        ))}
      </div>

      <h3 className="text-lg mb-4">Price Range</h3>
      <div className="space-y-4">
        <Slider defaultValue={[250]} max={500} step={10} />
        <div className="flex justify-between text-sm text-gray-600">
          <span>$0</span>
          <span>$500</span>
        </div>
      </div>
    </aside>
  );
}
