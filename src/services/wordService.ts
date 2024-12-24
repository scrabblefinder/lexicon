import { useQuery } from "@tanstack/react-query";

const WORD_DATABASE_URL = "https://raw.githubusercontent.com/jeremy-rifkin/Wordlist/refs/heads/master/master.txt";

export interface WordListResponse {
  words: string[];
  total: number;
}

const fetchWords = async (): Promise<string[]> => {
  const response = await fetch(WORD_DATABASE_URL);
  const text = await response.text();
  return text.split('\n').filter(word => word.trim().length > 0);
};

export const useWords = () => {
  return useQuery({
    queryKey: ['words'],
    queryFn: fetchWords,
  });
};

export const filterWordsByStartingLetter = (words: string[], letter: string): WordListResponse => {
  const filteredWords = words.filter(word => word.toLowerCase().startsWith(letter.toLowerCase()));
  return {
    words: filteredWords,
    total: filteredWords.length
  };
};

export const filterWordsByEndingLetter = (words: string[], letter: string): WordListResponse => {
  const filteredWords = words.filter(word => word.toLowerCase().endsWith(letter.toLowerCase()));
  return {
    words: filteredWords,
    total: filteredWords.length
  };
};

export const filterWordsByContainingLetter = (words: string[], letter: string): WordListResponse => {
  const filteredWords = words.filter(word => word.toLowerCase().includes(letter.toLowerCase()));
  return {
    words: filteredWords,
    total: filteredWords.length
  };
};

export const filterWordsByLength = (words: string[], length: number): WordListResponse => {
  const filteredWords = words.filter(word => word.length === length);
  return {
    words: filteredWords,
    total: filteredWords.length
  };
};