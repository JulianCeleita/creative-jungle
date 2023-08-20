"use client";

import { CardList } from "@/components/CardList";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { StoreContext } from "@/store/StoreContext";
import { useStore } from "@/store/useStore";

export default function Home() {
  const store = useStore();

  return (
    <StoreContext.Provider value={store}>
      <div className="max-w-screen-sm mx-auto">
        <Header />
        <CardList />
        <Footer />
      </div>
    </StoreContext.Provider>
  );
}
