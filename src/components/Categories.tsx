import { ArrowDown, ArrowUp, List, BookOpen } from "lucide-react";
import { CategoryCard } from "./CategoryCard";

export const Categories = () => {
  const categories = [
    {
      title: "Words Starting With",
      description: "Find words that begin with specific letters",
      Icon: ArrowDown,
      href: "/words-starting-with",
    },
    {
      title: "Words Ending With",
      description: "Discover words with specific endings",
      Icon: ArrowUp,
      href: "/words-ending-with",
    },
    {
      title: "Words Containing",
      description: "Search for words with specific letters",
      Icon: List,
      href: "/words-containing",
    },
    {
      title: "Words by Length",
      description: "Browse words by their character count",
      Icon: BookOpen,
      href: "/words-by-length",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
          Explore Word Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};