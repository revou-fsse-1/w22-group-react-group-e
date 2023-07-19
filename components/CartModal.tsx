import Link from 'next/link';
import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';

export default function CartModal() {
  return (
    <div>
      <Link href={''}>
        <HiShoppingCart size={30} />
      </Link>
    </div>
  );
}
