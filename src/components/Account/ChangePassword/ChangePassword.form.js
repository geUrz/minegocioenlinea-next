import * as Yup from 'yup'

export function initialValues(){
  return {
    password: '',
    confirmPassword: ''
  }
}

export function validationSchema(){
  return Yup.object({
    password: Yup.string().required(true),
    confirmPassword: Yup.string().required(true).oneOf([Yup.ref('password')], true)
    })
}