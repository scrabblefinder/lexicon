import { useQuery } from "@tanstack/react-query";

const WORD_DATABASE_URL = "https://raw.githubusercontent.com/jeremy-rifkin/Wordlist/refs/heads/master/master.txt";

export interface WordListResponse {
  words: string[];
  total: number;
}

const fetchWords = async (): Promise<string[]> => {
  console.log("Fetching words from:", WORD_DATABASE_URL);
  const response = await fetch(WORD_DATABASE_URL);
  const text = await response.text();
  const words = text.split('\n').filter(word => word.trim().length > 0);
  console.log("Fetched total words:", words.length);
  return words;
};

export const useWords = () => {
  return useQuery({
    queryKey: ['words'],
    queryFn: fetchWords,
  });
};

// Helper function to log filtering results
const logFilterResults = (filterType: string, input: string, results: string[]) => {
  console.log(`Filtering by ${filterType}:`, { input, resultCount: results.length });
};

export const filterWordsByStartingLetter = (words: string[], letter: string): string[] => {
  const filtered = words.filter(word => word.toLowerCase().startsWith(letter.toLowerCase()));
  logFilterResults('starting letter', letter, filtered);
  return filtered;
};

export const filterWordsByEndingLetter = (words: string[], letter: string): string[] => {
  const filtered = words.filter(word => word.toLowerCase().endsWith(letter.toLowerCase()));
  logFilterResults('ending letter', letter, filtered);
  return filtered;
};

export const filterWordsByContainingLetter = (words: string[], letter: string): string[] => {
  const filtered = words.filter(word => word.toLowerCase().includes(letter.toLowerCase()));
  logFilterResults('containing letter', letter, filtered);
  return filtered;
};

export const filterWordsByLength = (words: string[], length: number): string[] => {
  const filtered = words.filter(word => word.length === length);
  logFilterResults('length', length.toString(), filtered);
  return filtered;
};