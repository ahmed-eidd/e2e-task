import Input from '@/app/_components/Input/Input';
import { Radio, RadioGroup } from '@headlessui/react';

interface ProductListFiltersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selected: { name: string; id: string };
  setSelected: React.Dispatch<
    React.SetStateAction<{ name: string; id: string }>
  >;
  onChangeHanlder: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterChange: (value: { name: string; id: string }) => void;
  filterBy: { name: string; id: string }[];
}
const ProductListFilters: React.FC<ProductListFiltersProps> = ({
  search,
  selected,
  onChangeHanlder,
  onFilterChange,
  filterBy,
}) => {
  return (
    <div>
      <Input
        type="text"
        className="w-full rounded-md border-2 border-gray-300 p-2 text-sm text-black"
        placeholder="Search"
        value={search}
        onChange={onChangeHanlder}
      />
      <div>
        <RadioGroup
          value={selected}
          onChange={onFilterChange}
          aria-label="Server size"
          className="flex justify-start items-center space-x-2"
        >
          {filterBy.map((filter) => (
            <Radio
              key={filter.name}
              value={filter}
              className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold text-white">{filter.name}</p>
                </div>
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default ProductListFilters;
