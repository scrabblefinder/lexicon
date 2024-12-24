import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { useWords, filterWordsByStartingLetter, filterWordsByEndingLetter, filterWordsByContainingLetter, filterWordsByLength } from "@/services/wordService";
import { Skeleton } from "@/components/ui/skeleton";

interface WordListPageProps {
  type: "starting" | "ending" | "containing" | "length";
}

const WordListPage = ({ type }: WordListPageProps) => {
  const { letter, length } = useParams();
  const { data: words, isLoading } = useWords();

  const getFilteredWords = () => {
    if (!words) return { words: [], total: 0 };

    switch (type) {
      case "starting":
        return filterWordsByStartingLetter(words, letter!);
      case "ending":
        return filterWordsByEndingLetter(words, letter!);
      case "containing":
        return filterWordsByContainingLetter(words, letter!);
      case "length":
        return filterWordsByLength(words, parseInt(length!));
      default:
        return { words: [], total: 0 };
    }
  };

  const { words: filteredWords, total } = getFilteredWords();

  const getTitle = () => {
    switch (type) {
      case "starting":
        return `Words Starting With '${letter?.toUpperCase()}'`;
      case "ending":
        return `Words Ending With '${letter?.toUpperCase()}'`;
      case "containing":
        return `Words Containing '${letter?.toUpperCase()}'`;
      case "length":
        return `${length}-Letter Words`;
      default:
        return "Word List";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-montserrat font-bold mb-8 text-center">
          {getTitle()}
        </h1>
        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-full" />
            ))}
          </div>
        ) : (
          <div>
            <p className="text-lg mb-6 text-center text-gray-600">
              Found {total} words
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredWords.map((word, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordListPage;