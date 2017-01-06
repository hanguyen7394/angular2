export class CartService {
	
	public cart_items: Array<any> = [];

	constructor(){}

	addItem(item: any) {
		this.cart_items.push(item);
	}

	countItem() {
		return this.cart_items.length;
	}

	countPrice() {
		var price=0;
		if(this.cart_items.length != 0){
			this.cart_items.forEach(function(item){
				if(item.price_sale == 0)
					price += +(item.price);
				else
					price += +(item.price_sale);
			})
		}
		else
			price = 0;
		return price;
	}

	emptyCart() {
		this.cart_items.length = 0;
	}
}
