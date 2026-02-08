import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative py-20 md:py-32 bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Freshly Baked
            <span className="block text-primary mt-2">Every Day</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Indulge in our handcrafted cakes and cookies, made with love and the
            finest ingredients. Each bite is a celebration of flavor and tradition.
          </p>
          <Button
            onClick={onExploreClick}
            size="lg"
            className="text-base md:text-lg px-8 py-6 rounded-full"
          >
            Explore Our Collection
          </Button>
        </div>
      </div>
    </section>
  );
}
