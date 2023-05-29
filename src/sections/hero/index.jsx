import { Curved } from "components/curved";
import { Timer } from "components/timer";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title"><span className="hero__title--accent">FUELWELL &#174;</span> – REDUCE COMMERICAL FLEET CARBON FOOTPRINT</h1>
          <p className="hero__text">The current truck’s annual trip is 100K mil./160K km., with a total fuel cost of USD 80K and CO2 emission of  266K lbs./ 120 tons.</p>
        </div>
        <Curved />
        <Timer />
      </div>
    </section>
  );
};