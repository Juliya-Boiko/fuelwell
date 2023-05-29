import * as Yup from 'yup';

const formSelects = {
  currency: ['EUR', 'UAH'],
  territory: ['Europe/EU', 'Ukraine/UA'],
};

const initialValues = {
  currency: formSelects.currency[0],
  territory: formSelects.territory[0],
  mileage: '',
  fuelConsumption: '',
  fuelCost: ''
};

const validationSchema = Yup.object().shape({
  currency: Yup.string().trim().oneOf(formSelects.currency).required("Required field"),
  territory: Yup.string().trim().oneOf(formSelects.territory).required("Required field"),
  mileage: Yup.string().min(1).max(7).matches(/[^0]+/, 'Cant be 0').required("Required field"),
  fuelConsumption: Yup.string().min(1).max(4).matches(/[^0]+/, 'Cant be 0').required("Required field"),
  fuelCost: Yup.string().min(1).max(5).matches(/[^0]+/, 'Cant be 0').required("Required field"),
});

export const expensesShema = {
  formSelects,
  initialValues,
  validationSchema
};