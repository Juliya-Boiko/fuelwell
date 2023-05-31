import { quoteShema } from "schemas/quote";
import { Formik, Form } from 'formik';
import { PatternFormat } from 'react-number-format';
import { BrandBtn } from "components/buttons/brand/BrandBtn";

export const QuoteForm = () => {
  return (
    <Formik
      initialValues={quoteShema.initialValues}
      validationSchema={quoteShema.validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, handleChange, errors, touched }) => (
        <Form className='quote-form'>
          <div className="quote-form__entries">
            <div className="quote-form__block">
              <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Name" className={`quote-form__input ${errors.name && touched.name ? 'quote-form__input--error' : ''}`} />
              <p className="quote-form__error">{errors.name}</p>
            </div>

            <div className="quote-form__block">
              <input type="text" name="email" value={values.email} onChange={handleChange} placeholder="E-mail" className={`quote-form__input ${errors.email && touched.email ? 'quote-form__input--error' : ''}`} />
              <p className="quote-form__error">{errors.email}</p>
            </div>
            
            <div className="quote-form__block">
              <PatternFormat name="phone" format="+38 ### #######" value={values.phone} onChange={handleChange} placeholder="Phone" className={`quote-form__input ${errors.phone && touched.phone ? 'quote-form__input--error' : ''}`} />
              <p className="quote-form__error">{errors.phone}</p>
            </div>
            
            <div className="quote-form__block">
              <input type="text" name="company" value={values.company} onChange={handleChange} placeholder="Company" className={`quote-form__input ${errors.company && touched.company ? 'quote-form__input--error' : ''}`} />
              <p className="quote-form__error">{errors.company}</p>
            </div>
          </div>
          <BrandBtn type="submit" title='Get quote' />
        </Form>
      )}
    </Formik>
  );
};