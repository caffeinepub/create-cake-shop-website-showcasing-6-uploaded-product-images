export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Sponge Cake',
    image: '/assets/products/Sponge Cake.jpeg',
    description: 'Light and fluffy classic sponge cake, perfect for any occasion. Made with premium ingredients for a delicate, melt-in-your-mouth texture.',
  },
  {
    id: '2',
    name: 'Banana Cake',
    image: '/assets/products/Banana Cake.jpeg',
    description: 'Moist and flavorful banana cake with a rich, tender crumb. Made with ripe bananas for natural sweetness and incredible taste.',
  },
  {
    id: '3',
    name: 'Nuts Cookies',
    image: '/assets/products/Nuts cookies.jpeg',
    description: 'Crunchy and delicious cookies loaded with premium nuts. Perfect for tea time or as a sweet snack any time of day.',
  },
  {
    id: '4',
    name: 'Malai Cake',
    image: '/assets/products/Malai Cake.jpeg',
    description: 'Rich and creamy malai cake with a unique blend of flavors. A traditional favorite with a modern twist that melts in your mouth.',
  },
  {
    id: '5',
    name: 'Kitkat Chocolate Cake',
    image: '/assets/products/Kitkat chocolate cake.jpeg',
    description: 'Decadent chocolate cake decorated with KitKat bars. A chocolate lover\'s dream with layers of rich cocoa and crunchy wafer goodness.',
  },
  {
    id: '6',
    name: 'Honey Cake',
    image: '/assets/products/honey cake.jpeg',
    description: 'Sweet and aromatic honey cake with a delicate flavor. Made with pure honey for a naturally sweet and wholesome treat.',
  },
];
