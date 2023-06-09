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
import { Gallery } from "sections/gallery";
import { Proves } from "sections/proves";
import { Faq } from "sections/faq";
import { Contact } from "sections/contact";
import { Steps } from "sections/steps";
import {NotificationContainer} from 'react-notifications';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Efficiency />
        <Expenses />
        <Slider />
        <Benefits />
        <Device />
        <Quote />
        <Gallery />
        <Slider />
        <Proves />
        <Faq />
        <Contact />
        <Steps />
      </main>
      <Footer />
      <NotificationContainer/>
    </>
  );
};
