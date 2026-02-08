import { useState } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/HeroSection';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailsDialog } from './components/ProductDetailsDialog';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import type { Product } from './data/products';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  const handleExploreClick = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <HeroSection onExploreClick={handleExploreClick} />
        
        <section id="products" className="py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Delicious Collection
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our handpicked selection of cakes and cookies, each crafted
                with passion and premium ingredients
              </p>
            </div>
            <ProductGrid onProductSelect={handleProductSelect} />
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />

      <ProductDetailsDialog
        product={selectedProduct}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}

export default App;
