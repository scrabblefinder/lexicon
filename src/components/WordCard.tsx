interface WordCardProps {
  word: string;
}

export const WordCard = ({ word }: WordCardProps) => {
  return (
    <span className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
      {word}
    </span>
  );
};