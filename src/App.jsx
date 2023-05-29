import { Header } from "sections/header";
import { Footer } from "sections/footer";
import { Hero } from "sections/hero";
import { About } from "sections/about";
import { Efficiency } from "sections/efficiency";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Efficiency />
      </main>
      <Footer />
    </>
  );
};
