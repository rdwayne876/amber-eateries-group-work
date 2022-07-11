// TODO Update enum to reflect existing code
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
    amount?: number;
    quantity: number;
    ratings: number[];
}
