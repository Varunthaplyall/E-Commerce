const mongoose = require("mongoose");
const productModel = require("./models/Product.model"); 
require('dotenv').config(); 

const mongoUrl = process.env.MONGOOSE_URL;

mongoose.connect(mongoUrl)
  .then(() => console.log("Db Connected"))
  .catch(err => console.log(err));

async function seedDb() {
  try {
    const products = [
      {
        "title": "Trench Coat",
        "image": "https://i.pinimg.com/564x/4b/2c/1c/4b2c1ced5f0f3fbf010a477aa45f758b.jpg",
        "price": 15000,
        "description": "Classic trench coat with a timeless design and high-quality material."
      },
      {
        "title": "Floral Dress",
        "image": "https://i.pinimg.com/564x/19/a1/c1/19a1c1e2c531688eca669e6e28e4541f.jpg",
        "price": 7000,
        "description": "Elegant floral dress with a flattering fit, perfect for special occasions."
      },
      {
        "title": "Jogging Pants",
        "image": "https://i.pinimg.com/736x/30/65/6f/30656fe8d13fcdc224239e2e6170afcc.jpg",
        "price": 3500,
        "description": "Comfortable jogging pants made from breathable fabric for active wear."
      },
      {
        "title": "Cardigan",
        "image": "https://i.pinimg.com/564x/6f/2b/62/6f2b62ac74185f869511dd0c05d07c64.jpg",
        "price": 5000,
        "description": "Cozy cardigan ideal for layering in cooler weather."
      },
      {
        "title": "Leather Jacket",
        "image": "https://i.pinimg.com/564x/06/69/69/066969841c40b90be7608704267eecf0.jpg",
        "price": 20000,
        "description": "Stylish leather jacket with a sleek design and premium quality."
      },
      {
        "title": "Denim Jeans",
        "image": "https://i.pinimg.com/564x/a5/57/4d/a5574dac94d1ac0587d60f6b7bf4d5e2.jpg",
        "price": 8000,
        "description": "Classic denim jeans with a comfortable fit and versatile style."
      },
      {
        "title": "Blazer",
        "image": "https://i.pinimg.com/564x/90/31/b0/9031b0b3cbc594cc4076424392ef44c7.jpg",
        "price": 12000,
        "description": "Sharp blazer perfect for professional and formal occasions."
      },
      {
        "title": "Sweater",
        "image": "https://i.pinimg.com/564x/7a/f6/4d/7af64d49d55417fd6d51c9b61b64f755.jpg",
        "price": 6000,
        "description": "Soft and warm sweater ideal for colder weather."
      },
      {
        "title": "Skirt",
        "image": "https://i.pinimg.com/736x/3b/23/84/3b23843aaef2a07a28c1d9bdbae1f98b.jpg",
        "price": 5500,
        "description": "Trendy skirt with a modern design suitable for various occasions."
      },
      {
        "title": "Sweater",
        "image": "https://i.pinimg.com/564x/fc/4d/8c/fc4d8c5e6451053c62a8ebca2fa578ce.jpg",
        "price": 5500,
        "description": "Trendy sweater with a modern design suitable for various occasions."
      },
      {
        "title": "Hoddie",
        "image": "https://i.pinimg.com/736x/ba/2a/66/ba2a66a26fa4a4f5bfe458cb1e03ef8d.jpg",
        "price": 5500,
        "description": "Trendy hoddie with a modern design suitable for various occasions."
      },
      {
        "title": "T-shirt",
        "image": "https://i.pinimg.com/564x/5c/a6/18/5ca618f6a990749f19f2fecc0b515799.jpg",
        "price": 2500,
        "description": "Comfortable and casual t-shirt for everyday wear. made up of very flexible material,"
      },
      {
        "title": "Chinos",
        "image": "https://i.pinimg.com/564x/94/e5/1e/94e51efae48fdee9b54de3d72cb90e9f.jpg",
        "price": 7000,
        "description": "Stylish chinos that offer a smart casual look. Versatile enough for both work and play."
      },
      {
        "title": "Puffer Jacket",
        "image": "https://i.pinimg.com/564x/b7/4e/0c/b74e0cdb47dc6e993eef95d3b501a43b.jpg",
        "price": 18000,
        "description": "Warm puffer jacket ideal for winter wear. Keeps you cozy without sacrificing style."
      },
      {
        "title": "Linen Shirt",
        "image": "https://i.pinimg.com/564x/d9/34/63/d93463445cf24621eb3c812f35b73e58.jpg",
        "price": 6000,
        "description": "Breathable linen shirt perfect for hot weather. A must-have for a relaxed, stylish look."
      },
      {
        "title": "Cargo Shorts",
        "image": "https://i.pinimg.com/564x/ed/ea/99/edea9973c1c1e2e95cc89b07d092ef77.jpg",
        "price": 4000,
        "description": "Durable cargo shorts featuring multiple pockets. Ideal for adventures and casual outings."
      },
      {
        "title": "Wrap Dress",
        "image": "https://i.pinimg.com/564x/0b/32/f2/0b32f2b67f69bb88575da5f5aab3f650.jpg",
        "price": 8500,
        "description": "Flattering wrap dress suitable for all body types. Perfect for both casual and formal occasions."
      },
      {
        "title": "Tracksuit",
        "image": "https://i.pinimg.com/564x/52/b7/08/52b7080bdf9c4bcb3880d7435f3e7930.jpg",
        "price": 9500,
        "description": "Comfortable tracksuit for workouts and lounging. A great choice for stylish athletic wear."
      },
      {
        "title": "Maxi Skirt",
        "image": "https://i.pinimg.com/564x/76/92/03/7692038c8beec5045e304b6cf032cb9a.jpg",
        "price": 6000,
        "description": "Flowy maxi skirt that’s perfect for summer outings. Offers a relaxed fit and elegant style."
      },
      {
        "title": "Peacoat",
        "image": "https://i.pinimg.com/564x/c1/16/a0/c116a0ee2cfa2aa88ab55a44d2a2a4e6.jpg",
        "price": 22000,
        "description": "Classic peacoat that adds a timeless touch to your winter wardrobe. Stylish and warm for cold days."
      },
      {
        "title": "Graphic T-shirt",
        "image": "https://i.pinimg.com/564x/57/6e/68/576e68a2b3c8b888bcde2f1e6d49f6f4.jpg",
        "price": 3000,
        "description": "Casual graphic t-shirt for everyday wear. Express your style effortlessly with this piece."
      },
      {
        "title": "Belted Trench",
        "image": "https://i.pinimg.com/564x/a8/56/3b/a8563b3886b4cf5a43c9e7a50d5e2449.jpg",
        "price": 16000,
        "description": "Belted trench coat that exudes sophistication. Ideal for layering over any outfit."
      },
      {
        "title": "Combat Boots",
        "image": "https://i.pinimg.com/564x/a5/73/bb/a573bb005f75e182cb9c77b6dcf597f0.jpg",
        "price": 9000,
        "description": "Sturdy combat boots designed for rugged adventures. A versatile addition to any footwear collection."
      }
    ];

    await productModel.deleteMany({});
    await productModel.create(products);

    console.log("Data added to db");
  } catch (err) {
    console.log("Error adding data to db:", err);
  }
}

seedDb();
