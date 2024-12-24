import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useWords } from "@/services/wordService";

interface WordGroup {
  length: number;
  words: string[];
  count: number;
}

interface WordListPageProps {
  type: "starting" | "ending" | "containing" | "length";
}

const WordListPage = ({ type }: WordListPageProps) => {
  const { letter, length } = useParams();
  const { data: words = [] } = useWords();
  const [filteredWords, setFilteredWords] = useState<string[]>([]);
  const [groupedWords, setGroupedWords] = useState<WordGroup[]>([]);
  const [total, setTotal] = useState(0);
  const [wordLength, setWordLength] = useState<string>("");
  const [endingLetter, setEndingLetter] = useState<string>("");

  useEffect(() => {
    let filtered = [...words];

    if (type === "starting" && letter) {
      filtered = filtered.filter(word => word.toLowerCase().startsWith(letter.toLowerCase()));
    } else if (type === "ending" && letter) {
      filtered = filtered.filter(word => word.toLowerCase().endsWith(letter.toLowerCase()));
    } else if (type === "containing" && letter) {
      filtered = filtered.filter(word => word.toLowerCase().includes(letter.toLowerCase()));
    } else if (type === "length" && length) {
      filtered = filtered.filter(word => word.length === parseInt(length));
    }

    // Apply additional filters
    if (wordLength) {
      filtered = filtered.filter(word => word.length === parseInt(wordLength));
    }
    if (endingLetter) {
      filtered = filtered.filter(word => word.toLowerCase().endsWith(endingLetter.toLowerCase()));
    }

    setFilteredWords(filtered);
  }, [words, type, letter, length, wordLength, endingLetter]);

  useEffect(() => {
    const grouped = filteredWords.reduce<Record<number, string[]>>((acc, word) => {
      const len = word.length;
      if (!acc[len]) acc[len] = [];
      acc[len].push(word);
      return acc;
    }, {});

    const groupedArray = Object.entries(grouped)
      .map(([length, words]) => ({
        length: parseInt(length),
        words,
        count: words.length,
      }))
      .sort((a, b) => a.length - b.length);

    setGroupedWords(groupedArray);
    setTotal(filteredWords.length);

    // Update document title and meta description for SEO
    const pageTitle = getTitle();
    document.title = `${pageTitle} - Word-List.com`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `Browse ${total} ${pageTitle.toLowerCase()}. Perfect for word games, crosswords, and vocabulary building.`);
    }
  }, [filteredWords]);

  const getTitle = () => {
    if (type === "starting" && letter) {
      return `Words Starting With "${letter.toUpperCase()}"`;
    } else if (type === "ending" && letter) {
      return `Words Ending With "${letter.toUpperCase()}"`;
    } else if (type === "containing" && letter) {
      return `Words Containing "${letter.toUpperCase()}"`;
    } else if (type === "length" && length) {
      return `${length}-Letter Words`;
    }
    return "Word List";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-montserrat font-bold mb-8">{getTitle()}</h1>
        
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <Select onValueChange={setWordLength} value={wordLength}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by word length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any length</SelectItem>
                  {[3, 4, 5, 6, 7, 8, 9, 10].map((len) => (
                    <SelectItem key={len} value={len.toString()}>
                      {len} letters
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-1/2">
              <Input
                placeholder="Filter by ending letter"
                value={endingLetter}
                onChange={(e) => setEndingLetter(e.target.value)}
                maxLength={1}
              />
            </div>
          </div>
        </div>

        <p className="text-lg mb-8">
          Found {total} words
        </p>

        {groupedWords.map(({ length, words, count }) => (
          <div key={length} className="mb-8">
            <h2 className="text-2xl font-montserrat font-semibold mb-4">
              {length} Letters ({count} words)
            </h2>
            <div className="flex flex-wrap gap-2">
              {words.map((word) => (
                <span
                  key={word}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default WordListPage;