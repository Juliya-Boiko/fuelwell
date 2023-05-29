import { PrimaryLink } from "components/links/primary";


export const About = () => {
  return (
    <section className="about">
      <div className="container about__container">
        <h2 className="about__title"><span className="about__title--accent">FUELWELL&#8482;</span> the hardware plug-in device which innovative inside technology <span className="about__title--accent">enhance fuel burn out</span>, therefore reduce emission and fuel consumption</h2>
        <PrimaryLink path="/" title="Learn your costs and benefit with FuelWell" />
      </div>
    </section>
  );
};