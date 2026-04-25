import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-paper text-void">
      <Hero />
      <Services />
      <Showcase />
      <About />
      <Journal />
      <Contact />
    </main>
  );
}
