import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OfferList from "./components/containers/OfferList";
import Navbar from "./components/layout/Navbar";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <OfferList />
    </QueryClientProvider>
  );
};

export default App;
