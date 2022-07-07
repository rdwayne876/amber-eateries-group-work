"use strict";
exports.__esModule = true;
var database = { products: [], orders: [], transactions: [], users: [] };
// Data Entry Begin
database.products = [
// {
//     id: number;
//     name: string;
//     description: string;
//     category: 'main'|'side'|'beverage';
//     imageUrl: string;
//     price: number;
//     quantity: number;
// }
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
