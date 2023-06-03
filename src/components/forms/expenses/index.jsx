import { expensesShema } from 'schemas/expenses';
import { Formik, Form } from 'formik';
import { ExpensesSelect } from 'components/forms/expenses/components/selects';
import { InputNumeric } from 'components/forms/expenses/components/inputs/InputNumeric';
import { BorderedBtn } from 'components/buttons/bordered/BorderedBtn';

export const ExpensesForm = ({ submitHandler }) => {
  return (
    <Formik
      initialValues={expensesShema.initialValues}
      validationSchema={expensesShema.validationSchema}
      onSubmit={(values) => submitHandler(values)}
    >
      {({ values, handleChange, errors, touched }) => (
        <Form className='expenses-form'>
          <div className='expenses-form__entries'>
            <div className='expenses-form__block'>
              <ExpensesSelect data={expensesShema.formSelects.currency} name="currency" />
              <p className='expenses-form__label'>Select a currency</p>
              {errors.currency && touched.currency ? <p className='expenses-form__error'>{errors.currency}</p> : null}
            </div>

            <div className='expenses-form__block'>
              <ExpensesSelect data={expensesShema.formSelects.territory} name="territory" />
              <p className='expenses-form__label'>Select a territory</p>
              {errors.territory && touched.territory ? <p className='expenses-form__error'>{errors.territory}</p> : null}
            </div>
            
            <div className='expenses-form__block'>
              <InputNumeric
                name="mileage"
                value={values.mileage}
                onChange={handleChange}
                maxValue={1000000}
                thousandSeparator=" "
                decimalScale={0}
                className={`expenses-form__input ${errors.mileage && touched.mileage ? 'expenses-form__input--error' : ''}`}  />
              <p className='expenses-form__label'>Vehicle mileage (km)</p>
              {errors.mileage && touched.mileage ? <p className='expenses-form__error'>{errors.mileage}</p> : null}
            </div>

            <div className='expenses-form__block'>
              <InputNumeric
                name="fuelConsumption"
                value={values.fuelConsumption}
                onChange={handleChange}
                maxValue={100}
                allowedDecimalSeparators={['%', ',', '/']} decimalScale={1}
               className={`expenses-form__input ${errors.fuelConsumption && touched.fuelConsumption ? 'expenses-form__input--error' : ''}`} />
              <p className='expenses-form__label'>Fuel consumption</p>
              {errors.fuelConsumption && touched.fuelConsumption ? <p className='expenses-form__error'>{errors.fuelConsumption}</p> : null}
            </div>

            <div className='expenses-form__block'>
              <InputNumeric
                name="fuelCost"
                value={values.fuelCost}  
                onChange={handleChange}
                maxValue={1000}
                allowedDecimalSeparators={['%', ',', '/']}
                decimalScale={2}
                className={`expenses-form__input ${errors.fuelCost && touched.fuelCost ? 'expenses-form__input--error' : ''}`} />
              <p className='expenses-form__label'>Fuel cost {values.currency}</p>
              {errors.fuelCost && touched.fuelCost ? <p className='expenses-form__error'>{errors.fuelCost}</p> : null}
            </div>  
          </div>

          <BorderedBtn type='submit' title='Find out' />
        </Form>
      )}
    </Formik>
  );
};