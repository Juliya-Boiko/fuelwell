import { Curved } from "components/curved";
import { Timer } from "components/timer";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1><span>FUELWELL &#174;</span> – REDUCE COMMERICAL FLEET CARBON FOOTPRINT</h1>
        <p>The current truck’s annual trip is 100K mil./160K km., with a total fuel cost of USD 80K and CO2 emission of  266K lbs./ 120 tons.</p>
        <Curved />
        <Timer />
      </div>
    </section>
  );
};