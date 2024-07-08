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
    description: Yup.string(),
    telefono: Yup.number(),
    whatsapp: Yup.number(),
    facebook: Yup.string(),
    website: Yup.string(),
    locate: Yup.string(),
    categorieone: Yup.string().required(true),
    categorietwo: Yup.string(),
    tags: Yup.string(),
  })
}