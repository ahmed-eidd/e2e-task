'use client';

import { useState } from 'react';
import { cartContext } from '@/app/CartProvider';
import { Button } from '@headlessui/react';
import { useContext } from 'react';
import NavCartModal from './NavCartModal';

export default function Navbar() {
  const cart = useContext(cartContext);
  const [isOpen, setIsOpen] = useState(false);
  console.log(cart);
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <Button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        cart: {cart.cart.length}
      </Button>
      <NavCartModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
