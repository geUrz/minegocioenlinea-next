import { Business, Categories } from '@/api'

export {default} from './categories'

export async function getServerSideProps(context){

  const {query, params} = context

  const {page = 1} = query
  const {categories} = params

  const ctrlCategories = new Categories()
  const responseCategories = await ctrlCategories.getBySlug(categories)

  const ctrlBusiness = new Business()
  const responseBusiness = await ctrlBusiness.getBusinessByCategorieSlug(categories, page)

  return{

    props:{
      categories: responseCategories,
      business: responseBusiness.data,
      pagination: responseBusiness.meta.pagination
    }


  }
}