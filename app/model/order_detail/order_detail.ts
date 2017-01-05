export class OrderDetail{
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    price: number;
    created:number;
    updated:number;
    status: number;
    constructor(id: number, order_id: number, product_id: number, quantity: number, price: number,
     created: number, updated: number, status: number){
        this.id = id;
        this.order_id = order_id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.price = price;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
}