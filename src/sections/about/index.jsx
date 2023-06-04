import { PrimaryLink } from "components/links/primary";
import { Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <section id="about" className="about">
      <Fade delay={250} className="container about__container">
        <h2 className="about__title"><span className="about__title--accent">FUELWELL&#8482;</span> the hardware plug-in device which innovative inside technology <span className="about__title--accent">enhance fuel burn out</span>, therefore reduce emission and fuel consumption</h2>
        <PrimaryLink path="calculate" title="Learn your costs and benefit with FuelWell" />
      </Fade>
    </section>
  );
};