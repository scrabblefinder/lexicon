import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useQuery } from "@tanstack/react-query";

interface WordCardProps {
  word: string;
}

const fetchDefinition = async (word: string) => {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  if (!response.ok) {
    throw new Error('Definition not found');
  }
  const data = await response.json();
  return data[0]?.meanings[0]?.definitions[0]?.definition || 'No definition available';
};

export const WordCard = ({ word }: WordCardProps) => {
  const { data: definition, isLoading } = useQuery({
    queryKey: ['definition', word],
    queryFn: () => fetchDefinition(word),
    enabled: false, // Only fetch when needed
  });

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span
          className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
        >
          {word}
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        {isLoading ? (
          <p>Loading definition...</p>
        ) : definition ? (
          <p className="text-sm">{definition}</p>
        ) : (
          <p className="text-sm">Hover to load definition</p>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};