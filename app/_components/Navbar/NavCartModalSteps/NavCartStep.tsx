import { cartContext } from '@/app/CartProvider';
import { useContext } from 'react';
import { NavButton } from '../NavButton';

export interface NavCartStep {
  onNext: () => void;
}

export const NavCartStep: React.FC<NavCartStep> = ({ onNext }) => {
  const cartSelector = useContext(cartContext);
  return (
    <div>
      {cartSelector?.cart.length > 0 ? (
        <>
          <div className="flex flex-col gap-2 py-4">
            {cartSelector?.cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
              >
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-sm/6 font-semibold text-white">
                      {item.name}
                    </span>
                  </div>
                  <div className="text-sm/6 text-white/50">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          <NavButton onClick={() => onNext()}>Next</NavButton>
        </>
      ) : (
        <div>No items in cart</div>
      )}
    </div>
  );
};
