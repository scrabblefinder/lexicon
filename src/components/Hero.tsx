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
    <div className="relative bg-primary py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-montserrat text-6xl font-bold text-white leading-tight">
            Find the Perfect Words
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive collection of word lists. Whether you're looking for words that start with a specific letter, end with certain characters, or match a particular length - we've got you covered.
          </p>
        </div>

        <form onSubmit={handleSearch} className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Letter Search Section */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-white text-lg font-semibold">Search by Letters</Label>
                  <RadioGroup
                    defaultValue="starting"
                    onValueChange={setSearchType}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="starting" id="starting" className="border-white" />
                      <Label htmlFor="starting" className="text-white text-base">Start with...</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="ending" id="ending" className="border-white" />
                      <Label htmlFor="ending" className="text-white text-base">End with...</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="containing" id="containing" className="border-white" />
                      <Label htmlFor="containing" className="text-white text-base">Contains...</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Enter letters..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl text-primary bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-secondary placeholder:text-gray-500"
                    maxLength={1}
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>

              {/* Word Length Section */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-white text-lg font-semibold">Word Length</Label>
                  <Select value={wordLength} onValueChange={setWordLength}>
                    <SelectTrigger className="w-full px-6 py-4 rounded-xl text-primary bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-secondary h-[52px]">
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
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Search Words
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};