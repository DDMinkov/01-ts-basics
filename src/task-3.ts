interface Product {
  id: number;
  title: string;
}

const usernames: string[] = ["alex", "maria", "john"];
const ratings: number[] = [4, 5, 3, 5];
const products: Product[] = [
  { id: 1, title: "Laptop" },
  { id: 2, title: "Phone" },
];

console.log(usernames, ratings, products);