import { BorderedBtn } from "components/buttons/bordered/BorderedBtn";

const steps = [
  {
    id: 1,
    value: 'worth equipping your fleet? Book a 30min presentation and Q&A session',
  },
  {
    id: 2,
    value: 'Get a free quote for your fleet',
  },
  {
    id: 3,
    value: 'Preorder for your fleet now and get special discount up to 50%',
  },
];

export const Steps = () => {

  return (
    <section className="section steps">
      <div className="container steps__container">
        <h2 className="section__title steps__title">3 steps of <span className="section__title--accent">cooperation</span> </h2>
        <ul className="steps__list">
          {steps.map(({ id, value }) => {
            return <li key={id} className="steps__item">
              <p className="steps__index">step {id}</p>
              <p className="steps__value">{value}</p>
              <BorderedBtn title="fill online form" />
            </li>
          })}
        </ul>
        {/* <div className="wrapper">
          <div className="items"></div>
          <div className="items"></div>
          <div className="items"></div>
          <div className="items"></div>
        </div> */}
      </div>
    </section>
  );
};