import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Article } from "@/components/Article";
import { Navigation } from "@/components/Navigation";
import { WordList } from "@/components/WordList";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Categories />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-montserrat font-bold mb-8 text-center">
          Browse Word Lists
        </h2>
        <WordList title="Words Starting With" baseUrl="/words-starting-with" type="letter" />
        <WordList title="Words Ending With" baseUrl="/words-ending-with" type="letter" />
        <WordList title="Words Containing" baseUrl="/words-containing" type="letter" />
        <WordList title="Words by Length" baseUrl="/words-by-length" type="length" />
      </div>
      <Article />
    </div>
  );
};

export default Index;