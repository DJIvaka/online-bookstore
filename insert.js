// Избор на база данни
use onlineBookstore;

// ➕ Вмъкване на автори
db.authors.insertMany([
  {
    name: "George Orwell",
    country: "UK",
    bio: "Author of 1984 and Animal Farm",
    birthYear: 1903
  },
  {
    name: "J.R.R. Tolkien",
    country: "UK",
    bio: "Author of The Hobbit and The Lord of the Rings",
    birthYear: 1892
  }
]);

// ➕ Вмъкване на книги
db.books.insertMany([
  {
    title: "1984",
    genre: "Dystopian",
    price: 12.99,
    authors: ["George Orwell"],
    inStock: 30,
    tags: ["classic", "politics"],
    publication: {
      year: 1949,
      publisher: "Secker & Warburg"
    }
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    price: 10.99,
    authors: ["J.R.R. Tolkien"],
    inStock: 15,
    tags: ["adventure", "classic"],
    publication: {
      year: 1937,
      publisher: "George Allen & Unwin"
    }
  }
]);

// ➕ Вмъкване на клиенти
db.customers.insertMany([
  {
    name: "Ivan Petrov",
    email: "ivan@example.com",
    addresses: [
      { city: "Sofia", street: "Bulgaria Blvd", zip: "1000" }
    ],
    preferences: ["Dystopian", "Fantasy"]
  },
  {
    name: "Maria Georgieva",
    email: "maria@example.com",
    addresses: [
      { city: "Plovdiv", street: "Main Street", zip: "4000" }
    ],
    preferences: ["Fantasy", "Romance"]
  }
]);

// ➕ Вмъкване на поръчки
db.orders.insertMany([
  {
    customerEmail: "ivan@example.com",
    books: ["1984", "The Hobbit"],
    total: 23.98,
    orderDate: new Date("2023-12-15")
  },
  {
    customerEmail: "maria@example.com",
    books: ["The Hobbit"],
    total: 10.99,
    orderDate: new Date("2024-01-10")
  }
]);

// ➕ Вмъкване на ревюта
db.reviews.insertMany([
  {
    book: "1984",
    customerEmail: "ivan@example.com",
    rating: 5,
    comment: "Amazing and timeless!",
    date: new Date("2024-01-01")
  },
  {
    book: "The Hobbit",
    customerEmail: "maria@example.com",
    rating: 4,
    comment: "Very enjoyable fantasy book.",
    date: new Date("2024-01-15")
  }
]);
