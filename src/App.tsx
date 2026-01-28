import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Research from "./pages/Research";
import Spiritual from "./pages/Spiritual";
import SpiritualDetail from "./pages/SpiritualDetail";
import Sayings from "./pages/Sayings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/research" element={<Research />} />
              <Route path="/spiritual" element={<Spiritual />} />
              <Route path="/spiritual/:slug" element={<SpiritualDetail />} />
              <Route path="/sayings" element={<Sayings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
