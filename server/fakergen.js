var faker = require("faker");

var database = { products: [], menus: [] };
for (var i = 1; i <= 50; i++) {
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        category: faker.random.word(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/1600x900/?food",
        rating: [],
        quantity: faker.datatype.number(),
    });
}
console.log(JSON.stringify(database, undefined, 4));
