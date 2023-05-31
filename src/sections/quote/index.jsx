import { useState } from "react";
import { BorderedBtn } from "components/buttons/bordered/BorderedBtn";
import { ContactForm } from "components/forms/contact";

export const Quote = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="section quote">
      <div className="container quote__container">
        <h2 className=" section__title quote__title">get a free quote for your fleet!</h2>
        <BorderedBtn title='Proceed to' onClick={() => setShowForm(prev => !prev)}/>
        {showForm ? <ContactForm /> : null}
      </div>
    </section>
  );
};