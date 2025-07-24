import { products, categories, newsletters, cartItems, type Product, type InsertProduct, type Category, type InsertCategory, type Newsletter, type InsertNewsletter, type CartItem, type InsertCartItem } from "@shared/schema";

export interface IStorage {
  // Products
  getAllProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Categories
  getAllCategories(): Promise<Category[]>;
  createCategory(category: InsertCategory): Promise<Category>;

  // Newsletter
  subscribeToNewsletter(email: string): Promise<Newsletter>;
  getNewsletterSubscription(email: string): Promise<Newsletter | undefined>;

  // Cart
  getCartItems(sessionId: string): Promise<(CartItem & { product: Product })[]>;
  addToCart(item: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: number, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private categories: Map<number, Category>;
  private newsletters: Map<number, Newsletter>;
  private cartItems: Map<number, CartItem>;
  private currentProductId: number;
  private currentCategoryId: number;
  private currentNewsletterId: number;
  private currentCartId: number;

  constructor() {
    this.products = new Map();
    this.categories = new Map();
    this.newsletters = new Map();
    this.cartItems = new Map();
    this.currentProductId = 1;
    this.currentCategoryId = 1;
    this.currentNewsletterId = 1;
    this.currentCartId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed categories
    const categoryData: InsertCategory[] = [
      { name: "Serums", slug: "serums", description: "Advanced skincare serums" },
      { name: "Moisturizers", slug: "moisturizers", description: "Hydrating moisturizers" },
      { name: "Cleansers", slug: "cleansers", description: "Gentle cleansing products" },
      { name: "Treatments", slug: "treatments", description: "Specialized treatments" },
    ];

    categoryData.forEach(cat => this.createCategory(cat));

    // Seed products
    const productData: InsertProduct[] = [
      {
        name: "Luminous Serum",
        description: "Our breakthrough formula harnesses bio-photonic technology to activate your skin's natural luminosity. Clinically proven to reduce visible signs of aging while providing 24-hour hydration.",
        price: "189.00",
        category: "serums",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
        rating: "4.9",
        reviewCount: 127,
        featured: true,
        inStock: true,
        tags: ["photonic", "glow", "advanced"],
      },
      {
        name: "Hydra-Boost Moisturizer",
        description: "72-hour hydration with molecular water technology for all-day comfort.",
        price: "156.00",
        category: "moisturizers",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        rating: "4.8",
        reviewCount: 89,
        featured: false,
        inStock: true,
        tags: ["hydration", "molecular", "comfort"],
      },
      {
        name: "Pure Clarity Cleanser",
        description: "Gentle yet effective cleansing with photonic purification technology.",
        price: "89.00",
        category: "cleansers",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        rating: "4.7",
        reviewCount: 156,
        featured: false,
        inStock: true,
        tags: ["gentle", "purification", "photonic"],
      },
      {
        name: "Quantum Recovery Mask",
        description: "Overnight renewal with bio-luminous complex for transformative results.",
        price: "245.00",
        category: "treatments",
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        rating: "4.9",
        reviewCount: 203,
        featured: true,
        inStock: true,
        tags: ["recovery", "overnight", "bio-luminous"],
      },
      {
        name: "Cellular Renewal Serum",
        description: "Next-generation peptides for visible anti-aging results in 30 days.",
        price: "167.00",
        category: "serums",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        rating: "4.6",
        reviewCount: 98,
        featured: false,
        inStock: true,
        tags: ["peptides", "anti-aging", "cellular"],
      },
      {
        name: "Luminous Eye Complex",
        description: "Targeted eye treatment with light-activated ingredients for bright, youthful eyes.",
        price: "134.00",
        category: "treatments",
        image: "https://images.unsplash.com/photo-1631730647334-7c4b9b9b3b7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        rating: "4.8",
        reviewCount: 145,
        featured: false,
        inStock: true,
        tags: ["eye", "luminous", "light-activated"],
      },
    ];

    productData.forEach(product => this.createProduct(product));
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category,
    );
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.featured,
    );
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { 
      ...insertProduct, 
      id,
      featured: insertProduct.featured ?? false,
      rating: insertProduct.rating ?? "0",
      reviewCount: insertProduct.reviewCount ?? 0,
      inStock: insertProduct.inStock ?? true,
      tags: insertProduct.tags ?? null,
    };
    this.products.set(id, product);
    return product;
  }

  async getAllCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = this.currentCategoryId++;
    const category: Category = { 
      ...insertCategory, 
      id,
      description: insertCategory.description ?? null,
    };
    this.categories.set(id, category);
    return category;
  }

  async subscribeToNewsletter(email: string): Promise<Newsletter> {
    const existing = await this.getNewsletterSubscription(email);
    if (existing) {
      return existing;
    }

    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = {
      id,
      email,
      subscribedAt: new Date(),
      active: true,
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterSubscription(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === email,
    );
  }

  async getCartItems(sessionId: string): Promise<(CartItem & { product: Product })[]> {
    const items = Array.from(this.cartItems.values()).filter(
      (item) => item.sessionId === sessionId,
    );
    
    return items.map(item => {
      const product = this.products.get(item.productId);
      if (!product) throw new Error("Product not found");
      return { ...item, product };
    });
  }

  async addToCart(insertItem: InsertCartItem): Promise<CartItem> {
    const id = this.currentCartId++;
    const cartItem: CartItem = { 
      ...insertItem, 
      id,
      quantity: insertItem.quantity ?? 1,
    };
    this.cartItems.set(id, cartItem);
    return cartItem;
  }

  async updateCartItem(id: number, quantity: number): Promise<CartItem | undefined> {
    const item = this.cartItems.get(id);
    if (!item) return undefined;
    
    const updated = { ...item, quantity };
    this.cartItems.set(id, updated);
    return updated;
  }

  async removeFromCart(id: number): Promise<boolean> {
    return this.cartItems.delete(id);
  }
}

export const storage = new MemStorage();
