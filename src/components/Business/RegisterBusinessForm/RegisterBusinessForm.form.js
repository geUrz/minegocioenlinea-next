import * as Yup from 'yup'

export function initialValues(business){
  return {
    slug: business?.slug || '',
    description: business?.description || '',
    telefono: business?.telefono || '',
    whatsapp: business?.whatsapp || '',
    facebook: business?.facebook || '',
    website: business?.website || '',
    locate: business?.locate || '',
    categorieone: business?.categorieone || '',
    categorietwo: business?.categorietwo || '',
    tags: business?.tags || ''
  }
}

export function validationSchema(){
  return Yup.object({
    slug: Yup.string().required(true),
    description: Yup.string().required(true),
    telefono: Yup.number().required(true),
    whatsapp: Yup.number().required(true),
    facebook: Yup.string().required(true),
    website: Yup.string().required(true),
    locate: Yup.string().required(true),
    categorieone: Yup.string().required(true),
    categorietwo: Yup.string().required(true),
    tags: Yup.string().required(true),
  })
}