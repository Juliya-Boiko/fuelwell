import * as Yup from 'yup';

const initialValues = {
  name: '',
  phone: '',
  email: '',
  company: ''
};

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().min(5).required("Required field"),
  email: Yup.string().trim().email('Invalid email').required("Required field"),
  phone: Yup.string().required("Required field"),
  company: Yup.string().trim().min(3).required("Required field"),
});

export const contactsSchema = {
  initialValues,
  validationSchema
};