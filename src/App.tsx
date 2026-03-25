import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// --- Komponen Loading Screen ---
const LoadingScreen = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#bd2323a2', // Ganti ke #000000 jika tema kamu gelap
      zIndex: 9999,
    }}>
      <div style={{ width: '250px', height: '250px' }}>
        <DotLottieReact
          src="https://lottie.host/4f96b55a-b1c5-49e1-bf47-1195d0ece7d3/Ka9yC2fYCP.lottie"
          loop
          autoplay
        />
      </div>
      <p style={{ 
        marginTop: '20px', 
        fontFamily: 'sans-serif', 
        color: '#666',
        letterSpacing: '1px' 
      }}>
        Loading...
      </p>
    </div>
  );
};

// --- Komponen Utama ---
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading aset/data selama 2 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Tampilkan LoadingScreen jika state isLoading masih true */}
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;