import { Field } from 'formik';

export const ExpensesSelect = ({ name, data }) => {
  return (
    <Field as="select" name={name} className='expenses-select'>
      {data.map((item) => { return <option key={item} value={item}>{item}</option> })}
    </Field>
  );
};