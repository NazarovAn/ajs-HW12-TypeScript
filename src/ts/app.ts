import Cart from './service/Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';
import MusicAlbum from './domain/MusicAlbum';
import Smartphone from './domain/Smartphone';

const cart = new Cart();

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true,));
cart.removeOneItem(1001);
// cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, true));
// // cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, true));
// cart.add(new Movie(1020, 'The Avengers', 2012, 1000, 'Avengers Assemble!', 'USA', 'action movie', '137 minutes', true));
// console.log(cart.items);

// cart.add(new Smartphone(1030, 'Galaxy', 'Samsung', 20000, true));
// cart.add(new Smartphone(1030, 'Galaxy', 'Samsung', 20000, true));
// cart.add(new Smartphone(1030, 'Galaxy', 'Samsung', 20000, true));
// console.log(cart.items);
// cart.removeOneItem(1030);
// console.log(cart.items);

// console.log(cart.cartSum());
// console.log(cart.cartDiscount(50));

// cart.removeItem(1001);
console.log(cart.items);

