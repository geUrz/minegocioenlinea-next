import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks'
import { Business as BusinessApi } from '@/api'
import { Business } from './Business'
import styles from './Business'

const ctrlBusiness = new BusinessApi()

export function UserImgBusiness(props) {

  const {reload, onReload} = props
  const {user} = useAuth()
  const [business, setBusiness] = useState()

  useEffect(() => {
    (async () => {
      try {
        const response = await ctrlBusiness.getBusinessById(user.id)
        setBusiness(response)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [reload])

  return (
    
    <>
    
      {!business ? (
        ''
      ) : 
        (
          <div>
            <Business 
              businessId={business.id}
              business={business.attributes}
              onReload={onReload}
            />
          </div>
        )}

    </>

  )
}
