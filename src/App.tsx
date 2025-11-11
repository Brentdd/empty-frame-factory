import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Playbook from "./pages/Playbook";
import Workshop from "./pages/Workshop";
import { ErrorBoundary } from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ErrorBoundary>
            <BrowserRouter>
              <Routes>
                {/* English Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/playbook" element={<Playbook />} />
                <Route path="/workshop" element={<Workshop />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                
                {/* Ukrainian Routes */}
                <Route path="/ua" element={<Index />} />
                <Route path="/ua/playbook" element={<Playbook />} />
                <Route path="/ua/workshop" element={<Workshop />} />
                <Route path="/ua/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/ua/terms-of-service" element={<TermsOfService />} />
                
                {/* Legacy redirect */}
                <Route path="/workshop/ua" element={<Navigate to="/ua/workshop" replace />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </ErrorBoundary>
        </TooltipProvider>
      </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
