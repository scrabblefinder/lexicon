import { Link } from "react-router-dom";

interface WordListProps {
  title: string;
  baseUrl: string;
}

export const WordList = ({ title, baseUrl }: WordListProps) => {
  const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  
  return (
    <div className="py-8">
      <h3 className="text-2xl font-montserrat font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {alphabet.map((letter) => (
          <Link
            key={letter}
            to={`${baseUrl}/${letter.toLowerCase()}`}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-secondary hover:text-primary transition-colors"
          >
            {letter}
          </Link>
        ))}
      </div>
    </div>
  );
};