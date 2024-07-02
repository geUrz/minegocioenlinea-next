import * as Yup from 'yup'

export function initialValues(){
  return {
    name: '',
    comment: '' 
  }
}

export function validationSchema(){
  return Yup.object({
    name: Yup.string().required(false),
    comment: Yup.string().required(true),
  })
}