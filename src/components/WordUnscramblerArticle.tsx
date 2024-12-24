export const WordUnscramblerArticle = () => {
  return (
    <article className="py-16 container mx-auto px-4 prose prose-lg max-w-4xl">
      <h2 className="text-3xl font-montserrat font-bold mb-6">
        What is a Word Unscrambler?
      </h2>
      
      <p>
        A word unscrambler is a powerful tool that helps you discover all possible words that can be created from a set of letters. Unlike an anagram solver that finds words using exactly all the letters provided, a word unscrambler finds words that can be made using some or all of the letters in your input.
      </p>

      <p>
        For example, if you input the letters "STREAM," a word unscrambler will not only find words that use all six letters (like "MASTER" and "STREAM") but also shorter words that can be made from these letters (like "TEAM," "STAR," "SET," etc.). This makes it an incredibly versatile tool for word games, vocabulary building, and puzzle solving.
      </p>

      <h3 className="text-2xl font-montserrat font-semibold mt-8 mb-4">
        How to Use Our Word Unscrambler
      </h3>

      <p>
        Using our word unscrambler is straightforward: simply enter any set of letters, and the tool will find all possible words that can be created using those letters. The results are conveniently organized by word length, making it easy to find exactly what you're looking for.
      </p>

      <p>
        This tool is particularly useful for:
      </p>

      <ul className="list-disc pl-6 mt-4 mb-6">
        <li>Word game enthusiasts looking to find all possible word combinations</li>
        <li>Students learning vocabulary and word formation</li>
        <li>Crossword puzzle solvers working with a specific set of letters</li>
        <li>Scrabble players trying to maximize their letter tiles</li>
      </ul>

      <p>
        Our word unscrambler searches through an extensive dictionary to find valid words, ensuring that all results are legitimate English words. Whether you're a casual word game player or a serious wordsmith, this tool can help you discover new words and expand your vocabulary.
      </p>
    </article>
  );
};