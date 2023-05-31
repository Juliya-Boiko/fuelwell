import { Header } from "sections/header";
import { Footer } from "sections/footer";
import { Hero } from "sections/hero";
import { About } from "sections/about";
import { Efficiency } from "sections/efficiency";
import { Expenses } from "sections/expenses";
import { Quote } from "sections/quote";
import { Slider } from "sections/slider";
import { Benefits } from "sections/benefits";
import { Device } from "sections/device";


export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Efficiency />
        <Expenses />
        <Quote />
        <Slider />
        <Benefits />
        <Device />
        <div>div</div>
      </main>
      <Footer />
    </>
  );
};
