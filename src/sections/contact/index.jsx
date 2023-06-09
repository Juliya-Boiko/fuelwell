import { Fade } from "react-awesome-reveal";
import { ContactForm } from "components/forms/contact";

export const Contact = () => {
  return (
    <section id="contacts" className="section contact">
      <div className="container">
        <div className="contact__container">
          <Fade cascade>
            <h2 className="section__title contact__title section__title--accent contact__title">Have not found an answer?</h2>
            <h3 className="contact__subtitle">Contact us</h3>
          </Fade>
          <Fade delay={400}><ContactForm /></Fade>
        </div>
      </div>
    </section>
  );
};