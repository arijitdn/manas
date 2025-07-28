import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PlaceholderPage } from "./components/PlaceholderPage";
import { SubmitTip } from "./pages/SubmitTip";
import { SelectCategory } from "./pages/SelectCategory";
import { CreateTicket } from "./pages/CreateTicket";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route
                path="/about"
                element={
                  <PlaceholderPage
                    title="About NCB"
                    description="Learn more about the Narcotics Control Bureau and its mission."
                  />
                }
              />
              <Route path="/submit-tip" element={<SubmitTip />} />
              <Route path="/select-category" element={<SelectCategory />} />
              <Route
                path="/create-ticket/:ticketCategory"
                element={<CreateTicket />}
              />
              <Route
                path="/awareness"
                element={
                  <PlaceholderPage
                    title="Drug Awareness"
                    description="Educational resources and awareness materials about drug abuse prevention."
                  />
                }
              />
              <Route
                path="/contact"
                element={
                  <PlaceholderPage
                    title="Contact Us"
                    description="Get in touch with the MANAS helpline team."
                  />
                }
              />
              <Route
                path="/faq"
                element={
                  <PlaceholderPage
                    title="Frequently Asked Questions"
                    description="Common questions and answers about MANAS services."
                  />
                }
              />
              <Route
                path="/privacy"
                element={
                  <PlaceholderPage
                    title="Privacy Policy"
                    description="Information about how we protect your privacy and data."
                  />
                }
              />
              <Route
                path="/terms"
                element={
                  <PlaceholderPage
                    title="Terms & Conditions"
                    description="Terms and conditions for using MANAS services."
                  />
                }
              />
              <Route
                path="/help"
                element={
                  <PlaceholderPage
                    title="Help"
                    description="Get help with using the MANAS portal and services."
                  />
                }
              />
              <Route
                path="/accessibility"
                element={
                  <PlaceholderPage
                    title="Accessibility Statement"
                    description="Our commitment to digital accessibility."
                  />
                }
              />
              <Route
                path="/sitemap"
                element={
                  <PlaceholderPage
                    title="Sitemap"
                    description="Navigate through all pages and sections of our website."
                  />
                }
              />
              <Route
                path="/skip-to-content"
                element={
                  <PlaceholderPage
                    title="Skip to Content"
                    description="Accessibility feature for screen readers."
                  />
                }
              />
              <Route
                path="/screen-reader"
                element={
                  <PlaceholderPage
                    title="Screen Reader Access"
                    description="Enhanced accessibility options for screen readers."
                  />
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
