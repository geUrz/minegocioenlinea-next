import { Business } from '@/api'

export {default} from './search'

export async function getServerSideProps(context){

  const {
    query: {s, page = 1},
  } = context

  
  const businessCtrl = new Business()
  const response = await businessCtrl.searchBusiness(s, page) 

  return {

    props: {
      business: response.data,
      pagination: response.meta.pagination,
      searchText: s
    }

  }
}