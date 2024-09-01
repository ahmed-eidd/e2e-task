import { cartContext } from '@/app/CartProvider';
import { Product } from '@/app/types';
import { Button } from '@headlessui/react';
import { useContext } from 'react';

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cartSelector = useContext(cartContext);
  return (
    <div
      className="rounded-lg shadow-md border-2 border-gray-300 border-opacity-50"
      key={product.name}
    >
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-sm min-h-10">{product.description}</p>
        <div className="flex justify-between">
          <p className="text-sm">${product.price}</p>
          <Button
            className="inline-flex items-center gap-2 rounded-md bg-green-900 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
            onClick={() => cartSelector.addToCart(product)}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
