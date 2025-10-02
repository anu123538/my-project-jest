// cart.js
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity = 1) {
    if (price < 0 || quantity <= 0) throw new Error("Invalid price or quantity");
    this.items.push({ name, price, quantity });
  }

  removeItem(name) {
    this.items = this.items.filter(item => item.name !== name);
  }

  applyDiscount(discountPercent) {
    if (discountPercent < 0 || discountPercent > 100) throw new Error("Invalid discount");
    return this.total() * (1 - discountPercent / 100);
  }

  total() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  emptyCart() {
    this.items = [];
  }
}

module.exports = Cart;
