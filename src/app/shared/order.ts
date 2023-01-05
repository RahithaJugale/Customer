import { Customer } from "./customer";
import { OrderItem } from "./order-item";

export class Order {

    orderNo:number = 0;
    customerNo: number = 0;
    orderDate: Date = new Date;
    
    customer:Customer;
    orderItems:OrderItem;
}
