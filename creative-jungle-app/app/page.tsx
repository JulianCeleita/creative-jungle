import { CardList } from "@/components/CardList";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 max-w-screen-xl mx-auto">
      <Header />
      <CardList />
      <Footer />
    </div>
  );
}
