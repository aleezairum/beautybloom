import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";

export function useProducts(category?: string, featured?: boolean) {
  return useQuery<Product[]>({
    queryKey: ["/api/products", { category, featured }],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (category && category !== "all") {
        params.append("category", category);
      }
      if (featured) {
        params.append("featured", "true");
      }
      
      const response = await fetch(`/api/products?${params.toString()}`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    },
  });
}

export function useProduct(id: number) {
  return useQuery<Product>({
    queryKey: ["/api/products", id],
    queryFn: async () => {
      const response = await fetch(`/api/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      return response.json();
    },
    enabled: !!id,
  });
}
