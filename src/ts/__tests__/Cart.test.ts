import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Smartphone from '../domain/Smartphone';
import Movie from '../domain/Movie';

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart get', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true));

  expect(cart.items).toEqual([{
    author: "Leo Tolstoy",
    id: 1001,
    name: "War and Piece",
    pages: 1225,
    price: 2000,
    digital: true,
  }]);
});

test('Cart add', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, true));
  cart.add(new Movie(1020, 'The Avengers', 2012, 1000, 'Avengers Assemble!', 'USA', 'action movie', '137 minutes', true));

  expect(cart.items.length).toBe(3);
});

test('Cart sum', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, true));
  cart.add(new Movie(1020, 'The Avengers', 2012, 1000, 'Avengers Assemble!', 'USA', 'action movie', '137 minutes', true));

  expect(cart.cartSum()).toBe(3900);
});

test('Cart discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, true));
  cart.add(new Movie(1020, 'The Avengers', 2012, 1000, 'Avengers Assemble!', 'USA', 'action movie', '137 minutes', true));

  expect(cart.cartDiscount(20)).toBe(3120);
});

test('Cart remove item', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, true));
  cart.add(new Movie(1020, 'The Avengers', 2012, 1000, 'Avengers Assemble!', 'USA', 'action movie', '137 minutes', true));
  cart.removeItem(1020)

  expect(cart.items.length).toBe(2);
});

test('Cart removeOne item', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, true));
  cart.add(new Movie(1020, 'The Avengers', 2012, 1000, 'Avengers Assemble!', 'USA', 'action movie', '137 minutes', true));
  cart.add(new Smartphone(1030, 'Galaxy', 'Samsung', 20000, true));
  cart.add(new Smartphone(1030, 'Galaxy', 'Samsung', 20000, true));
  cart.removeOneItem(1020)

  expect(cart.items.length).toBe(4);
});

test('Cart removeOne item', () => {
  const cart = new Cart();
  const testAdd = () => cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true));
  testAdd();

  expect(() => testAdd()).toThrow(new Error('Такой товар уже есть в корзине'));
});