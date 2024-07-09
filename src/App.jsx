import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Info, DollarSign, Map, Mail } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "#home",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "About",
    to: "#about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    title: "Tokenomics",
    to: "#tokenomics",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    title: "Roadmap",
    to: "#roadmap",
    icon: <Map className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "#contact",
    icon: <Mail className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;