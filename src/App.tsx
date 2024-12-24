import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WordListPage from "./pages/WordListPage";
import AnagramSolver from "./pages/AnagramSolver";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/words-starting-with/:letter" element={<WordListPage type="starting" />} />
          <Route path="/words-ending-with/:letter" element={<WordListPage type="ending" />} />
          <Route path="/words-containing/:letter" element={<WordListPage type="containing" />} />
          <Route path="/words-by-length/:length" element={<WordListPage type="length" />} />
          <Route path="/anagram-solver" element={<AnagramSolver />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;