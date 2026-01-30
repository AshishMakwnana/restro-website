
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Sandwich' | 'Burger' | 'Sides' | 'Beverages';
  image: string;
  isSpicy?: boolean;
  isPopular?: boolean;
}

export interface RecommendationResponse {
  recommendation: string;
  suggestedItems: string[];
}
