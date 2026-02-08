import { ProductCard } from './ProductCard';
import { products } from '@/data/products';
import type { Product } from '@/data/products';

interface ProductGridProps {
  onProductSelect: (product: Product) => void;
}

export function ProductGrid({ onProductSelect }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onProductSelect}
        />
      ))}
    </div>
  );
}
