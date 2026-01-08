import perfumeImage1 from '../../assets/7f64e5aef355cde734746e8a1f8d5f56ffbe68ee.png';
import perfumeImage2 from '../../assets/25e24baea239519b326cf36787fb3b6052d71b1d.png';

export interface Product {
  id: number;
  image: string;
  images?: string[]; // Alternative images from different angles
  title: string;
  price: number;
  rating: number;
  reviews: number;
  tags: string[];
  badge?: string;
  description?: string;
  features?: string[];
  sizes?: string[];
  colors?: string[];
}

export const perfumeProducts: Product[] = [
  {
    id: 1,
    image: perfumeImage1,
    images: [
      perfumeImage1,
      'https://images.unsplash.com/photo-1737424065216-bc51dd626175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwYW5nbGV8ZW58MXx8fHwxNzY3NzA3MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1745826420910-b301ff4154ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njc3MDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1757313252125-301331e460ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwZGV0YWlsfGVufDF8fHx8MTc2NzcwNzI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Citrus Burst Eau de Toilette',
    price: 59.99,
    rating: 4,
    reviews: 67,
    tags: ['Citrus', 'Fresh'],
    description: 'A refreshing citrus fragrance that energizes and uplifts. Perfect for everyday wear with notes of lemon, bergamot, and orange blossom.',
    features: ['Long-lasting scent', 'Natural ingredients', '100ml bottle', 'Cruelty-free'],
  },
  {
    id: 2,
    image: perfumeImage2,
    images: [
      perfumeImage2,
      'https://images.unsplash.com/photo-1737424065216-bc51dd626175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwYW5nbGV8ZW58MXx8fHwxNzY3NzA3MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1757313252125-301331e460ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwZGV0YWlsfGVufDF8fHx8MTc2NzcwNzI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1745826420910-b301ff4154ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njc3MDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Mystic Oud Intense',
    price: 149.99,
    rating: 5,
    reviews: 203,
    tags: ['Oriental', 'Woody'],
    badge: 'Premium',
    description: 'A luxurious oriental fragrance featuring rare oud wood, amber, and exotic spices. An enchanting scent for special occasions.',
    features: ['Premium ingredients', 'Intense concentration', '75ml bottle', 'Handcrafted'],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80',
      'https://images.unsplash.com/photo-1737424065216-bc51dd626175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwYW5nbGV8ZW58MXx8fHwxNzY3NzA3MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1745826420910-b301ff4154ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njc3MDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1757313252125-301331e460ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwZGV0YWlsfGVufDF8fHx8MTc2NzcwNzI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Lavender Fields Perfume',
    price: 74.99,
    rating: 5,
    reviews: 98,
    tags: ['Floral', 'Calming'],
    description: 'Transport yourself to the lavender fields of Provence. A soothing blend of lavender, vanilla, and soft musk.',
    features: ['Calming properties', 'Organic lavender', '50ml bottle', 'Vegan formula'],
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&q=80',
      'https://images.unsplash.com/photo-1737424065216-bc51dd626175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwYW5nbGV8ZW58MXx8fHwxNzY3NzA3MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1745826420910-b301ff4154ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njc3MDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1757313252125-301331e460ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwZGV0YWlsfGVufDF8fHx8MTc2NzcwNzI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Midnight Rose Eau de Parfum',
    price: 89.99,
    rating: 4,
    reviews: 156,
    tags: ['Floral', 'Woody'],
    badge: 'Best Seller',
    description: 'A romantic blend of rose petals, sandalwood, and patchouli. Perfect for evening wear and special moments.',
    features: ['Eau de Parfum concentration', 'Rose essential oil', '100ml bottle', 'Elegant packaging'],
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=400&q=80',
      'https://images.unsplash.com/photo-1737424065216-bc51dd626175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwYW5nbGV8ZW58MXx8fHwxNzY3NzA3MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1745826420910-b301ff4154ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njc3MDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1757313252125-301331e460ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwZGV0YWlsfGVufDF8fHx8MTc2NzcwNzI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Ocean Breeze Fresh',
    price: 69.99,
    rating: 4,
    reviews: 112,
    tags: ['Fresh', 'Citrus'],
    description: 'Capture the essence of the ocean with aquatic notes, sea salt, and crisp citrus. Fresh and invigorating.',
    features: ['Aquatic fragrance', 'Unisex scent', '75ml bottle', 'Summer collection'],
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80',
      'https://images.unsplash.com/photo-1737424065216-bc51dd626175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwYW5nbGV8ZW58MXx8fHwxNzY3NzA3MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1745826420910-b301ff4154ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njc3MDcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1757313252125-301331e460ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwZGV0YWlsfGVufDF8fHx8MTc2NzcwNzI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Vanilla Dream',
    price: 79.99,
    rating: 5,
    reviews: 145,
    tags: ['Sweet', 'Oriental'],
    badge: 'Only 3 left',
    description: 'Indulge in the sweet warmth of Madagascar vanilla, tonka bean, and caramel. Comfort in a bottle.',
    features: ['Gourmand fragrance', 'Madagascar vanilla', '100ml bottle', 'Limited edition'],
  },
];

export const bagsProducts: Product[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1760624294469-550753ec203a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwdG90ZSUyMGJhZ3xlbnwxfHx8fDE3Njc2NzM3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1760624294469-550753ec203a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwdG90ZSUyMGJhZ3xlbnwxfHx8fDE3Njc2NzM3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1765282946919-9a89e54705b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmFnJTIwZGV0YWlsfGVufDF8fHx8MTc2NzYyNTUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1663223960481-90771f8a849d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kYmFnJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njc3MDcyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1611350037371-f9e6a7da240a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWclMjBhbmdsZXxlbnwxfHx8fDE3Njc3MDcyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Classic Leather Tote Bag',
    price: 89.99,
    rating: 4,
    reviews: 203,
    tags: ['Classic', 'Professional'],
    badge: 'Best Seller',
    description: 'A timeless leather tote bag perfect for work or daily errands. Features multiple compartments and premium leather construction.',
    features: ['Genuine leather', 'Multiple pockets', 'Laptop compartment', 'Adjustable straps'],
    colors: ['Black', 'Brown', 'Tan'],
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1718622795525-2295971921ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2JvZHklMjBiYWd8ZW58MXx8fHwxNzY3NjU3MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1718622795525-2295971921ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2JvZHklMjBiYWd8ZW58MXx8fHwxNzY3NjU3MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1765282946919-9a89e54705b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmFnJTIwZGV0YWlsfGVufDF8fHx8MTc2NzYyNTUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1663223960481-90771f8a849d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kYmFnJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njc3MDcyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1611350037371-f9e6a7da240a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWclMjBhbmdsZXxlbnwxfHx8fDE3Njc3MDcyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Elegant Crossbody Bag',
    price: 64.99,
    rating: 4.5,
    reviews: 156,
    tags: ['Casual', 'Everyday'],
    badge: 'Only 5 left',
    description: 'Compact and stylish crossbody bag perfect for hands-free convenience. Ideal for everyday use and travel.',
    features: ['Adjustable strap', 'RFID protection', 'Multiple card slots', 'Lightweight design'],
    colors: ['Navy', 'Burgundy', 'Black'],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG91bGRlciUyMGJhZ3xlbnwxfHx8fDE3Njc2MDUyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG91bGRlciUyMGJhZ3xlbnwxfHx8fDE3Njc2MDUyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1765282946919-9a89e54705b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmFnJTIwZGV0YWlsfGVufDF8fHx8MTc2NzYyNTUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1663223960481-90771f8a849d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kYmFnJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njc3MDcyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1611350037371-f9e6a7da240a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWclMjBhbmdsZXxlbnwxfHx8fDE3Njc3MDcyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Designer Shoulder Bag',
    price: 149.99,
    rating: 5,
    reviews: 187,
    tags: ['Luxury', 'Designer'],
    badge: 'Premium',
    description: 'Luxury designer shoulder bag crafted from premium materials. A statement piece for any outfit.',
    features: ['Italian leather', 'Gold hardware', 'Dust bag included', 'Designer logo'],
    colors: ['Black', 'Cream', 'Red'],
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1655303219938-3a771279c801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW52YXMlMjBiYWNrcGFja3xlbnwxfHx8fDE3Njc2NzkwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1655303219938-3a771279c801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW52YXMlMjBiYWNrcGFja3xlbnwxfHx8fDE3Njc2NzkwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1765282946919-9a89e54705b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmFnJTIwZGV0YWlsfGVufDF8fHx8MTc2NzYyNTUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1663223960481-90771f8a849d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kYmFnJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njc3MDcyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1611350037371-f9e6a7da240a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWclMjBhbmdsZXxlbnwxfHx8fDE3Njc3MDcyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Casual Canvas Backpack',
    price: 69.99,
    rating: 4,
    reviews: 124,
    tags: ['Casual', 'Practical'],
    description: 'Durable canvas backpack perfect for daily commutes, school, or weekend adventures.',
    features: ['Water-resistant', 'Padded laptop sleeve', 'Multiple compartments', 'Adjustable straps'],
    colors: ['Olive', 'Navy', 'Gray'],
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1758817991388-54a98d456317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVuaW5nJTIwY2x1dGNoJTIwYmFnfGVufDF8fHx8MTc2NzY3OTA2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1758817991388-54a98d456317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVuaW5nJTIwY2x1dGNoJTIwYmFnfGVufDF8fHx8MTc2NzY3OTA2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1765282946919-9a89e54705b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmFnJTIwZGV0YWlsfGVufDF8fHx8MTc2NzYyNTUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1663223960481-90771f8a849d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kYmFnJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njc3MDcyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1611350037371-f9e6a7da240a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWclMjBhbmdsZXxlbnwxfHx8fDE3Njc3MDcyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Mini Evening Clutch',
    price: 79.99,
    rating: 4.5,
    reviews: 98,
    tags: ['Evening', 'Elegant'],
    description: 'Elegant mini clutch perfect for formal events and special occasions. Features a detachable chain strap.',
    features: ['Satin finish', 'Detachable chain', 'Internal mirror', 'Magnetic closure'],
    colors: ['Gold', 'Silver', 'Rose Gold'],
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1758499537503-315ca95c010b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRjaGVsJTIwYmFnfGVufDF8fHx8MTc2NzY3OTA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1758499537503-315ca95c010b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRjaGVsJTIwYmFnfGVufDF8fHx8MTc2NzY3OTA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1765282946919-9a89e54705b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmFnJTIwZGV0YWlsfGVufDF8fHx8MTc2NzYyNTUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1663223960481-90771f8a849d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kYmFnJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njc3MDcyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1611350037371-f9e6a7da240a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWclMjBhbmdsZXxlbnwxfHx8fDE3Njc3MDcyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Structured Satchel Bag',
    price: 129.99,
    rating: 4,
    reviews: 145,
    tags: ['Classic', 'Versatile'],
    description: 'Structured satchel bag with a classic silhouette. Perfect for professional settings and formal occasions.',
    features: ['Structured design', 'Top handle', 'Removable shoulder strap', 'Lock closure'],
    colors: ['Black', 'Camel', 'Burgundy'],
  },
];

// Export functions to get products
export function getProductsByCategory(category: string): Product[] {
  switch (category) {
    case 'perfumes':
      return perfumeProducts;
    case 'bags':
      return bagsProducts;
    // Add more categories as needed
    default:
      return [];
  }
}

export function getProduct(category: string, id: number): Product | undefined {
  const products = getProductsByCategory(category);
  return products.find(p => p.id === id);
}