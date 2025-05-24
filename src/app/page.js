import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return <div className="w-full h-screen bg-[#ecf7ff] flex flex-col">
    <Header/>
    <HeroSection/>
  </div>;
}
