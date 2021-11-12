import * as yup from 'yup'

const orderSchema = yup.object().shape({
  name: yup
  .string()
  .trim()
  .required('Name is required!!')
  .min(2, 'name must be at least 2 characters'),
  size: yup
  .string()
  .oneOf(['small', 'medium', 'large']),
  pepperoni: yup.boolean(),
  ham: yup.boolean(),
  bananaPeppers: yup.boolean(),
  onions: yup.boolean(),
  special: yup.string()
})

export default orderSchema;