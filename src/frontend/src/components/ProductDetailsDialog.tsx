import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import type { Product } from '@/data/products';

interface ProductDetailsDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductDetailsDialog({
  product,
  open,
  onOpenChange,
}: ProductDetailsDialogProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="aspect-video md:aspect-[4/3] overflow-hidden rounded-lg bg-muted/30">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <DialogDescription className="text-base md:text-lg leading-relaxed text-muted-foreground">
            {product.description}
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}
