import { Home, Puzzle, Braces } from "lucide-react";
import { CategoryCard } from "./CategoryCard";

export const Categories = () => {
  const categories = [
    {
      title: "Word Finder",
      description: "Find words based on specific criteria",
      Icon: Home,
      href: "/",
    },
    {
      title: "Anagram Solver",
      description: "Find all possible anagrams of a word",
      Icon: Puzzle,
      href: "/anagram-solver",
    },
    {
      title: "Word Unscrambler",
      description: "Unscramble letters into possible words",
      Icon: Braces,
      href: "/word-unscrambler",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
          Explore Word Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};