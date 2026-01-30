
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 's1',
    name: 'Special Sawariya Club Sandwich',
    description: 'Triple layered sandwich with garden fresh veggies, creamy mayo, and our secret masala blend.',
    price: 180,
    category: 'Sandwich',
    image: 'https://picsum.photos/seed/sandwich1/600/400',
    isPopular: true
  },
  {
    id: 's2',
    name: 'Cheese Chutney Sandwich',
    description: 'The classic Indian street style sandwich with spicy green chutney and loaded with processed cheese.',
    price: 120,
    category: 'Sandwich',
    image: 'https://picsum.photos/seed/sandwich2/600/400'
  },
  {
    id: 's3',
    name: 'Paneer Tikka Grill',
    description: 'Marinated paneer cubes grilled to perfection with onions and capsicum in jumbo bread.',
    price: 160,
    category: 'Sandwich',
    image: 'https://picsum.photos/seed/sandwich3/600/400',
    isSpicy: true
  },
  {
    id: 'b1',
    name: 'Aloo Tikki Burger',
    description: 'Crispy potato patty with fresh lettuce, onions, and our signature burger sauce.',
    price: 90,
    category: 'Burger',
    image: 'https://picsum.photos/seed/burger1/600/400'
  },
  {
    id: 'b2',
    name: 'Supreme Veggie Burger',
    description: 'A heavy duty veg patty with extra cheese, jalapenos, and grilled onions.',
    price: 140,
    category: 'Burger',
    image: 'https://picsum.photos/seed/burger2/600/400',
    isPopular: true
  },
  {
    id: 'si1',
    name: 'Peri Peri Fries',
    description: 'Golden crispy fries tossed in hot and tangy peri peri seasoning.',
    price: 110,
    category: 'Sides',
    image: 'https://picsum.photos/seed/fries1/600/400',
    isSpicy: true
  },
  {
    id: 'be1',
    name: 'Cold Coffee with Ice Cream',
    description: 'Thick creamy cold coffee topped with a generous scoop of vanilla ice cream.',
    price: 130,
    category: 'Beverages',
    image: 'https://picsum.photos/seed/coffee1/600/400'
  }
];

export const CATEGORIES = ['Sandwich', 'Burger', 'Sides', 'Beverages'] as const;

export const RESTAURANT_DETAILS = {
  name: 'Shree Sawariya Sandwich',
  tagline: 'The King of Sandwiches & Fast Food',
  address: 'Indore - Ujjain Rd, near Nanakheda, Ujjain, Madhya Pradesh',
  phone: '+91 98765 43210',
  email: 'hello@sawariyasandwich.com',
  workingHours: '11:00 AM - 11:00 PM',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.60803932662!2d75.7876127!3d23.1678235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00ffab%3A0x5903f67123996211!2sShree%20Sanwariya%20Sandwich!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};
