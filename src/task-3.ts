interface Product {
  id: number;
  name: string;
  price: number;
}

const usernames: string[] = ["alex", "maria", "john"];
const ratings: number[] = [4, 5, 3, 5];
const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
];

console.log(usernames, ratings, products);