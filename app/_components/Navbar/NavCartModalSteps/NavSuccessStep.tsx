import { DialogTitle } from '@headlessui/react';
import { NavButton } from '../NavButton';

export interface NavSuccessStep {
  onNext: () => void;
}

export const NavSuccessStep: React.FC<NavSuccessStep> = ({ onNext }) => {
  return (
    <>
      <DialogTitle as="h3" className="text-base/7 font-medium text-white">
        Payment successful
      </DialogTitle>
      <p className="mt-2 text-sm/6 text-white/50">
        Your payment has been successfully submitted. We�ve sent you an email
        with all of the details of your order.
      </p>
      <div className="mt-4">
        <NavButton onClick={() => onNext()}>Got it, thanks!</NavButton>
      </div>
    </>
  );
};
