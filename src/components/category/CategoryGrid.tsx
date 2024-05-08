"use client";
import * as React from "react";
import GetCategories from "@/service/getCategories";
import { CategoryCard } from "./CategoryCard";

interface CategoryType {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    image: string;
    title: string;
  }[];
}

const MAX_VISIBLE_CARDS = 10;

export function CategoryGrid() {
  const [categories, setCategories] = React.useState<CategoryType | null>(null);

  React.useEffect(() => {
    GetCategories().then(setCategories).catch(console.error);
  }, []);


  const visibleCategories = categories?.results.slice(0, MAX_VISIBLE_CARDS) || [];

  return (
    <div className="container">
      <h1 className="font-semibold text-lg pt-6">Top Categories Of The Month</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-6">
      {visibleCategories.map((category) => (
        <CategoryCard key={category.id} title={category.title} image={category.image} />
      ))}
    </div>
    </div>
  );
}
