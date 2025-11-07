import { Provider } from 'react-redux';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ParentDashboard from "./pages/ParentDashboard";
import TherapistDashboard from "./pages/TherapistDashboard";
import CDCDashboard from "./pages/CDCDashboard";
import Training from "./pages/Training";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/parent-dashboard" element={<ParentDashboard />} />
              <Route path="/therapist-dashboard" element={<TherapistDashboard />} />
              <Route path="/cdc-dashboard" element={<CDCDashboard />} />
              <Route path="/training" element={<Training />} />
              <Route path="/community" element={<Community />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <ChatbotWidget />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
