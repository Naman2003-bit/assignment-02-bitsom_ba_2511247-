
// Part 2: NoSQL — MongoDB Operations (OP1 to OP5)
// Database: Product_Catalog
// ============================================================

use("Product_Catalog");

// OP1: insertMany() — insert all 3 documents from sample_documents.json
db.products.insertMany([
  {
    product_id: "PROD001",
    name: "Samsung Galaxy S24",
    category: "Electronics",
    price: 79999,
    brand: "Samsung",
    in_stock: true,
    specs: {
      battery: "4000mAh",
      storage: "128GB",
      ram: "8GB",
      display: "6.2 inch AMOLED"
    },
    warranty_years: 2,
    voltage: "5V",
    ratings: { average: 4.5, total_reviews: 2341 }
  },
  {
    product_id: "PROD002",
    name: "Men's Slim Fit Jacket",
    category: "Clothing",
    price: 2499,
    brand: "H&M",
    in_stock: true,
    specs: {
      material: "Polyester",
      sizes_available: ["S", "M", "L", "XL"],
      color: ["Black", "Navy Blue"],
      gender: "Men",
      fit_type: "Slim Fit"
    },
    care_instructions: "Machine wash cold",
    season: "Winter",
    ratings: { average: 4.2, total_reviews: 891 }
  },
  {
    product_id: "PROD003",
    name: "Aashirvaad Atta 10kg",
    category: "Groceries",
    price: 450,
    brand: "Aashirvaad",
    in_stock: true,
    specs: {
      weight_kg: 10,
      ingredients: ["Whole Wheat"],
      nutritional_info: {
        calories_per_100g: 340,
        protein_g: 12,
        carbs_g: 70,
        fat_g: 2
      }
    },
    expiry_date: "2025-12-31",
    storage_instructions: "Store in cool dry place",
    ratings: { average: 4.7, total_reviews: 5621 }
  }
]);


// OP2: find() — retrieve all Electronics products with price > 20000
db.products.find(
  { category: "Electronics", price: { $gt: 20000 } }
);


// OP3: find() — retrieve all Groceries expiring before 2025-01-01
db.products.find(
  { category: "Groceries", expiry_date: { $lt: new Date("2025-01-01") } }
);


// OP4: updateOne() — add a "discount_percent" field to a specific product
db.products.updateOne(
  { product_id: "PROD001" },
  { $set: { discount_percent: 10 } }
);


// OP5: createIndex() — create an index on category field
db.products.createIndex({ category: 1 });
// category field is used in most queries — index makes search faster
