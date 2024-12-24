import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Hero = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState("starting");
  const [searchTerm, setSearchTerm] = useState("");
  const [wordLength, setWordLength] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm && !wordLength) return;

    let route = "";
    if (wordLength) {
      route = `/words-by-length/${wordLength}`;
    } else {
      switch (searchType) {
        case "starting":
          route = `/words-starting-with/${searchTerm}`;
          break;
        case "ending":
          route = `/words-ending-with/${searchTerm}`;
          break;
        case "containing":
          route = `/words-containing/${searchTerm}`;
          break;
      }
    }

    navigate(route);
  };

  return (
    <div className="relative bg-primary py-20 text-white">
      <div className="container mx-auto px-4">
        <h1 className="font-montserrat text-5xl font-bold mb-6 text-center">
          Find the Perfect Words
        </h1>
        <p className="text-xl mb-8 text-center max-w-2xl mx-auto">
          Explore our comprehensive collection of word lists. Whether you're looking for words that start with a specific letter, end with certain characters, or match a particular length - we've got you covered.
        </p>
        <form onSubmit={handleSearch} className="max-w-xl mx-auto space-y-6">
          <div className="bg-white/10 p-6 rounded-lg space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <RadioGroup
                  defaultValue="starting"
                  onValueChange={setSearchType}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="starting" id="starting" />
                    <Label htmlFor="starting" className="text-white">Start with...</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ending" id="ending" />
                    <Label htmlFor="ending" className="text-white">End with...</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="containing" id="containing" />
                    <Label htmlFor="containing" className="text-white">Contains...</Label>
                  </div>
                </RadioGroup>

                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Enter letters..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 rounded-full text-primary focus:outline-none focus:ring-2 focus:ring-secondary"
                    maxLength={1}
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-white block">Word Length</Label>
                <Select value={wordLength} onValueChange={setWordLength}>
                  <SelectTrigger className="w-full px-6 py-4 rounded-full text-primary focus:outline-none focus:ring-2 focus:ring-secondary bg-white">
                    <SelectValue placeholder="Select length..." />
                  </SelectTrigger>
                  <SelectContent>
                    {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((length) => (
                      <SelectItem key={length} value={length.toString()}>
                        {length} letters
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full transition-colors font-semibold text-lg"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};