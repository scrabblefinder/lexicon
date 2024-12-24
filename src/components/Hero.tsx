import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-primary py-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="font-montserrat text-5xl font-bold mb-6 text-center">
          Find the Perfect Words
        </h1>
        <p className="text-xl mb-8 text-center max-w-2xl mx-auto">
          Explore our comprehensive collection of word lists. Whether you're looking for words that start with a specific letter, end with certain characters, or match a particular length - we've got you covered.
        </p>
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for words..."
            className="w-full px-6 py-4 rounded-full text-primary focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>
  );
};