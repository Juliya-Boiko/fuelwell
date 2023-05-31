import { Accord } from "components/accord";

const faqs = [
  {
    id: 0,
    quest: 'What is FuelWell? What is it needed for?',
    answer: 'uelWell is a fuel decarbonizer, additional plug-in equipment for any commercial and private diesel and gasoline engine. FuelWell operation reduces emissions of harmful substances such as CO- 39%, CO2 – 15%, NOx – 35%, and PM – 90% due to more complete combustion of fuel.Moreover, FuelWell reduces fuel consumption by at least 10% and AdBlue (urea liquid)'
  },
  {
    id: 1,
    quest: 'What is the FuelWell operation principle?',
    answer: 'uelWell is a fuel decarbonizer, additional plug-in equipment for any commercial and private diesel and gasoline engine. FuelWell operation reduces emissions of harmful substances such as CO- 39%, CO2 – 15%, NOx – 35%, and PM – 90% due to more complete combustion of fuel.Moreover, FuelWell reduces fuel consumption by at least 10% and AdBlue (urea liquid)'
  },
  {
    id: 2,
    quest: 'Does FuelWell changes the chemical composition of the fuel?',
    answer: 'uelWell is a fuel decarbonizer, additional plug-in equipment for any commercial and private diesel and gasoline engine. FuelWell operation reduces emissions of harmful substances such as CO- 39%, CO2 – 15%, NOx – 35%, and PM – 90% due to more complete combustion of fuel.Moreover, FuelWell reduces fuel consumption by at least 10% and AdBlue (urea liquid)'
  },
  {
    id: 3,
    quest: 'Does the FuelWell unit require any service during the operation?',
    answer: 'uelWell is a fuel decarbonizer, additional plug-in equipment for any commercial and private diesel and gasoline engine. FuelWell operation reduces emissions of harmful substances such as CO- 39%, CO2 – 15%, NOx – 35%, and PM – 90% due to more complete combustion of fuel.Moreover, FuelWell reduces fuel consumption by at least 10% and AdBlue (urea liquid)'
  },
  {
    id: 4,
    quest: 'Does FuelWell require a connection to the electrical network?',
    answer: 'uelWell is a fuel decarbonizer, additional plug-in equipment for any commercial and private diesel and gasoline engine. FuelWell operation reduces emissions of harmful substances such as CO- 39%, CO2 – 15%, NOx – 35%, and PM – 90% due to more complete combustion of fuel.Moreover, FuelWell reduces fuel consumption by at least 10% and AdBlue (urea liquid)'
  },
  {
    id: 5,
    quest: 'What engines and machines the FuelWell catalyst is applicable for?',
    answer: 'uelWell is a fuel decarbonizer, additional plug-in equipment for any commercial and private diesel and gasoline engine. FuelWell operation reduces emissions of harmful substances such as CO- 39%, CO2 – 15%, NOx – 35%, and PM – 90% due to more complete combustion of fuel.Moreover, FuelWell reduces fuel consumption by at least 10% and AdBlue (urea liquid)'
  },
];

export const Faq = () => {
  return (
    <section className="section faq">
      <div className="container">
        <h2 className="section__title faq__title">Frequently asked <span className="section__title--accent">questions</span></h2>
        <ul>
          {faqs.map((item) => {
            return <Accord key={item.id} item={item} />
          })}
        </ul>
      </div>
    </section>
  );
};