import { Order } from "./order";

export class Customer {

    customerNo:number = 0;
    customerName: string = '';
    address: string = '';
    isActive: boolean = false;

    order:Order;

}
