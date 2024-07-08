import * as Yup from 'yup'

export function initialValues(){
  return {
    username: '',
    confirmUsername: ''
  }
}

export function validationSchema(){
  return Yup.object({
    username: Yup.string().required(true),
    confirmUsername: Yup.string().required(true).oneOf([Yup.ref('username')], true)
    })
}