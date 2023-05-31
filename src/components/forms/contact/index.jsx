import { quoteShema } from "schemas/quote";
import { Formik, Form } from 'formik';
import { PatternFormat } from 'react-number-format';
import { BrandBtn } from "components/buttons/brand/BrandBtn";

export const ContactForm = () => {
  return (
    <Formik
      initialValues={quoteShema.initialValues}
      validationSchema={quoteShema.validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, handleChange, errors, touched }) => (
        <Form className='contact-form'>
          <div className="contact-form__entries">
            <div className="contact-form__block">
              <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Name" className={`contact-form__input ${errors.name && touched.name ? 'contact-form__input--error' : ''}`} />
              <p className="contact-form__error">{errors.name}</p>
            </div>

            <div className="contact-form__block">
              <input type="text" name="email" value={values.email} onChange={handleChange} placeholder="E-mail" className={`contact-form__input ${errors.email && touched.email ? 'contact-form__input--error' : ''}`} />
              <p className="contact-form__error">{errors.email}</p>
            </div>
            
            <div className="contact-form__block">
              <PatternFormat name="phone" format="+38 ### #######" value={values.phone} onChange={handleChange} placeholder="Phone" className={`contact-form__input ${errors.phone && touched.phone ? 'contact-form__input--error' : ''}`} />
              <p className="contact-form__error">{errors.phone}</p>
            </div>
            
            <div className="contact-form__block">
              <input type="text" name="company" value={values.company} onChange={handleChange} placeholder="Company" className={`contact-form__input ${errors.company && touched.company ? 'contact-form__input--error' : ''}`} />
              <p className="contact-form__error">{errors.company}</p>
            </div>
          </div>
          <BrandBtn type="submit" title='Get quote' />
        </Form>
      )}
    </Formik>
  );
};