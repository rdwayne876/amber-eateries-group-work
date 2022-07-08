import { Order, Transaction, User } from '../src/app/interfaces/checkout';
import { Product, Category } from '../src/app/product';

let database: {
  products: Product[];
  orders: Order[];
  transactions: Transaction[];
  users: User[];
} = { products: [], orders: [], transactions: [], users: [] };

// Data Entry Begin
database.products = [
  // {
  //     id: number,
  //     name: string,
  //     description: string,
  //     category: 'appetizer' | 'entree' | 'dessert' | 'side' | 'beverage',
  //     imageUrl: "https://source.unsplash.com/1600x900/?food",
  //     price: number,
  //     quantity: number,
  //     ratings: []
  // }
    
    {
        id: 1,
        name: "Jerk Chicken",
        description: "Jamaican jerk chicken is famous for its spicy, smoky taste. Recreate this dish at home using a blend of traditional herbs and spices. If you can handle it, turn it up a notch with some authentic scotch bonnet pepper sauce.",
        category: Category.ENTREE,
        imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Jerk-Chicken-683x1024.jpg",
        price: 1200,
        quantity: 100,
        ratings: [] 
    },
    {
     id: 2,
     name: "Ackee and Saltfish",
     description: "Jamaica's national dish makes a tasty breakfast or brunch. Made with the buttery, savory ackee fruit, this dish is expertly seasoned with fresh onions, peppers, garlic and thyme. Sautee with salted codfish and serve with fresh, crispy fried dumplings.",
     category: Category.ENTREE,
     imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Ackee-and-Saltfish-683x1024.jpg",
     price: 900,
     quantity: 200,
     ratings:[]
    },
    {
     id: 3,
     name: "Steamed Cabbage and Saltfish",
     description: "This tasty meal comes together quickly using inexpensive ingredients. Cabbages are shredded and steamed with fresh garlic, onion and bell peppers. If you can handle the heat, add a bit of scotch bonnet pepper to the pot. Saltfish is the finishing touch on this pescatarian-friendly dish.",
     category: Category.ENTREE,
     imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Cabbage-and-Saltfish-683x1024.jpg",
     price: 200,
     quantity: 100,
     ratings:[]
    },
    {
     id: 4,
     name: "Jamaican Beef Patties",
     description: "When in Jamaica, a visit to a patty shop is a must. Jamaican beef patties are made with a crispy, golden flaky pastry filled with seasoned meat.",
     category: Category.ENTREE,
     imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Jamaican-Beef-Patties-683x1024.jpg",
     price: 300,
     quantity: 100,
     ratings:[]
    },
    {
     id: 5,
     name: "Curry Chicken",
     description: "Many cultures have their own method of making curry. Jamaican curry chicken is well-seasoned with traditional herbs and spices and Jamaican curry powder. Add in carrots and potatoes for a hearty, wholesome weeknight dinner.",
     category: Category.ENTREE,
     imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Jamaican-Curry-Chicken-683x1024.jpg",
     price: 900,
     quantity: 100,
     ratings:[]
    },
    {
     id: 6,
     name: "Rice and Peas",
     description: "Authentic Jamaican rice and peas is made with red kidney beans, creamy coconut milk and spices. This popular side dish is often served with Sunday dinner in many Jamaican households.",
     category: Category.SIDE,
     imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Jamaican-Rice-and-Peas-683x1024.jpg",
     price: 500,
     quantity: 500,
     ratings:[]
    },
    {
     id: 7,
     name: "Oxtail",
     description: "You'll need your pressure cooker for tender, fall-off-the-bone Jamaican oxtail. This popular stew was originally brought to Jamaica by the British. Of course, Jamaicans made it their own by adding spices and seasonings. Some say the Jamaican method is the best way to prepare oxtail.",
     category: Category.ENTREE,
     imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Jamaican-Oxtail-683x1024.jpg",
     price: 1900,
     quantity: 100,
     ratings:[]
    },
    {
     id: 8,
     name: "Brown Stew Chicken",
     description: "Jamaican brown stew chicken is easy to prepare with tons of payoff. Bite-size pieces of chicken are seasoned with garlic, ginger, peppers and scallions and simmered in a thick, flavorful stew.",
     category: Category.ENTREE,
     imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Brown-Stew-Chicken-683x1024.jpg",
     price: 1000,
     quantity: 1000,
     ratings:[]
    },
    {
     id: 9,
     name: " FRIED DUMPLINGS",
     description: "Also known as Johnny Cakes, Jamaican fried dumplings are crispy on the outside, but warm and fluffy on the inside. These savory dumplings are the ultimate comfort food to be enjoyed with your favorite Jamaican meals.",
     category: Category.APPETIZER,
     imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Fried-Dumplings-768x1152.jpg",
     price: 100,
     quantity: 500,
     ratings:[]
    },
    {
     id: 10,
     name: "RUM CAKE",
     description: "For dessert, serve up a slice of this famous Jamaican pastry. Made with rum and infused with a buttery syrup, it's a sweet taste of the Caribbean.",
     category: Category.DESSERT,
     imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Rum-Cake-768x1152.jpg",
     price:1500 ,
     quantity: 500,
     ratings:[]
    },

    {
      id: 11,
      name: "Steam Cabbage",
      description: "Here's a traditional Jamaican meal that vegans are sure to love. Jamaican steamed cabbage is seasoned with onion, garlic and thyme. If you're feeling bold, add some scotch bonnet pepper.",
      category: Category.SIDE,
      imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Jamaican-Cabbage-683x1024.jpg",
      price: 900,
      quantity: 100,
      ratings:[]
     },

     {
      id: 12,
      name: "Fried Dumplings",
      description: "Also known as Johnny Cakes, Jamaican fried dumplings are crispy on the outside, but warm and fluffy on the inside. These savory dumplings are the ultimate comfort food to be enjoyed with your favorite Jamaican meals.",
      category: Category.SIDE,
      imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Fried-Dumplings-683x1024.jpg",
      price: 100,
      quantity: 200,
      ratings:[]
     },

     {
      id: 13,
      name: "Curry Goat",
      description: "This dish is a popular menu item in any Jamaican restaurant. Succulent pieces of goat meat are slow-cooked to perfection in a spicy curry sauce. Serve with your favorite side for a hearty Jamaican dinner.",
      category: Category.ENTREE,
      imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Jamaican-Curry-Goat-683x1024.jpg",
      price: 900,
      quantity: 100,
      ratings:[]
     },

     {
      id: 14,
      name: "Roti",
      description: "Also popular in Trinidad, roti was brought to Jamaica by Indian migrants. This soft flatbread is thinner than naan, but is also served with rich, saucy curry dishes.",
      category: Category.APPETIZER,
      imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Roti-1-683x1024.jpeg",
      price: 500,
      quantity: 100,
      ratings:[]
     },

     {
      id: 15,
      name: "Jamaican Chicken Soup",
      description: "Nothing says comfort like chicken soup made by your Jamaican grandma. For the next best thing, cook up a simmering pot of spicy, flavorful Jamaican chicken soup",
      category: Category.APPETIZER,
      imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Jamaican-Chicken-Soup-768x1152.jpg",
      price:500 ,
      quantity: 300,
      ratings:[]
     },

     {
      id: 16,
      name: " Coco Bread",
      description: "For the full Jamaican experience, you'll need some Coco Bread with your beef patties. Coco bread is a soft, fluffy and slightly sweet bread made with a hint of coconut milk. This hearty bread can be filled with just about anything for a sandwich that's unlike any other.",
      category: Category.SIDE,
      imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Coco-Bread-683x1024.jpg",
      price: 200,
      quantity: 90,
      ratings:[]
     },

     {
      id: 17,
      name: "Jerk Shrimp",
      description: "Seafood lovers are sure to love this spicy, sweet Jerk Shrimp recipe. Plump, juicy shrimp are seasoned with an authentic jerk seasoning blend, then seared to perfection. How about a zesty summer salad featuring Jamaican jerk shrimp?",
      category: Category.ENTREE,
      imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Jerk-Shrimp-683x1024.jpg",
      price: 1500,
      quantity: 100,
      ratings:[]
     },
 
     {
      id: 18,
      name: "Jamaican Blue mountain Coffee",
      description: "Coffee lovers favorite hot beverage in jamaica, The Blue Mountain Coffee",
      category: Category.BEVERAGE,
      imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Jamaican-Blue-Mountain-Coffee-683x1024.jpg",
      price: 400,
      quantity: 200 ,
      ratings:[]
     },
 
     {
      id: 19,
      name: "Ginger Beer",
      description: "Jamaican ginger beer is sweet and refreshing with the fiery kick of ginger. Use fresh ginger for a delicious non-alcoholic drink that can be enjoyed by the whole family.",
      category: Category.BEVERAGE,
      imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Ginger-Beer-683x1024.jpg",
      price: 110,
      quantity: 100,
      ratings:[]
     },
 
     {
      id: 20,
      name: "Hot Chocolate Tea",
      description: "It doesn't get more authentic than this! Jamaican hot chocolate is made using real cacao for a rich, smooth taste. Stir in cinnamon and nutmeg for a cup of hot cocoa tha's far from average.",
      category: Category.BEVERAGE,
      imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Hot-Chocolate-Tea-683x1024.jpg",
      price: 150,
      quantity: 300,
      ratings:[]
     },
 
     {
      id: 21,
      name: "Jamaican Sorrel",
      description: "This drink is traditionally enjoyed by Jamaicans during Christmas, but can be enjoyed all year long. This unique beverage is similar to cranberry juice in color with a unique, sour, berry-like taste. Add sweetener and ginger for a refreshing Jamaican drink.",
      category: Category.BEVERAGE,
      imageUrl: "https://izzycooking.com/wp-content/uploads/2021/03/Jamaican-Sorrel-683x1024.jpg",
      price: 140,
      quantity: 200,
      ratings:[]
     },
 
     {
      id:22,
      name: "Red Peas Soup",
      description: "A thick and flavorful stew of beef or pork, yams, potatoes, red peas, and dumplings that is usually flavored with pimento and thyme.",
      category: Category.ENTREE,
      imageUrl: "https://jamaicans.com/wp-content/uploads/The-6-Soups-Every-Jamaican-Should-Know-How-to-Cook-Red-Peas-Beef-Soup-810x608.jpeg",
      price: 300,
      quantity: 250,
      ratings:[]
     },
 
     {
      id:23 ,
      name: "Brown Stew Fish",
      description: "A stew featuring a combination of marinated and fried fish fillets with a brown sauce made from onions, garlic, ginger, tomatoes, butter, and water. Often seasoned with thyme and different kinds of hot peppers and traditionally served with rice and peas.",
      category: Category.ENTREE,
      imageUrl: "https://jamaicans.com/wp-content/uploads/2015/11/jamaican-brown-stew-fish-recipe-810x608.jpg",
      price: 900,
      quantity: 100,
      ratings:[]
     },
 
     {
      id:24 ,
      name: "Fish Escovitch",
      description: "The making of the Jamaican Fish Escovitch dish begins with a fried whole fish, usually Red Snapper. It is then topped with pickled vegetables, including carrots, onions, peppers, pimentos and chayote. Jamaican Fish Escovitch is often paired with bammy (see Jamaican side dishes, further down this article), and inspiration for this dish is said to have been brought to the island with Spanish Jewish settlers hundreds of years ago. Eating this meal, the day after it is prepared is recommended by some, so the flavors have some time to sink in. This is a popular Easter lunch inclusion in Jamaica.",
      category: Category.ENTREE,
      imageUrl: "https://www.beaches.com/blog/content/images/2020/03/Jamaican-Fish-Escovitch.jpg",
      price:1000 ,
      quantity: 30,
      ratings:[]
     },
 
     {
      id: 25,
      name: "Grater Cake",
      description: "A traditional dessert that relies on freshly grated coconut and granulated sugar for the main ingredients. These ingredients are cooked in water until the mixture becomes sticky and the coconut is soft in texture. The cake is often colored red or pink with food coloring. Also known as “grater brute” when brown sugar is used instead of white sugar",
      category: Category.DESSERT,
      imageUrl: "https://jamaicans.com/wp-content/uploads/2015/10/jamaican-grater-cake.jpg",
      price: 100,
      quantity: 90,
      ratings:[]
     },
 
     {
      id: 26,
      name: "Gizzada",
      description: "A dessert that consists of a pastry shell with a sweet and slightly spicy coconut filling. Its characteristic feature is its pinched crust, which gives the name “gizzada” or “pinch-me-round.” Thought to be of Portuguese or Jewish origin.",
      category: Category.DESSERT,
      imageUrl: "https://onthegas.org/wp-content/uploads/2019/07/jamaican-gizzada-bite-300x200.jpg",
      price: 100,
      quantity: 50,
      ratings:[]
     },
 
     {
      id: 27,
      name: "Heineken",
      description: "Cold, fresh, high quality Heineken. Enjoyed near and far since 1873.",
      category: Category.BEVERAGE,
      imageUrl: "https://www.heineken.com/media-eu/01pfxdqq/heineken-original-bottle.png?anchor=center&mode=crop&width=712&height=1068&quality=85",
      price: 300,
      quantity: 100,
      ratings:[]
     },
 
     {
      id: 28,
      name: "Mannish Water",
      description: "A thin, brown soup consisting of goat meat, breadfruit, onions, tomatoes, flour, and fresh herb. Dumplings, potatoes, and yams are sometimes added to the dish for an extra kick of flavor.",
      category: Category.APPETIZER,
      imageUrl: "https://cdn.tasteatlas.com//images/dishes/d19d6c03d9c94dc0af2f54ed1aaf0186.jpg?w=905&h=510",
      price: 400,
      quantity: 100,
      ratings:[]
     },
 
     {
      id: 29,
      name: "Red Stripe",
      description: "enjoy a cold bottle of red stripe",
      category: Category.ENTREE,
      imageUrl: "https://trulyexperiences.com/blog/wp-content/uploads/2022/02/AdobeStock_282953128_Editorial_Use_Only-768x512.jpeg",
      price: 350,
      quantity: 100,
      ratings:[]
     },
 
     {
      id: 30,
      name: "Mackerel Run Down (run-dun)",
      description: "Run-Down refers to fish stew in Jamaica, and this is another mouthwatering dish you’re not going to be able to get enough of. The stew comes together with garlic, onions, tomatoes, hot peppers, spices and carefully cut pieces of fish. Mackerel is a popular choice for fish stew, though cod is sometimes used. The process of preparation involves slow cooking in coconut milk, and in the end the fish stew is served with dumplings and green bananas that have been boiled down to the perfect consistency. You’ll know the dish is ready when the fish starts falling apart, and the stew is thick and creamy",
      category: Category.SIDE,
      imageUrl: "https://www.beaches.com/blog/content/images/2021/05/Run-Down-Run-Dun-Jamaican-Food.jpg",
      price: 700,
      quantity:300 ,
      ratings:[]
     },
 
     {
      id:31 ,
      name: "Festival",
      description: "It'll be a festival in your mouth with this treat that usually comes alongside jerk chicken meals or fried fish, and other dishes. It is made with cornmeal, sugar, flour, spices, milk or water. The combined ingredients are fried until golden brown, and the result can be compared to that of floats sold in other Caribbean countries, just in a cylindrical shape.",
      category: Category.SIDE,
      imageUrl: "https://www.beaches.com/blog/content/images/2020/03/Jamaican-Festival.jpg",
      price: 100,
      quantity:300 ,
      ratings:[]
     },
 
     {
      id: 32,
      name: "Peanut Drops",
      description: "Peanut drops are popular Jamaican snacks made by boiling roasted peanuts and minced ginger in water with brown sugar. The peanuts are boiled until the water evaporates and the sugar becomes sticky like caramel. Peanut drops are left to cool and harden before they are ready to be served and consumed.",
      category: Category.DESSERT,
      imageUrl: "https://cdn.tasteatlas.com//images/dishes/fc9d1afb26ec47d0b53e469a7c20fd82.jpg?w=905&h=510",
      price: 100,
      quantity: 90,
      ratings:[]
     },
 
     {
      id:33 ,
      name: "Yellow HeartBreadfruit",
      description: "Breadfruit is amazing, and there are just so many ways to prepare it. It is referred to as a ground provision in the Caribbean. In Jamaica, some residents believe breadfruits were brought to the island in 1793 from Tahiti. Breadfruit is classified as a fruit, but it falls into the starch category in the Caribbean. Preparation methods for breadfruit in Jamaica include grilling, baking, or making it into a puree. Breadfruit is highly nutritious, and very tasty.",
      category: Category.SIDE,
      imageUrl: "https://www.beaches.com/blog/content/images/2020/03/Jamaican-Breadfruit.jpg",
      price:100 ,
      quantity: 100,
      ratings:[]
     },
 
     {
      id: 34,
      name: "Peppered Shrimp",
      description: "Peppered shrimps is a popular Jamaican street food item consisting of shrimps with a spicy kick and tons of flavor. They are usually cooked in a skillet with garlic, hot pepper, butter, and thyme, absorbing all of the flavors in the process.",
      category: Category.APPETIZER,
      imageUrl: "https://cdn.tasteatlas.com//Images/Dishes/c5e9e201b9ad4ce99fca5fa71b22ce82.jpg?w=905&h=510",
      price: 400,
      quantity: 100,
      ratings:[]
     },
 
     {
      id: 35,
      name: "bigga",
      description: "jamaican favorate soft drink",
      category: Category.BEVERAGE,
      imageUrl: "https://www.bestwaywholesale.co.uk/img/products/1000/5/766200501425.jpg",
      price: 100,
      quantity: 50,
      ratings:[]
     },
 
     {
      id: 36,
      name: "Chicken Foot Soup",
      description: "Soups in Jamaica are thick and often served as complete meals mainly for lunch. This tasty soup is prepared using chicken feet, pumpkin, chochos, turnips, carrots, yellow yam, and flour dumplings, and seasoned with a soup mix and a medley of herbs and spices.",
      category: Category.APPETIZER,
      imageUrl: "https://www.chefspencil.com/wp-content/uploads/jamaican-chicken-soup.jpg.webp",
      price: 300,
      quantity: 50,
      ratings:[]
     },
 
     {
      id: 37,
      name: "Smirnoff Ice",
      description: "a sweet crispt alcoholic drink",
      category: Category.BEVERAGE,
      imageUrl: "https://cms.diageohorizon.com/Horizon_Bold/LOCAL/PR1772/235/smirnoff-ice-original.png",
      price: 500,
      quantity: 90,
      ratings:[]
     },
 
     {
      id: 38,
      name: "Belvedere 'Smogory Forest' single estaste rye (vodka)",
      description: "Bold, savory Belvedere Single Estate Rye Smogóry Forest is made from Dankowskie Diamond Rye grown exclusively in Western Poland. It is rich and mellow with initial impressions of salted caramel, cereal and a touch of honey. Persistent with delicate notes of toasted bread, white pepper and fudge",
      category: Category.BEVERAGE,
      imageUrl: "https://imgs.search.brave.com/Ww4tDH7Sb8YjT0W9DzrRPiVii1HKGV-PMgXLl_Jftik/rs:fit:600:504:1/g:ce/aHR0cDovL2N1aXNp/bmUtZXQtZGVzLXRl/bmRhbmNlcy5jb20v/d29yZHByZXNzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzA0/L0JlbHZlZGVyZS12/b2RrYS1TaW5nbGUt/RXN0YXRlLVJ5ZS5q/cGc",
      price: 1900,
      quantity: 30,
      ratings:[]
     },
 
     {
      id: 39,
      name: "Terrazas de los andes grand cabernet sauvignon (red wine)",
      description: "This wine is very fruity, round which gives a velvety sensation in the mouth. I really think it is an entire different experience compared to Cabernet coming from colder areas, or less continental areas And it goes beautifully with Asian gastronomy and spices in general.",
      category: Category.BEVERAGE,
      imageUrl: "https://imgs.search.brave.com/XN_eZKtfecaLCBgcMvFSF4X1MQyZgYE_CE4cR_DRpSU/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/YnU0MGdTbGlYalpf/dnlGM3pvZGxRSGFM/SCZwaWQ9QXBp",
      price: 2100,
      quantity: 30,
      ratings:[]
     },
 
     {
      id: 40,
      name: "Bud Light",
      description: "Bud Light is a premium beer with incredible drinkability that has made it a top selling American beer that everybody knows and loves. This light beer is brewed using a combination of barley malts, rice and a blend of premium aroma hop varieties.",
      category: Category.BEVERAGE,
      imageUrl: "https://imgs.search.brave.com/wcOYz09WkK4tlqCTupYM40hnDb3QwZc5MVx5cwTXI-c/rs:fit:1080:1080:1/g:ce/aHR0cHM6Ly9qYWNr/cXVpbm5zcHViLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wNC9CdWQtTGln/aHQtMS5wbmc",
      price: 200,
      quantity: 100,
      ratings:[]
     },
 
     {
      id: 41,
      name: "Bammy",
      description: "Bammy is a flatbread made from cassava and was a staple among the Tainos. It is made mainly in rural areas and sold in markets, stores, and by street vendors. No fish dish is complete without it.",
      category: Category.SIDE,
      imageUrl: "https://www.chefspencil.com/wp-content/uploads/Bammy.jpg.webp",
      price: 300,
      quantity: 30,
      ratings:[]
     },
 
     {
      id: 42,
      name: "jamaica chicken patty",
      description: "When in Jamaica, a visit to a patty shop is a must. Jamaican chicken patties are made with a crispy, golden flaky pastry filled with seasoned meat.",
      category: Category.APPETIZER,
      imageUrl: "https://imgs.search.brave.com/cBxzHDIfnvtBMmYR9xwbCHsmXU5TyFTs8pyRpq5TsJg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/amFtYWljYW5wcm9k/dWN0cy5jb20uYXUv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDgvUDQyNjAwMjEt/ZTE0NzEwMTY4ODgy/MDcuanBn",
      price: 200,
      quantity: 30,
      ratings:[]
     },
 
     {
      id: 43,
      name: "jamaica cheese patty",
      description: "When in Jamaica, a visit to a patty shop is a must. Jamaican cheese patties are made with a crispy, golden flaky pastry filled with seasoned meat.",
      category: Category.APPETIZER,
      imageUrl: "https://imgs.search.brave.com/Awfsjru-0quf4WXf1osax53jqugls_ei3paELohycmM/rs:fit:500:342:1/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVlamFtYWlj/YS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDIvQmVl/Zi1XaXRoLUNoZWVz/ZS1QYXR0eS5wbmc",
      price: 200,
      quantity: 30,
      ratings:[]
     },
 
     {
      id: 44,
      name: "Water",
      description: "wata with wow",
      category: Category.BEVERAGE,
      imageUrl: "https://loshusansupermarket.com/product_images/p/910/600_Dry_copy__01203_zoom.jpg",
      price: 100,
      quantity: 100,
      ratings:[]
     },
 
     {
      id: 45,
      name: "True Juice",
      description: "Juices are made from the finest fruits and vegetables produced locally and blended to perfection to provide only the best product for you.wat",
      category: Category.BEVERAGE,
      imageUrl: "https://imgs.search.brave.com/O9Q2B-kjEhGGRjlWoWds5A9cVrmLxlqQWEakB20Kfmk/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/cHh3bTNQdXhNNkpW/T2lNejZ4Y013SGFI/YSZwaWQ9QXBp",
      price: 200,
      quantity: 100,
      ratings:[]
     },
 
     {
      id: 46,
      name: "Coconut Water",
      description: "Drained form a juicy cocunut carefully natured in the cool island of Jamaica",
      category: Category.BEVERAGE,
      imageUrl: "https://imgs.search.brave.com/RJpbjuAhXZ8h4XoX0A0TysfcdQwv_axyiCHKT_HU3xk/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5k/cmlua2JhaS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTQv/MDgvc2h1dHRlcnN0/b2NrXzE2NTY4OTc0/MS5qcGc",
      price: 200,
      quantity: 100,
      ratings:[]
     },
     {
      id: 47,
      name: "BBQ Chicken",
      description: "Chicken carefully season in jamaican sesoning and dipped in bbq sauce, then baked to perfection",
      category: Category.ENTREE,
      imageUrl: "https://sweetandsavorymeals.com/wp-content/uploads/2019/02/Baked-BBQ-Chicken-2.jpg",
      price: 900,
      quantity: 20,
      ratings:[]
     },
     {
      id: 48 ,
      name: "Stew Pork",
      description: "Pork stew might not be the first thing that comes to mind when you think of stew recipes. Tons of tender, juicy pork chunks and bacon ensure meat in every bite, and all of your favorite veggies are here in abundance. ",
      category: Category.ENTREE,
      imageUrl: "https://www.gonnawantseconds.com/wp-content/uploads/2020/01/Pork-Stew-011-768x512.jpg",
      price: 1000,
      quantity: 90,
      ratings:[]
     },
     {
      id: 49,
      name: "stew beef",
      description: "This classic French beef stew, otherwise known as Beef Bourguignon, is the ultimate cold weather comfort food.Chunks of well-marbled beef are seared in a hot pan, and then gently braised with garlic and onions in a rich wine-based broth. After a few hours in the oven, the meat becomes meltingly tender and enveloped in a deeply-flavored sauce.",
      category: Category.ENTREE,
      imageUrl: "https://static01.nyt.com/images/2021/01/15/dining/15COOKING-OLD-BEEF-STEW2/15COOKING-OLD-BEEF-STEW2-articleLarge-v2.jpg",
      price: 600,
      quantity: 90,
      ratings:[]
     },
     {
      id: 50,
      name: "Crab Rangoon",
      description: "The crab rangoon is filled with cream cheese but has all the complicated flavors of Asian spices to give it a unique and addicting taste.",
      category: Category.ENTREE,
      imageUrl: "https://thekitchencommunity.org/wp-content/uploads/2022/02/15_chinese-recipes-500x750.jpg",
      price: 900,
      quantity: 50,
      ratings:[]
     },
 

];
database.orders = [
  // {
  //     id: number;
  //     orders: Product[];
  //     order_note: string;
  // }
];
database.transactions = [
  // {
  //     id: number;
  //     user_id: string;
  //     payment_method: string;
  //     payment_amount: number;
  //     delivery: boolean;
  //     address: Address;
  // }
];
database.users = [
  // {
  //     id: number;
  //     email: string;
  //     delivery_address: Address;
  //     card: Card;
  // }
];
// Data Entry End

console.log(JSON.stringify(database, undefined, 2));

