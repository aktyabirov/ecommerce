export interface CategoryType {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
      id: number;
      image: string;
      title: string;
      children: {
        id: number;
        image: string;
        title: string;
      }[];
    }[];
  }
  
  const GetCategories = async (): Promise<CategoryType> => {
    try {
      const res = await fetch("http://135.181.108.207/category/");
      if (!res.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Failed to get categories!");
    }
  };
  
  export default GetCategories;