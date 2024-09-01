import { Field, Input, Label } from '@headlessui/react';
import { NavButton } from '../NavButton';

export interface NavCheckoutStep {
  onNext: () => void;
}

export const NavCheckoutStep: React.FC<NavCheckoutStep> = ({ onNext }) => {
  return (
    <div>
      <div className="w-full max-w-md px-4">
        <Field>
          <Label className="text-sm/6 font-medium text-white">Name</Label>
          <Input
            className={
              'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            }
          />
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Email</Label>
          <Input
            className={
              'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            }
          />
        </Field>

        <Field>
          <Label className="text-sm/6 font-medium text-white">Phone</Label>
          <Input
            className={
              'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            }
          />
        </Field>
        <NavButton onClick={() => onNext()}>Next</NavButton>
      </div>
    </div>
  );
};
