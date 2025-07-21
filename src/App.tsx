import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SurveillanceSidebar } from "./components/SurveillanceSidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="nexus-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full bg-background">
              <SurveillanceSidebar />
              <div className="flex-1 flex flex-col">
                <header className="h-12 flex items-center border-b border-border/50 px-4">
                  <SidebarTrigger className="mr-4" />
                  <div className="flex-1" />
                  <ThemeToggle />
                </header>
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/monitor" element={<Dashboard />} />
                  <Route path="/devices" element={<Dashboard />} />
                  <Route path="/targets" element={<Dashboard />} />
                  <Route path="/locations" element={<Dashboard />} />
                  <Route path="/network" element={<Dashboard />} />
                  <Route path="/cameras" element={<Dashboard />} />
                  <Route path="/extraction" element={<Dashboard />} />
                  <Route path="/reports" element={<Dashboard />} />
                  <Route path="/alerts" element={<Dashboard />} />
                  <Route path="/users" element={<Dashboard />} />
                  <Route path="/security" element={<Dashboard />} />
                  <Route path="/settings" element={<Dashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
  </QueryClientProvider>
);

export default App;
