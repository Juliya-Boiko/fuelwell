import { contactsSchema } from "schemas/contacts";
import { Formik, Form } from 'formik';
import { PatternFormat } from 'react-number-format';
import { BrandBtn } from "components/buttons/brand/BrandBtn";
import { NotificationManager } from 'react-notifications';

export const ContactForm = () => {
  return (
    <Formik
      initialValues={contactsSchema.initialValues}
      validationSchema={contactsSchema.validationSchema}
      onSubmit={(_, { resetForm }) => {
        NotificationManager.success('Form sended!');
        resetForm();
      }}
    >
      {({ values, handleChange, errors, touched }) => (
        <Form className='contact-form'>
          <div className="contact-form__entries">
            <div className="contact-form__block">
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Name"
                className={`contact-form__input ${errors.name && touched.name ? 'contact-form__input--error' : ''}`} />
              {errors.name && touched.name ? <p className="contact-form__error">{errors.name}</p> : null}
            </div>

            <div className="contact-form__block">
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="E-mail"
                className={`contact-form__input ${errors.email && touched.email ? 'contact-form__input--error' : ''}`} />
              {errors.email && touched.email ? <p className="contact-form__error">{errors.email}</p> : null}
            </div>
            
            <div className="contact-form__block">
              <PatternFormat
                name="phone"
                value={values.phone}
                onChange={handleChange}
                format="+38 ### #######"
                allowEmptyFormatting mask="_"
                className={`contact-form__input ${errors.phone && touched.phone ? 'contact-form__input--error' : ''}`} />
              {errors.phone && touched.phone ? <p className="contact-form__error">{errors.phone}</p> : null}
            </div>
            
            <div className="contact-form__block">
              <input
                type="text"
                name="company"
                value={values.company}
                onChange={handleChange}
                placeholder="Company"
                className={`contact-form__input ${errors.company && touched.company ? 'contact-form__input--error' : ''}`} />
              {errors.company && touched.company ? <p className="contact-form__error">{errors.company}</p> : null}
            </div>
          </div>
          <BrandBtn type="submit" title='Get quote' />
        </Form>
      )}
    </Formik>
  );
};