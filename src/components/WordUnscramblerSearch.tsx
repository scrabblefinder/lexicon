import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useWords } from "@/services/wordService";

export const WordUnscramblerSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Record<number, string[]>>({});
  const { toast } = useToast();
  const { data: words } = useWords();

  const unscrambleWords = (letters: string) => {
    if (!words) return {};

    const searchLetters = letters.toLowerCase().split('').sort().join('');
    const searchLength = letters.length;
    
    // Group possible words by their length
    const possibleWords = words.reduce<Record<number, string[]>>((acc, word) => {
      // Only consider words that could be made from our letters
      const wordLetters = word.toLowerCase().split('').sort().join('');
      const wordLength = word.length;
      
      // Check if all letters in this word can be found in our search letters
      if (wordLength <= searchLength) {
        let searchCopy = searchLetters;
        let isValid = true;
        
        for (const letter of wordLetters) {
          if (!searchCopy.includes(letter)) {
            isValid = false;
            break;
          }
          searchCopy = searchCopy.replace(letter, '');
        }
        
        if (isValid) {
          if (!acc[wordLength]) {
            acc[wordLength] = [];
          }
          acc[wordLength].push(word);
        }
      }
      
      return acc;
    }, {});

    // Sort words within each length group
    Object.keys(possibleWords).forEach(length => {
      possibleWords[Number(length)].sort();
    });

    return possibleWords;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      toast({
        title: "Please enter letters",
        description: "Enter a set of letters to find possible words.",
        variant: "destructive",
      });
      return;
    }
    
    const unscrambled = unscrambleWords(searchTerm);
    console.log(`Found words from "${searchTerm}":`, unscrambled);
    setResults(unscrambled);
  };

  return (
    <div className="relative bg-primary py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-montserrat text-6xl font-bold text-white leading-tight">
            Word Unscrambler
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Enter a set of letters to find all possible words that can be made from them.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter letters (e.g., LETTERS)..."
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
              Find Words
            </button>

            {Object.keys(results).length > 0 && (
              <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Found Words:</h2>
                {Object.entries(results)
                  .sort(([a], [b]) => parseInt(b) - parseInt(a))
                  .map(([length, words]) => (
                    <div key={length} className="mb-6">
                      <h3 className="text-lg font-medium mb-3">{length} Letters ({words.length} words)</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {words.map((word, index) => (
                          <div key={index} className="bg-white p-3 rounded-lg shadow text-center">
                            {word}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};