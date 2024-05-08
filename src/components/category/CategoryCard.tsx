"use client";
import * as React from "react";

interface CategoryCardProps {
  title: string;
  image: string;
}

export function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className=" border p-4 flex items-center gap-2  hover:text-yellow-500 transition-shadow bg-white">
      <img
        src={image}
        alt={title}
        className="w-20 h-20 object-cover rounded"
      />
      <h3>{title}</h3>
    </div>
  );
}
