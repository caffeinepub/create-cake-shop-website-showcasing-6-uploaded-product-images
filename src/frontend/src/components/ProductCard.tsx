import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card border-border/50">
      <div className="aspect-square overflow-hidden bg-muted/30">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <Button
          onClick={() => onSelect(product)}
          className="w-full"
          variant="default"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
