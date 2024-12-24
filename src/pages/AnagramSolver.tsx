import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnagramSearch } from "@/components/AnagramSearch";
import { AnagramArticle } from "@/components/AnagramArticle";
import { Helmet } from "react-helmet";

const AnagramSolver = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Anagram Solver - Find Word Combinations | Word-List.com</title>
        <meta name="description" content="Discover all possible word combinations with our free anagram solver. Perfect for word games, crosswords, and expanding your vocabulary. Supports wildcard characters." />
        <meta name="keywords" content="anagram solver, word combinations, word finder, word games, crossword helper" />
      </Helmet>
      <Navigation />
      <main>
        <AnagramSearch />
        <AnagramArticle />
      </main>
      <Footer />
    </div>
  );
};

export default AnagramSolver;