import Product3DViewer from "@/components/3d/Product3DViewer";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

export default function ProductShowcase() {
  const { data: featuredProducts = [] } = useProducts(undefined, true);
  const { addToCart, isAdding } = useCart();
  const { toast } = useToast();

  const featuredProduct = featuredProducts[0];

  const handleAddToCart = () => {
    if (!featuredProduct) return;
    
    addToCart({ productId: featuredProduct.id });
    toast({
      title: "Added to cart",
      description: `${featuredProduct.name} has been added to your cart.`,
    });
  };

  if (!featuredProduct) {
    return (
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400">Loading featured product...</p>
          </div>
        </div>
      </section>
    );
  }

  const features = [
    {
      icon: "fas fa-bolt",
      title: "Instant Radiance",
      description: "Visible glow in 30 seconds"
    },
    {
      icon: "fas fa-shield-alt",
      title: "72hr Protection",
      description: "Smart moisture technology"
    },
    {
      icon: "fas fa-atom",
      title: "Nano Formula",
      description: "Molecular absorption"
    },
    {
      icon: "fas fa-leaf",
      title: "Clean Beauty",
      description: "100% sustainable ingredients"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <span className="text-sm uppercase tracking-widest text-orange-500 mb-4 block">
                Flagship Product
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">{featuredProduct.name.split(' ').slice(0, -1).join(' ')}{" "}</span>
                <span className="text-white">{featuredProduct.name.split(' ').slice(-1)}</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                {featuredProduct.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl glass-effect hover:border-orange-500 transition-all duration-300 hover-scale group"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-500 bg-opacity-10 flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-all duration-300">
                    <i className={`${feature.icon} text-orange-500 text-xl`}></i>
                  </div>
                  <h3 className="font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="px-8 py-3 bg-transparent border border-orange-500 text-white rounded-full font-semibold hover:bg-orange-500 hover:bg-opacity-10 transition-all duration-300 hover-scale">
                Explore Ingredient
              </button>
            </div>
          </div>

          {/* 3D Product Viewer */}
          <div id="product-container">
            <Product3DViewer className="w-full h-96 lg:h-[500px] rounded-2xl product-container" />
            
          </div>
        </div>
      </div>
    </section>
  );
}
