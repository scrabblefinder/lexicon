import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WordListPage from "./pages/WordListPage";

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
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;