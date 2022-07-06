import { Order, Transaction, User } from '../src/app/interfaces/checkout';

let database: { orders: Order[]; transactions: Transaction[]; users: User[] } =
    { orders: [], transactions: [], users: [] };

//Data Entry Begin
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
//Data Entry End

console.log(JSON.stringify(database));
