import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import type { Product } from "@shared/schema";

export default function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { data: products = [], isLoading } = useProducts(activeFilter);
  const { addToCart, isAdding } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    addToCart({ productId: product.id });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-orange-500 mb-4 block">Collection</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Complete</span>
            <span className="text-white"> Beauty System</span>
          </h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {PRODUCT_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full glass-effect transition-all duration-300 hover-scale text-sm font-medium ${
                activeFilter === category.id
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-gray-300 hover:border-orange-500"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-effect rounded-2xl overflow-hidden">
                <div className="w-full h-64 bg-gray-800 animate-pulse"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-800 rounded w-2/3 animate-pulse"></div>
                  <div className="h-10 bg-gray-800 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative glass-effect rounded-2xl overflow-hidden hover:border-orange-500 transition-all duration-300 hover-scale"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  {product.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-lg font-bold gradient-text">${product.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex text-orange-500 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star${
                            i < Math.floor(parseFloat(product.rating)) ? "" : "-half-alt"
                          }`}
                        ></i>
                      ))}
                      <span className="ml-2 text-gray-400">({product.reviewCount})</span>
                    </div>
                    <button className="p-2 hover:bg-orange-500 hover:bg-opacity-20 rounded-lg transition-colors duration-300">
                      <i className="far fa-heart text-orange-500"></i>
                    </button>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={isAdding || !product.inStock}
                    className="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {!product.inStock ? "Out of Stock" : isAdding ? "Adding..." : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {products.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-transparent border-2 border-orange-500 text-white rounded-full font-semibold hover:bg-orange-500 hover:bg-opacity-20 transition-all duration-300 hover-scale">
              <i className="fas fa-plus mr-2"></i>
              Load More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
