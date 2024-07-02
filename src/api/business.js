import { ENV, authFetch } from "@/utils"

export class Business{
  async getAll(){
    try {
      const sortFilter = 'sort=publishedAt:desc'
      const populateFilter = 'populate=*'
      const filters = `${sortFilter}&${populateFilter}` 
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BUSINESS}?${filters}`
      const response = await fetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result

    } catch (error) {
        throw error
    }
  }

  async getBusinessById(userId){
    try {
      const filter = `filters[user][id][$eq]=${userId}`
      const populate = 'populate=*'
      const urlParams = `${filter}&${populate}`
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BUSINESS}?${urlParams}`

      const response = await authFetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result.data[0]

    } catch (error) {
        throw error
    }
  }


  async getBusinessByCategorieSlug(slug, page){
    try {
      const filter = `filters[categorieone][$eqi]=${slug}`
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`
      const populate = 'populate=*'
      const urlParams = `${filter}&${pagination}&${populate}`
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BUSINESS}?${urlParams}`
      const response = await fetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result

    } catch (error) {
        throw error
    }
  }

  async getBusinessBySlug(slug){
    try {
      const filters = `filters[slug][$eq]=${slug}`
      const populate = `populate=*`
      const urlParams = `${filters}&${populate}`
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BUSINESS}?${urlParams}`
      const response = await fetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result.data[0]

    } catch (error) {
        throw error
    }
  }

  async searchBusiness(text, page) {
    try {
      const filters = `filters[tags][$contains]=${text}`
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`
      const populate = 'populate=*'
      const urlParams = `${filters}&${pagination}&${populate}`
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BUSINESS}?${urlParams}`

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
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BUSINESS}`
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

  async update(data, businessId){
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BUSINESS}/${businessId}`
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

  async delete(businessId){
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BUSINESS}/${businessId}`
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

  async getByBest(){
    try {
      const sortFilter = 'sort=publishedAt:desc'
      const filters = `filters[best][$eq]=true`
      const populate = `populate=*`
      const urlParams = `${filters}&${sortFilter}&${populate}`
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BUSINESS}?${urlParams}`
      const response = await fetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result

    } catch (error) {
        throw error
    }
  }

}


