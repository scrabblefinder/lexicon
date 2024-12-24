import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useWords, filterWordsByStartingLetter, filterWordsByEndingLetter, filterWordsByContainingLetter, filterWordsByLength } from "@/services/wordService";

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

  useEffect(() => {
    let filtered: string[] = [];
    if (type === "starting" && letter) {
      filtered = filterWordsByStartingLetter(words, letter);
    } else if (type === "ending" && letter) {
      filtered = filterWordsByEndingLetter(words, letter);
    } else if (type === "containing" && letter) {
      filtered = filterWordsByContainingLetter(words, letter);
    } else if (type === "length" && length) {
      filtered = filterWordsByLength(words, parseInt(length));
    }
    setFilteredWords(filtered);
  }, [words, type, letter, length]);

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
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg"
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