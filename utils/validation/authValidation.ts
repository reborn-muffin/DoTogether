import * as yup from 'yup'

export const EmailSchema = yup.object({
  email: yup.string()
    .required('Email is required')
    .email('Please provide correct email address'),
})

export const PasswordSchema = yup.object({
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one capital letter')
    .matches(/\d/, 'Password must contain at least one number')
})

export const validateEmail = async (email: string): Promise<string> => {
  return await EmailSchema.validate({email})
    .then(() => {
      return ''
    })
    .catch((err) => {
      return err.message
    })
}

export const validatePassword = async (password: string): Promise<string> => {
  return await PasswordSchema.validate({password})
    .then(() => {
      return ''
    })
    .catch((err) => {
      return err.message
    })
}
