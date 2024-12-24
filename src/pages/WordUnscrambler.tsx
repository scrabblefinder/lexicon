import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WordUnscramblerSearch } from "@/components/WordUnscramblerSearch";
import { WordUnscramblerArticle } from "@/components/WordUnscramblerArticle";
import { Helmet } from "react-helmet";

const WordUnscrambler = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Word Unscrambler - Find All Possible Words | Word-List.com</title>
        <meta name="description" content="Unscramble letters to find all possible word combinations. Perfect for word games, crosswords, and vocabulary building. Sort results by word length." />
        <meta name="keywords" content="word unscrambler, letter unscrambler, word finder, word games, crossword helper" />
      </Helmet>
      <Navigation />
      <main>
        <WordUnscramblerSearch />
        <WordUnscramblerArticle />
      </main>
      <Footer />
    </div>
  );
};

export default WordUnscrambler;