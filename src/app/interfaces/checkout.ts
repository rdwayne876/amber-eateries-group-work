import { Product } from '../product';

export enum PaymentMethod {
  CASH = 'cash',
  Card = 'card',
}

export interface Address {
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
}

export interface Transaction {
  id: number;
  user_id: number;
  order_id: number;
  payment_method: PaymentMethod;
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
