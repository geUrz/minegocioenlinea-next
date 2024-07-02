import { useEffect, useState } from "react"
import { Business } from "../Business"
import { ListEmpty, Loading } from "@/components/Layout"
import { map, size } from "lodash"
import { Business as BusinessApi } from "@/api"
import styles from './BestBusiness.module.css'

const ctrlBestBusiness = new BusinessApi()


export function BestBusiness(props) {

  const { reload, onReload } = props

  const [business, setBusiness] = useState()

  useEffect(() => {
    (async () => {
      try {
        const response = await ctrlBestBusiness.getByBest()
        setBusiness(response.data)
      } catch (error) {
          console.error(error)
      }
    })()
  }, [reload])

  return (
    
    <>
    
      {!business ? (
        <Loading />  
      ) :
      size(business) === 0 ? (
        <ListEmpty />
      ) : (
        
        <div className={styles.mainBusiness}>
          {map(business, (busines) => (
            <Business
              key={busines.id} 
              businessId={busines.id}
              business={busines.attributes}  
              onReload={onReload}
            />
          ))}
        </div>
      
      )}

    </>

  )
}
