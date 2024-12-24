import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Article } from "@/components/Article";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <Article />
    </div>
  );
};

export default Index;