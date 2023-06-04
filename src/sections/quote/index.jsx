import { ContactForm } from "components/forms/contact";
import { Fade } from "react-awesome-reveal";

export const Quote = () => {
  return (
    <section id="quote" className="section quote">
      <div className="container quote__container">
        <Fade>
          <h2 className=" section__title quote__title">get a free quote for your fleet!</h2>
        </Fade>
        <Fade delay={200}><ContactForm /></Fade>
      </div>
    </section>
  );
};