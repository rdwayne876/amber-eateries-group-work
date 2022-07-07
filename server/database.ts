import { Order, Transaction, User } from '../src/app/interfaces/checkout';
import { Product, Category } from '../src/app/product';

let database: {
  products: Product[];
  orders: Order[];
  transactions: Transaction[];
  users: User[];
} = { products: [], orders: [], transactions: [], users: [] };

// Data Entry Begin
database.products = [
  // {
  //     id: number;
  //     name: string;
  //     description: string;
  //     category: 'appetizer' | 'entree' | 'dessert' | 'side' | 'beverage'
  //     imageUrl: "https://source.unsplash.com/1600x900/?food";
  //     price: number;
  //     quantity: number;
  //     ratings: []
  // }
    
    {
        id: 1,
        name: "JAMAICAN JERK CHICKEN",
        description: "Jamaican jerk chicken is famous for its spicy, smoky taste. Recreate this dish at home using a blend of traditional herbs and spices. If you can handle it, turn it up a notch with some authentic scotch bonnet pepper sauce.",
        category: 'entree',
        imageURL: "https://izzycooking.com/wp-content/uploads/2021/03/Jerk-Chicken-683x1024.jpg",
        price: 1200,
        quantity: 100,
        ratings: [] 
    }
];
database.orders = [
  // {
  //     id: number;
  //     orders: Product[];
  //     order_note: string;
  // }
];
database.transactions = [
  // {
  //     id: number;
  //     user_id: string;
  //     payment_method: string;
  //     payment_amount: number;
  //     delivery: boolean;
  //     address: Address;
  // }
];
database.users = [
  // {
  //     id: number;
  //     email: string;
  //     delivery_address: Address;
  //     card: Card;
  // }
];
// Data Entry End

console.log(JSON.stringify(database));

