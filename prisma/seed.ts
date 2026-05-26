import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import * as dotenv from "dotenv";

dotenv.config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const db = new PrismaClient({ adapter });

const menuItems = [
  // Appetizers
  { name: "Samosa (2 pcs)", description: "Crispy pastry filled with spiced potatoes and peas, served with mint chutney", price: 5.99, category: "Appetizers", spicy: false, vegetarian: true },
  { name: "Gobi Manchurian", description: "Crispy cauliflower tossed in a tangy Indo-Chinese sauce", price: 12.99, category: "Appetizers", spicy: true, vegetarian: true },
  { name: "Paneer Tikka", description: "Marinated cottage cheese grilled in a tandoor oven with peppers and onions", price: 14.99, category: "Appetizers", spicy: false, vegetarian: true },
  { name: "Crispy Corn", description: "Golden fried corn kernels tossed with herbs, spices, and curry leaves", price: 10.99, category: "Appetizers", spicy: true, vegetarian: true },
  { name: "Corn Soup", description: "Creamy sweet corn soup with a touch of ginger and green chilies", price: 7.99, category: "Appetizers", spicy: false, vegetarian: true },
  { name: "Apollo Fish", description: "Crispy fried fish tossed in a fiery Hyderabadi sauce with curry leaves", price: 15.99, category: "Appetizers", spicy: true, vegetarian: false },
  { name: "Chicken Pepper Fry", description: "Tender chicken pieces dry-fried with whole black pepper and aromatic spices", price: 15.99, category: "Appetizers", spicy: true, vegetarian: false },
  { name: "Warangal Chicken Fry", description: "Bone-in chicken pieces marinated in a Telangana-style spice blend and deep fried", price: 16.99, category: "Appetizers", spicy: true, vegetarian: false },
  // Biryani
  { name: "Chicken Dum Biryani", description: "Aromatic basmati rice slow-cooked with tender chicken in the traditional Hyderabadi dum style", price: 18.99, category: "Biryani", spicy: true, vegetarian: false },
  { name: "Goat Biryani", description: "Slow-cooked goat meat layered with fragrant saffron rice and fried onions", price: 21.99, category: "Biryani", spicy: true, vegetarian: false },
  { name: "Egg Biryani", description: "Fluffy basmati rice cooked with boiled eggs, whole spices, and caramelized onions", price: 15.99, category: "Biryani", spicy: false, vegetarian: false },
  { name: "Vegetable Biryani", description: "Fragrant basmati rice cooked with seasonal vegetables and whole spices", price: 14.99, category: "Biryani", spicy: false, vegetarian: true },
  { name: "Bezawada Boneless Chicken Biryani", description: "Boneless chicken cooked in a Vijayawada-style spiced masala over basmati rice", price: 20.99, category: "Biryani", spicy: true, vegetarian: false },
  // Curries
  { name: "Butter Chicken", description: "Tender chicken in a rich, creamy tomato-butter sauce — a crowd favorite", price: 17.99, category: "Curries", spicy: false, vegetarian: false },
  { name: "Chicken Tikka Masala", description: "Grilled chicken tikka simmered in a spiced masala gravy with cream", price: 17.99, category: "Curries", spicy: false, vegetarian: false },
  { name: "Lamb Tikka Masala", description: "Tender lamb pieces in a robust masala sauce with fresh herbs", price: 20.99, category: "Curries", spicy: false, vegetarian: false },
  { name: "Neelgiri Mutton Curry", description: "Slow-cooked mutton in a vibrant green herb sauce — a Hyderabadi specialty", price: 22.99, category: "Curries", spicy: true, vegetarian: false },
  { name: "Kofta Curry", description: "Spiced minced meat balls simmered in a rich onion-tomato gravy", price: 17.99, category: "Curries", spicy: true, vegetarian: false },
  // Seafood
  { name: "Pepper Shrimp", description: "Juicy shrimp tossed with freshly cracked black pepper, garlic, and curry leaves", price: 19.99, category: "Seafood", spicy: true, vegetarian: false },
  { name: "Garlic Prawns", description: "Large prawns sautéed in garlic butter with herbs and a squeeze of lemon", price: 21.99, category: "Seafood", spicy: false, vegetarian: false },
  // Breads
  { name: "Garlic Naan", description: "Soft leavened bread baked in a tandoor oven, topped with garlic and butter", price: 3.99, category: "Breads", spicy: false, vegetarian: true },
  { name: "Plain Naan", description: "Classic soft and fluffy bread baked fresh in a tandoor oven", price: 2.99, category: "Breads", spicy: false, vegetarian: true },
  // Rice
  { name: "Rice Pilaf with Yogurt", description: "Light fragrant basmati rice served with cool raita yogurt and cucumber", price: 9.99, category: "Rice", spicy: false, vegetarian: true },
  { name: "Chinta Chiguru Paneer Fried Rice", description: "Basmati rice wok-fried with paneer and young tamarind leaves — a Telugu delicacy", price: 14.99, category: "Rice", spicy: true, vegetarian: true },
  // Drinks
  { name: "Irani Chai", description: "Rich, creamy Hyderabadi-style tea brewed with condensed milk and spices", price: 4.99, category: "Drinks", spicy: false, vegetarian: true },
  { name: "Mango Lassi", description: "Thick yogurt blended with sweet Alphonso mango pulp", price: 5.99, category: "Drinks", spicy: false, vegetarian: true },
  { name: "Sweet Lassi", description: "Chilled yogurt drink sweetened with sugar and cardamom", price: 4.99, category: "Drinks", spicy: false, vegetarian: true },
  // Desserts
  { name: "Jalebi Falooda", description: "Crispy jalebis served over chilled falooda noodles with rose milk and ice cream", price: 8.99, category: "Desserts", spicy: false, vegetarian: true },
  { name: "Gulab Jamun", description: "Soft milk-solid dumplings soaked in rose-flavored sugar syrup", price: 6.99, category: "Desserts", spicy: false, vegetarian: true },
];

async function main() {
  console.log("Seeding menu items...");
  const result = await db.menuItem.createMany({
    data: menuItems,
    skipDuplicates: true,
  });
  console.log(`Seeded ${result.count} menu items.`);
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());
