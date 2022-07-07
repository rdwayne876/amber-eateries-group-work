export enum Category {
    APPETIZER = 'appetizer',
    ENTREE = 'entree',
    DESSERT = 'dessert',
    SIDE = 'side',
    BEVERAGE = 'beverage',
  }
  
  export interface Product {
    id: number;
    name: string;
    description: string;
    category: Category;
    imageUrl: string;
    price: number;
    quantity: number;
    ratings: number[];
  }