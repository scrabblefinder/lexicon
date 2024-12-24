import { Link } from "react-router-dom";

interface WordListProps {
  title: string;
  baseUrl: string;
  type?: "letter" | "length";
}

export const WordList = ({ title, baseUrl, type = "letter" }: WordListProps) => {
  const getItems = () => {
    if (type === "letter") {
      return Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    return Array.from({ length: 15 }, (_, i) => (i + 2).toString());
  };

  const items = getItems();
  
  return (
    <div className="py-8">
      <h3 className="text-2xl font-montserrat font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Link
            key={item}
            to={`${baseUrl}/${item.toLowerCase()}`}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-secondary hover:text-primary transition-colors"
          >
            {type === "letter" ? item : `${item} Letters`}
          </Link>
        ))}
      </div>
    </div>
  );
};