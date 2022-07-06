import { Product } from '../product';

interface Address {
    street_address1: string;
    street_address2: string;
    city_town: string;
}

interface Card {
    _no: string;
    cardholder: string;
    expiry_date: string;
    address: Address;
}

export interface Order {
    id: number;
    orders: Product[];
    order_note: string;
}

export interface Transaction {
    id: number;
    user_id: string;
    payment_method: string;
    payment_amount: number;
    delivery: boolean;
    address: Address;
}

export interface User {
    id: number;
    email: string;
    delivery_address: Address;
    card: Card;
}
