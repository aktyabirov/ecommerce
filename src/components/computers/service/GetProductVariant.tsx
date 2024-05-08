export interface ProductVariantType {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
      id: number;
      is_available: boolean;
      title: string;
      image: {
        image: string;
        image_id: number;
      };
      product: number;
      attribute_value: [
        number
      ];
      other_detail: string | null;
      price: string;
      price_with_discount: string|null;
      quantity: number;
    }[];
  }
  
  const GetProductVariant = async (): Promise<ProductVariantType> => {
    try {
      const res = await fetch("http://135.181.108.207/api/product-variant-list/");
      if (!res.ok) {
        throw new Error("Failed to fetch product variants");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Failed to get product variants!");
    }
  };
  
  export default GetProductVariant;