'use client';
import { Input as HeadlessInput } from '@headlessui/react';
import clsx from 'clsx';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="w-full max-w-md px-4">
      <HeadlessInput
        {...props}
        className={clsx(
          'mt-3 block w-full rounded-lg border-none bg-white py-1.5 px-3 text-sm/6 text-black',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
        )}
      />
    </div>
  );
};
export default Input;
