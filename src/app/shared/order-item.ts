import { Order } from "./order";

export class OrderItem {

    itemId:number = 0;
    orderNo: number = 0;
    itemName:string = '';
    quantity: number = 0;

    order:Order;
}
