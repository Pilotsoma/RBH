export type MenuCategory =
  | "Biryani"
  | "Curries"
  | "Appetizers"
  | "Seafood"
  | "Breads"
  | "Rice"
  | "Drinks"
  | "Desserts";

export interface MenuItemData {
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  spicy: boolean;
  vegetarian: boolean;
  image?: string;
}

// Biryani first — it's what they're known for
export const MENU_CATEGORIES: MenuCategory[] = [
  "Biryani",
  "Curries",
  "Appetizers",
  "Seafood",
  "Breads",
  "Rice",
  "Drinks",
  "Desserts",
];

// Real Royal Biryani House photos where available, curated Unsplash for the rest
const RBH = "https://royalbiryanihouse.com/wp-content/uploads";
const US = "https://images.unsplash.com/photo";

export const SEED_MENU: MenuItemData[] = [
  // ── Biryani ────────────────────────────────────────────────
  {
    name: "Chicken Dum Biryani",
    description: "Aromatic basmati rice slow-cooked with tender chicken in the traditional Hyderabadi dum style",
    price: 18.99,
    category: "Biryani",
    spicy: true,
    vegetarian: false,
    image: `${RBH}/2025/09/Craving-Hyderabadi-Biryani-Discover-Royal-Taste-in-Bothell-Katy-Lake-Stevens-1.webp`,
  },
  {
    name: "Goat Biryani",
    description: "Slow-cooked goat meat layered with fragrant saffron rice and fried onions",
    price: 21.99,
    category: "Biryani",
    spicy: true,
    vegetarian: false,
    image: `${RBH}/2026/02/Why-Goat-Dum-Biryani-Is-a-Must-Try-for-True-Biryani-Lovers-at-Royal-Biryani-House.webp`,
  },
  {
    name: "Bezawada Boneless Chicken Biryani",
    description: "Boneless chicken cooked in a Vijayawada-style spiced masala over basmati rice",
    price: 20.99,
    category: "Biryani",
    spicy: true,
    vegetarian: false,
    image: `${RBH}/2025/12/2-2.png`,
  },
  {
    name: "Egg Biryani",
    description: "Fluffy basmati rice cooked with boiled eggs, whole spices, and caramelized onions",
    price: 15.99,
    category: "Biryani",
    spicy: false,
    vegetarian: false,
    image: `${RBH}/2025/09/Egg-Biryani-Lovers-Rejoice-Discover-the-Perfect-Blend-of-Spice-Flavour-at-Royal-Biryani-House.webp`,
  },
  {
    name: "Vegetable Biryani",
    description: "Fragrant basmati rice cooked with seasonal vegetables and whole spices",
    price: 14.99,
    category: "Biryani",
    spicy: false,
    vegetarian: true,
    image: `${US}-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=600&q=80`,
  },

  // ── Curries ────────────────────────────────────────────────
  {
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato-butter sauce — a crowd favorite",
    price: 17.99,
    category: "Curries",
    spicy: false,
    vegetarian: false,
    image: `${US}-1588166524542-b1e27a3b09e0?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Neelgiri Mutton Curry",
    description: "Slow-cooked mutton in a vibrant green herb sauce — a Hyderabadi specialty",
    price: 22.99,
    category: "Curries",
    spicy: true,
    vegetarian: false,
    image: `${RBH}/2026/02/Why-Andhra-Goat-Curry-Is-a-Must-Try-for-True-Spice-Lovers-at-Royal-Biryani-House-1.webp`,
  },
  {
    name: "Chicken Tikka Masala",
    description: "Grilled chicken tikka simmered in a spiced masala gravy with cream",
    price: 17.99,
    category: "Curries",
    spicy: false,
    vegetarian: false,
    image: `${US}-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Lamb Tikka Masala",
    description: "Tender lamb pieces in a robust masala sauce with fresh herbs",
    price: 20.99,
    category: "Curries",
    spicy: false,
    vegetarian: false,
    image: `${US}-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Kofta Curry",
    description: "Spiced minced meat balls simmered in a rich onion-tomato gravy",
    price: 17.99,
    category: "Curries",
    spicy: true,
    vegetarian: false,
    image: `${US}-1546833998-877b37c2e8de?auto=format&fit=crop&w=600&q=80`,
  },

  // ── Appetizers ─────────────────────────────────────────────
  {
    name: "Samosa (2 pcs)",
    description: "Crispy pastry filled with spiced potatoes and peas, served with mint chutney",
    price: 5.99,
    category: "Appetizers",
    spicy: false,
    vegetarian: true,
    image: `${US}-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Paneer Tikka",
    description: "Marinated cottage cheese grilled in a tandoor oven with peppers and onions",
    price: 14.99,
    category: "Appetizers",
    spicy: false,
    vegetarian: true,
    image: `${US}-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Chicken Pepper Fry",
    description: "Tender chicken pieces dry-fried with whole black pepper and aromatic spices",
    price: 15.99,
    category: "Appetizers",
    spicy: true,
    vegetarian: false,
    image: `${US}-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Warangal Chicken Fry",
    description: "Bone-in chicken pieces marinated in a Telangana-style spice blend and deep fried",
    price: 16.99,
    category: "Appetizers",
    spicy: true,
    vegetarian: false,
    image: `${US}-1626082927389-6cd097cee6f7?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Apollo Fish",
    description: "Crispy fried fish tossed in a fiery Hyderabadi sauce with curry leaves",
    price: 15.99,
    category: "Appetizers",
    spicy: true,
    vegetarian: false,
    image: `${US}-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Gobi Manchurian",
    description: "Crispy cauliflower tossed in a tangy Indo-Chinese sauce",
    price: 12.99,
    category: "Appetizers",
    spicy: true,
    vegetarian: true,
    image: `${US}-1645177628172-e8fdeb071bac?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Crispy Corn",
    description: "Golden fried corn kernels tossed with herbs, spices, and curry leaves",
    price: 10.99,
    category: "Appetizers",
    spicy: true,
    vegetarian: true,
    image: `${US}-1551754655-8e63e05d5fb8?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Corn Soup",
    description: "Creamy sweet corn soup with a touch of ginger and green chilies",
    price: 7.99,
    category: "Appetizers",
    spicy: false,
    vegetarian: true,
    image: `${US}-1547592180-85f173d888a2?auto=format&fit=crop&w=600&q=80`,
  },

  // ── Seafood ────────────────────────────────────────────────
  {
    name: "Pepper Shrimp",
    description: "Juicy shrimp tossed with freshly cracked black pepper, garlic, and curry leaves",
    price: 19.99,
    category: "Seafood",
    spicy: true,
    vegetarian: false,
    image: `${US}-1565680018434-b0f82b1e5d34?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Garlic Prawns",
    description: "Large prawns sautéed in garlic butter with herbs and a squeeze of lemon",
    price: 21.99,
    category: "Seafood",
    spicy: false,
    vegetarian: false,
    image: `${US}-1543362906-acfc16c67564?auto=format&fit=crop&w=600&q=80`,
  },

  // ── Breads ─────────────────────────────────────────────────
  {
    name: "Garlic Naan",
    description: "Soft leavened bread baked in a tandoor oven, topped with garlic and butter",
    price: 3.99,
    category: "Breads",
    spicy: false,
    vegetarian: true,
    image: `${US}-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Plain Naan",
    description: "Classic soft and fluffy bread baked fresh in a tandoor oven",
    price: 2.99,
    category: "Breads",
    spicy: false,
    vegetarian: true,
    image: `${US}-1513639776629-8b1109cac9d9?auto=format&fit=crop&w=600&q=80`,
  },

  // ── Rice ───────────────────────────────────────────────────
  {
    name: "Rice Pilaf with Yogurt",
    description: "Light fragrant basmati rice served with cool raita yogurt and cucumber",
    price: 9.99,
    category: "Rice",
    spicy: false,
    vegetarian: true,
    image: `${US}-1516714435082-f33b573b9e33?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Chinta Chiguru Paneer Fried Rice",
    description: "Basmati rice wok-fried with paneer and young tamarind leaves — a Telugu delicacy",
    price: 14.99,
    category: "Rice",
    spicy: true,
    vegetarian: true,
    image: `${US}-1603133872878-684f08796aa9?auto=format&fit=crop&w=600&q=80`,
  },

  // ── Drinks ─────────────────────────────────────────────────
  {
    name: "Mango Lassi",
    description: "Thick yogurt blended with sweet Alphonso mango pulp",
    price: 5.99,
    category: "Drinks",
    spicy: false,
    vegetarian: true,
    image: `${US}-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Irani Chai",
    description: "Rich, creamy Hyderabadi-style tea brewed with condensed milk and spices",
    price: 4.99,
    category: "Drinks",
    spicy: false,
    vegetarian: true,
    image: `${US}-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Sweet Lassi",
    description: "Chilled yogurt drink sweetened with sugar and cardamom",
    price: 4.99,
    category: "Drinks",
    spicy: false,
    vegetarian: true,
    image: `${US}-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80`,
  },

  // ── Desserts ───────────────────────────────────────────────
  {
    name: "Gulab Jamun",
    description: "Soft milk-solid dumplings soaked in rose-flavored sugar syrup",
    price: 6.99,
    category: "Desserts",
    spicy: false,
    vegetarian: true,
    image: `${US}-1611293388250-580b08c4a145?auto=format&fit=crop&w=600&q=80`,
  },
  {
    name: "Jalebi Falooda",
    description: "Crispy jalebis served over chilled falooda noodles with rose milk and ice cream",
    price: 8.99,
    category: "Desserts",
    spicy: false,
    vegetarian: true,
    image: `${US}-1666568516775-24e3ea9a0668?auto=format&fit=crop&w=600&q=80`,
  },
];
