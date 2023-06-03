import { useState } from 'react';
import { ExpensesForm } from 'components/forms/expenses';
import { ExpensesResult } from 'components/tables/expenses-result';
import { ExpensesPotential } from 'components/tables/expenses-potential';

export const Expenses = () => {
  const [showResult, setShowResult] = useState(false);
  const [formValues, setFormValues] = useState(null);

  const submitHandler = (values) => {
    setFormValues(values);
    setShowResult(true);
  };

  return (
    <section id='calculate' className="section expenses">
      <div className="container">
        <div className="expenses__container">
          <h2 className="section__title expenses__title">Find out your current annual expenses</h2>
          <ExpensesForm submitHandler={submitHandler} />
          {showResult && formValues
            ? <div className='expenses__summary'>
              <div className='expenses__wrapper'>
                <ExpensesResult values={formValues} />
                <ExpensesPotential values={formValues} />
              </div>
              <p className='expenses__info'>*This example is not the basis for corporate financial modeling. Want a personal precision calculation?</p>
              <p className='expenses__info'>find relevent EU fuel cost HERE</p>
              </div>
            : null
          }
        </div>
      </div>
    </section>
  );
};