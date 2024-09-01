import { cartContext } from '@/app/CartProvider';
import { Dialog, DialogPanel } from '@headlessui/react';
import { useContext, useState } from 'react';
import { NavCartStep } from './NavCartModalSteps/NavCartStep';
import { NavCheckoutStep } from './NavCartModalSteps/NavCheckoutStep';
import { NavSuccessStep } from './NavCartModalSteps/NavSuccessStep';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const STEPS = {
  cart: 0,
  checkout: 1,
  success: 2,
};
const NavCartModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [step, setStep] = useState(STEPS.cart);
  const cartSelector = useContext(cartContext);
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            {STEPS.cart === step && (
              <NavCartStep onNext={() => setStep(STEPS.checkout)} />
            )}
            {STEPS.checkout === step && (
              <NavCheckoutStep onNext={() => setStep(STEPS.success)} />
            )}

            {STEPS.success === step && (
              <NavSuccessStep
                onNext={() => {
                  setStep(STEPS.cart);
                  setIsOpen(false);
                    cartSelector.clearCart()
                }}
              />
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default NavCartModal;
