'use client';
import { cartContext } from '@/app/CartProvider';
import { Product } from '@/app/types';
import { Button, Input, Radio, RadioGroup } from '@headlessui/react';
import { useContext, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ProductListFilters from './ProductListFilters';

interface ProductListProps {
  products: Product[];
}
const FILTER_ENUM = {
  ALL: 'All',
  HIGH_TO_LOW: 'Price: high to low',
  LOW_TO_HIGH: 'Price: low to high',
  A_TO_Z: 'name: A to Z',
  Z_TO_A: 'name: Z to A',
};
const filterBy = [
  { name: 'All', id: FILTER_ENUM.ALL },
  { name: 'Price: high to low', id: FILTER_ENUM.HIGH_TO_LOW },
  { name: 'Price: low to high', id: FILTER_ENUM.LOW_TO_HIGH },
  { name: 'name: A to Z', id: FILTER_ENUM.A_TO_Z },
  { name: 'name: Z to A', id: FILTER_ENUM.Z_TO_A },
];
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const cartSelector = useContext(cartContext);
  const [data, setData] = useState<Product[]>(products);
  const [search, setSearch] = useState<string>('');
  const [selected, setSelected] = useState<{ name: string; id: string }>(
    filterBy[0],
  );
  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue = e.target.value;
    setSearch(searchValue);
    setData(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  };

  const onFilterChange = (value: { name: string; id: string }) => {
    setSelected(value);
    setData((prevData) => {
      switch (value.id) {
        case FILTER_ENUM.ALL:
          return prevData;
        case FILTER_ENUM.HIGH_TO_LOW:
          return prevData.sort((a, b) => b.price - a.price);
        case FILTER_ENUM.LOW_TO_HIGH:
          return prevData.sort((a, b) => a.price - b.price);
        case FILTER_ENUM.A_TO_Z:
          return prevData.sort((a, b) => a.name.localeCompare(b.name));
        case FILTER_ENUM.Z_TO_A:
          return prevData.sort((a, b) => b.name.localeCompare(a.name));
        default:
          return prevData;
      }
    });
  };
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Products</h1>
      </div>
      <ProductListFilters
        search={search}
        setSearch={setSearch}
        selected={selected}
        setSelected={setSelected}
        onChangeHanlder={onChangeHanlder}
        onFilterChange={onFilterChange}
        filterBy={filterBy}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
