import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { useWords, filterWordsByStartingLetter, filterWordsByEndingLetter, filterWordsByContainingLetter, filterWordsByLength } from "@/services/wordService";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

  const getMetaDescription = () => {
    switch (type) {
      case "starting":
        return `Explore our comprehensive list of words that start with the letter '${letter?.toUpperCase()}'. Perfect for writers, students, and word enthusiasts.`;
      case "ending":
        return `Discover words that end with the letter '${letter?.toUpperCase()}'. Ideal for rhyming and creative writing.`;
      case "containing":
        return `Find words containing the letter '${letter?.toUpperCase()}'. Great for word puzzles and vocabulary building.`;
      case "length":
        return `Browse our collection of ${length}-letter words. Perfect for word games and expanding your vocabulary.`;
      default:
        return "Explore our comprehensive word lists organized by letters and length.";
    }
  };

  useEffect(() => {
    const title = getTitle();
    const description = getMetaDescription();
    
    document.title = `${title} | Word-List.com`;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', `${title} | Word-List.com`);
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);
  }, [type, letter, length]);

  const groupWordsByLength = (words: string[]) => {
    const grouped = words.reduce((acc: { [key: number]: string[] }, word) => {
      const length = word.length;
      if (!acc[length]) {
        acc[length] = [];
      }
      acc[length].push(word);
      return acc;
    }, {});
    
    return Object.entries(grouped)
      .sort(([a], [b]) => parseInt(a) - parseInt(b))
      .map(([length, words]) => ({
        length: parseInt(length),
        words: words.sort(),
        count: words.length
      }));
  };

  const { words: filteredWords, total } = getFilteredWords();
  const groupedWords = groupWordsByLength(filteredWords);

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
            <div className="space-y-8">
              {groupedWords.map(({ length, words, count }) => (
                <div key={length} className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    {length} Letters ({count} words)
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {words.map((word, index) => (
                      <div
                        key={index}
                        className="p-2 bg-gray-50 rounded text-sm hover:bg-gray-100 transition-colors"
                      >
                        {word}
                      </div>
                    ))}
                  </div>
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
