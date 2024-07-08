import * as Yup from 'yup'

export function initialValues(){
  return {
    email: '',
    confirmEmail: ''
  }
}

export function validationSchema(){
  return Yup.object({
    email: Yup.string().email().required(true),
    confirmEmail: Yup.string().required(true).oneOf([Yup.ref('email')], true)
    })
}