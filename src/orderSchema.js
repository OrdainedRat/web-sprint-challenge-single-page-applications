import * as yup from 'yup'

const orderSchema = yup.object().shape({
  name: yup
  .string()
  .trim()
  .required('Name is required!!')
  .min(2, 'name must be at least 2 characters')
})

export default orderSchema;