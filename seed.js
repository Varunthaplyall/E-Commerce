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
        "title": "Men's Classic Oxford Shirt",
        "image": "https://i.pinimg.com/736x/f7/bb/e5/f7bbe545e4f532e655741fce3f1125ba.jpg",
        "price": 4999,
        "description": "A timeless white Oxford shirt for men. Perfect for both casual and formal occasions.",
        "category": "men"
      },
      {
        "title": "Women's Floral Maxi Dress",
        "image": "https://i.pinimg.com/564x/ef/b3/60/efb3600f42d03ab45646c56a48c9960f.jpg",
        "price": 7999,
        "description": "Elegant floral print maxi dress with a flowy silhouette. Ideal for summer events.",
        "category": "women"
      },
      {
        "title": "Men's Slim Fit Chinos",
        "image": "https://i.pinimg.com/564x/6f/a7/81/6fa781f41b50db82352df348d14f85c2.jpg",
        "price": 5999,
        "description": "Comfortable and stylish slim fit chinos in khaki. Versatile for work or weekend wear.",
        "category": "men"
      },
      {
        "title": "Women's Tailored Blazer",
        "image": "https://i.pinimg.com/enabled/564x/7b/35/af/7b35af8bc0710b1b6047556ce786f54f.jpg",
        "price": 8999,
        "description": "Sharp, fitted blazer in classic black. A must-have for any professional wardrobe.",
        "category": "women"
      },
      {
        "title": "Men's Denim Jacket",
        "image": "https://i.pinimg.com/736x/e0/2c/63/e02c634d7d5c87c99e4542b7e2215c42.jpg",
        "price": 6999,
        "description": "Rugged denim jacket in a versatile blue wash. Perfect for layering in any season.",
        "category": "men"
      },
      {
        "title": "Women's High-Waisted Jeans",
        "image": "https://i.pinimg.com/enabled/564x/72/41/37/724137fad12d488d48535bd03800d103.jpg",
        "price": 6499,
        "description": "Flattering high-waisted jeans with a slim fit. Made from comfortable stretch denim.",
        "category": "women"
      },
      {
        "title": "Men's Polo Shirt",
        "image": "https://i.pinimg.com/enabled/564x/54/bb/62/54bb623f158c4216711885e9db8132b8.jpg",
        "price": 3999,
        "description": "Classic polo shirt in navy blue. Made from breathable cotton piqué fabric.",
        "category": "men"
      },
      {
        "title": "Women's Wrap Blouse",
        "image": "https://i.pinimg.com/enabled/564x/62/f0/93/62f093fbb4d164bfd77a5881acd184aa.jpg",
        "price": 4499,
        "description": "Elegant wrap blouse in a soft, flowy fabric. Features a v-neckline and tie waist.",
        "category": "women"
      },
      {
        "title": "Men's Leather Biker Jacket",
        "image": "https://i.pinimg.com/enabled/564x/bd/8b/f6/bd8bf6814dea2d72e411b0a1b2e3b75b.jpg",
        "price": 19999,
        "description": "Edgy leather biker jacket with silver hardware. Made from premium quality leather.",
        "category": "men"
      },
      {
        "title": "Women's Pencil Skirt",
        "image": "https://i.pinimg.com/564x/3b/22/34/3b2234e78de4264be5f01e9f6a582b17.jpg",
        "price": 5499,
        "description": "Sleek pencil skirt in classic black. Perfect for office wear or formal occasions.",
        "category": "women"
      },
      {
        "title": "Men's Cashmere Sweater",
        "image": "https://i.pinimg.com/564x/d8/9b/80/d89b80eb16a8c9c90c556e1480f8924e.jpg",
        "price": 12999,
        "description": "Luxurious cashmere sweater in a rich burgundy color. Soft, warm, and incredibly comfortable.",
        "category": "men"
      },
      {
        "title": "Women's Leather Tote Bag",
        "image": "https://i.pinimg.com/564x/6d/b2/a2/6db2a2cbe89efdcb9b19eb6a893f30de.jpg",
        "price": 14999,
        "description": "Spacious leather tote bag in tan. Features multiple compartments for organization.",
        "category": "women"
      },
      {
        "title": "Men's Tailored Suit",
        "image": "https://i.pinimg.com/enabled/564x/e2/a7/78/e2a7785a8d4ae24f4061727dea0584f1.jpg",
        "price": 29999,
        "description": "Sharp, modern suit in charcoal gray. Includes jacket and trousers.",
        "category": "men"
      },
      {
        "title": "Women's Silk Camisole",
        "image": "https://i.imgur.com/YQBD9pU.jpg",
        "price": 3999,
        "description": "Luxurious silk camisole in a soft blush color. Perfect for layering or wearing alone.",
        "category": "women"
      },
      {
        "title": "Men's Cargo Shorts",
        "image": "https://i.pinimg.com/564x/fd/94/8b/fd948b1fc983506543ffc598b6c02598.jpg",
        "price": 4499,
        "description": "Durable cargo shorts with multiple pockets. Ideal for casual summer wear.",
        "category": "men"
      },
      {
        "title": "Women's Knit Cardigan",
        "image": "https://i.pinimg.com/enabled/564x/34/3b/44/343b44f90da4ef1c1df57f6d117378e5.jpg",
        "price": 5999,
        "description": "Cozy knit cardigan in a soft gray color. Perfect for layering in cooler weather.",
        "category": "women"
      },
      {
        "title": "Men's Printed T-Shirt",
        "image": "https://i.pinimg.com/enabled/564x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        "price": 2999,
        "description": "Cool graphic print t-shirt in white. Made from soft, breathable cotton.",
        "category": "men"
      },
      {
        "title": "Women's Pleated Midi Skirt",
        "image": "https://i.pinimg.com/564x/dd/59/70/dd5970910eab4b49db2d4925be9ff3d3.jpg",
        "price": 6499,
        "description": "Elegant pleated midi skirt in a vibrant red color. Features an elastic waistband for comfort.",
        "category": "women"
      },
      {
        "title": "Men's Hooded Sweatshirt",
        "image": "https://i.pinimg.com/enabled/564x/95/00/84/950084ac4dc0f1949ec90b1cdbe91398.jpg",
        "price": 5499,
        "description": "Comfortable hooded sweatshirt in heather gray. Perfect for casual wear or workouts.",
        "category": "men"
      },
      {
        "title": "Women's Strappy Sandals",
        "image": "https://i.pinimg.com/564x/b0/ba/64/b0ba649b9e90200181e9e60b1bc23905.jpg",
        "price": 7999,
        "description": "Elegant strappy sandals with a low heel. Versatile for both casual and dressy occasions.",
        "category": "women"
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
