const Cart = require('./cart');

let cart;

beforeEach(() => {
  cart = new Cart(); // start with a fresh cart for each test
});

test('add item to cart', () => {
  cart.addItem('Apple', 10, 2);
  expect(cart.total()).toBe(20);
});

test('remove item from cart', () => {
  cart.addItem('Apple', 10, 2);
  cart.removeItem('Apple');
  expect(cart.total()).toBe(0);
});

test('apply discount correctly', () => {
  cart.addItem('Apple', 100, 1);
  expect(cart.applyDiscount(10)).toBe(90);
});

test('adding item with negative price throws error', () => {
  expect(() => cart.addItem('Apple', -10)).toThrow("Invalid price or quantity");
});

test('applying invalid discount throws error', () => {
  cart.addItem('Apple', 50);
  expect(() => cart.applyDiscount(150)).toThrow("Invalid discount");
});

test('empty cart works', () => {
  cart.addItem('Apple', 10);
  cart.emptyCart();
  expect(cart.total()).toBe(0);
});
