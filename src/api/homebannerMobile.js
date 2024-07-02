import { ENV, authFetch } from "@/utils"

export class HomebannerMobile{
  async getAll(){
    try {
      const sortFilter = 'sort=publishedAt:desc'
      const populateFilter = 'populate=*'
      const filters = `${sortFilter}&${populateFilter}` 
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.HOMEBANNERMOBILE}?${filters}`
      const response = await fetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result

    } catch (error) {
        throw error
    }
  }

  async getOne(){
    try {
      const sortFilter = 'sort=publishedAt:desc'
      const paginationFilter = 'pagination[limit]=3'
      const populateFilter = 'populate=*'
      const filters = `${sortFilter}&${populateFilter}&${paginationFilter}` 
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.HOMEBANNERMOBILE}?${filters}`
      const response = await fetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result

    } catch (error) {
        throw error
    }
  }

  async create(data, userId){
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.HOMEBANNERMOBILE}`
      const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: {
        ...data,
        user: userId,
      },
    }),
    }

    const response = await authFetch(url, params)
    const result = await response.json()

    if(response.status !== 200) throw result

      return result

    } catch (error) {
       throw error
    }
  }

  async update(data, bannerMobileId){
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.HOMEBANNERMOBILE}/${bannerMobileId}`
      const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data}),
    }

    const response = await authFetch(url, params)
    const result = await response.json()

    if(response.status !== 200) throw result

      return result

    } catch (error) {
       throw error
    }
  }

  async delete(bannerMobileId){
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.HOMEBANNERMOBILE}/${bannerMobileId}`
        const params = {
          method: 'DELETE',
        }

        const response = await authFetch(url, params)
        const result = await response.json()

        if(response.status !== 200) throw result

        return result

    } catch (error) {
        throw error
    }
  }

}


