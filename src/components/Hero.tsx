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
  const [startLetter, setStartLetter] = useState("");
  const [endLetter, setEndLetter] = useState("");
  const [wordLength, setWordLength] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startLetter && !endLetter && !wordLength) return;

    let route = "";
    
    // Handle combined search (starting and ending)
    if (searchType === "combined" && startLetter && endLetter) {
      route = `/words-starting-with/${startLetter}?ending=${endLetter}`;
    } else if (startLetter && searchType === "starting") {
      route = `/words-starting-with/${startLetter}`;
    } else if (endLetter && searchType === "ending") {
      route = `/words-ending-with/${endLetter}`;
    }

    // If length is specified, add it as a query parameter
    if (wordLength) {
      route += route.includes('?') ? `&length=${wordLength}` : `?length=${wordLength}`;
    }

    // If no specific letter search but length is specified
    if (!route && wordLength) {
      route = `/words-by-length/${wordLength}`;
    }

    navigate(route);
  };

  return (
    <div className="relative bg-primary py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-montserrat text-6xl font-bold text-white leading-tight">
            Generate Your Word Lists
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Use our search below to create your desired word lists. Make sure to select the word length and whatever letters you are looking for
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
                      <RadioGroupItem value="combined" id="combined" className="border-white" />
                      <Label htmlFor="combined" className="text-white text-base">Start and end with...</Label>
                    </div>
                  </RadioGroup>
                </div>

                {searchType === "combined" ? (
                  <div className="space-y-4">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Starts with letter..."
                        value={startLetter}
                        onChange={(e) => setStartLetter(e.target.value.slice(0, 1))}
                        className="w-full px-6 py-4 rounded-xl text-primary bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-secondary placeholder:text-gray-500"
                        maxLength={1}
                      />
                    </div>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Ends with letter..."
                        value={endLetter}
                        onChange={(e) => setEndLetter(e.target.value.slice(0, 1))}
                        className="w-full px-6 py-4 rounded-xl text-primary bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-secondary placeholder:text-gray-500"
                        maxLength={1}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder={searchType === "containing" ? "Enter letters (e.g., ber)..." : "Enter letter..."}
                      value={searchType === "starting" ? startLetter : endLetter}
                      onChange={(e) => {
                        if (searchType === "starting") {
                          setStartLetter(e.target.value.slice(0, 1));
                        } else {
                          setEndLetter(e.target.value.slice(0, 1));
                        }
                      }}
                      className="w-full px-6 py-4 rounded-xl text-primary bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-secondary placeholder:text-gray-500"
                      maxLength={1}
                    />
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                )}
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