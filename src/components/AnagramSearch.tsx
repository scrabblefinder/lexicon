import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useWords } from "@/services/wordService";

export const AnagramSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const { toast } = useToast();
  const { data: words } = useWords();

  const findAnagrams = (input: string) => {
    if (!words) return [];

    const searchPattern = input.toLowerCase();
    const hasWildcard = searchPattern.includes('?');
    
    // Sort the letters of the search term (excluding wildcards)
    const sortedSearchLetters = searchPattern
      .replace(/\?/g, '')
      .split('')
      .sort()
      .join('');
    
    const wildcardCount = (searchPattern.match(/\?/g) || []).length;
    const searchLength = searchPattern.length;

    return words.filter(word => {
      // Only consider words of the same length as the search term
      if (word.length !== searchLength) return false;

      if (!hasWildcard) {
        // For non-wildcard searches, simply compare sorted letters
        return word.toLowerCase().split('').sort().join('') === sortedSearchLetters;
      } else {
        // For wildcard searches, we need to check if the known letters match
        const wordLower = word.toLowerCase();
        
        // Check each position where we have a known letter (not a wildcard)
        for (let i = 0; i < searchPattern.length; i++) {
          if (searchPattern[i] !== '?' && searchPattern[i] !== wordLower[i]) {
            return false;
          }
        }

        // If we get here, the known letters match
        // Now verify that the remaining letters could form a valid anagram
        const remainingLetters = wordLower
          .split('')
          .filter((_, index) => searchPattern[index] === '?')
          .sort()
          .join('');

        return remainingLetters.length === wildcardCount;
      }
    });
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
    console.log(`Found ${anagrams.length} anagrams for "${searchTerm}":`, anagrams);
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