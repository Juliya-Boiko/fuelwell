import { Formik, Form } from 'formik';
import { ExpensesSelect } from 'components/selects/expenses';
import { InputNumeric } from 'components/inputs/InputNumeric';
import { expensesShema } from 'schemas/expenses';

export const Expenses = () => {

  return (
    <section className="section expenses">
      <div className="container">
        <div className="expenses__container">
          <h2 className="section__title expenses__title">Find out your current annual expenses</h2>
          <Formik
            initialValues={expensesShema.initialValues}
            validationSchema={expensesShema.validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({ values, handleChange, errors, touched }) => (
              <Form className='expenses__form'>
                <div className='expenses__block'>
                  <ExpensesSelect data={expensesShema.formSelects.currency} name="currency" />
                  <p className='expenses__label'>Select a currency</p>
                </div>

                <div className='expenses__block'>
                  <ExpensesSelect data={expensesShema.formSelects.territory} name="territory" />
                  <p className='expenses__label'>Select a territory</p>
                </div>
                <p>{errors.territory}</p>
                
                <div className='expenses__block'>
                  <InputNumeric value={values.mileage} name="mileage" className='expenses__input'
                    onChange={handleChange} maxValue={1000000} thousandSeparator=" " decimalScale={0} />
                  <p className='expenses__label'>Vehicle mileage (km)</p>
                </div>
                <p>{errors.mileage}</p>

                <div className='expenses__block'>
                  <InputNumeric value={values.fuelConsumption} name="fuelConsumption"  className='expenses__input'
                    onChange={handleChange} maxValue={100} allowedDecimalSeparators={['%', ',', '/']} decimalScale={1} />
                  <p className='expenses__label'>Fuel consumption</p>
                </div>
                <p>{errors.fuelConsumption}</p>


                <div className='expenses__block'>
                  <InputNumeric value={values.fuelCost} name="fuelCost"  className='expenses__input'
                    onChange={handleChange} maxValue={1000} allowedDecimalSeparators={['%', ',', '/']} decimalScale={2} />
                  <p className='expenses__label'>Fuel cost {values.currency}</p>
                </div>
                <p>{errors.fuelCost}</p>

                <button type='submit'>check</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};