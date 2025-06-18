use onlineBookstore;

// 📖 Извличане на всички книги
db.books.find();

// 📖 Филтриране на книги по жанр
db.books.find({ genre: "Fantasy" });

// 📖 Филтриране по жанр и цена
db.books.find({ genre: "Fantasy", price: { $lt: 12 } });

// ✏️ Актуализация на книга – увеличаване на наличност
db.books.updateOne({ title: "1984" }, { $set: { inStock: 50 } });

// ✏️ Актуализация на клиент – добавяне на нов адрес
db.customers.updateOne(
  { email: "maria@example.com" },
  { $push: { addresses: { city: "Varna", street: "Sea Blvd", zip: "9000" } } }
);

// 🗑️ Изтриване на ревю по условие
db.reviews.deleteOne({ rating: { $lt: 3 } });

// 🗑️ Изтриване на книга по заглавие
db.books.deleteOne({ title: "Some Unknown Book" });

// 🔄 Агрегиране: книги по жанр с брой и средна цена
db.books.aggregate([
  { $group: { _id: "$genre", count: { $sum: 1 }, avgPrice: { $avg: "$price" } } }
]);

// 🔄 Агрегиране: брой ревюта и среден рейтинг по книга
db.reviews.aggregate([
  { $group: { _id: "$book", reviewCount: { $sum: 1 }, avgRating: { $avg: "$rating" } } },
  { $sort: { avgRating: -1 } }
]);

// 🔄 Агрегиране: обобщена информация за поръчки по клиент
db.orders.aggregate([
  { $group: { _id: "$customerEmail", totalSpent: { $sum: "$total" }, orders: { $sum: 1 } } },
  { $sort: { totalSpent: -1 } }
]);
