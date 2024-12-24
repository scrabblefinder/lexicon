import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const AnagramSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const { toast } = useToast();

  const findAnagrams = (word: string) => {
    // This is a simple implementation. In a real app, you'd want to use a proper word dictionary
    // and a more sophisticated algorithm
    const letters = word.toLowerCase().split("").sort().join("");
    const isWildcard = word.includes("?");
    
    // For demo purposes, returning some sample anagrams
    // In a real implementation, you would:
    // 1. Use a proper word dictionary
    // 2. Handle wildcards properly
    // 3. Implement proper anagram finding algorithm
    const sampleResults = [
      "sample",
      "anagram",
      "result",
      "demo",
    ];
    
    return sampleResults;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      toast({
        title: "Please enter a word",
        description: "Enter a word to find its anagrams. Use ? for unknown letters.",
        variant: "destructive",
      });
      return;
    }
    
    const anagrams = findAnagrams(searchTerm);
    setResults(anagrams);
  };

  return (
    <div className="relative bg-primary py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-montserrat text-6xl font-bold text-white leading-tight">
            Anagram Solver
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Enter a word to find all possible anagrams. Use ? as wildcards for unknown letters.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter a word (e.g., listen or l?sten)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-xl text-primary bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-secondary placeholder:text-gray-500 h-[52px]"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Find Anagrams
            </button>

            {results.length > 0 && (
              <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Found {results.length} Anagrams:</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {results.map((word, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow text-center">
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};