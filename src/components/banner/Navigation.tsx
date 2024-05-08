"use client"
import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import GetCategories from "@/service/getCategories";

interface CategoryType {
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

const INITIAL_VISIBLE_CATEGORIES = 7;

export function Navigation() {
  const [categories, setCategories] = React.useState<CategoryType | null>(null);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    GetCategories().then(setCategories).catch(console.error);
  }, []);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const visibleCategories = categories
    ? expanded
      ? categories.results
      : categories.results.slice(0, INITIAL_VISIBLE_CATEGORIES)
    : [];

  return (
    <Accordion type="multiple" className="bg-white w-[250px] p-4">
      {visibleCategories.map((category) => (
        <AccordionItem key={category.id} className="hover:text-yellow-500 no-underline" value={`category-${category.id}`}>
          <AccordionTrigger>{category.title}</AccordionTrigger>
          <AccordionContent>
            <ul className="grid gap-3 p-3">
              {category.children.map((child) => (
                <ListItem key={child.id} href={`/category/${child.id}`} title={child.title}>
                </ListItem>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
      {categories && categories.results.length > INITIAL_VISIBLE_CATEGORIES && (
        <div className="mt-2">
          <button
          className="hover:underline hover:text-yellow-500"
            onClick={toggleExpanded}>
            {expanded ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </Accordion>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ href, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        href={href}
        className="p-3 rounded-md hover:text-yellow-500 block"
        {...props}
      >
        <div className="font-medium">{title}</div>
        {children}
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";
