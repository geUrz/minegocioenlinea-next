import { useEffect, useState } from 'react'
import { Business as BusinessApi } from '@/api'
import { Loading } from '@/components/Layout'
import { useAuth } from '@/hooks'
import { FaStoreSlash } from 'react-icons/fa'
import Link from 'next/link'
import { Business } from './Business'
import { map, size } from 'lodash'
import styles from './UserBusiness.module.css'

const ctrlBusiness = new BusinessApi()

export function UserBusiness(props) {

  const { reload, onReload } = props
  const { user } = useAuth()
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

  //if (!business) return null

  return (

    <>

      {/* {!userBusiness ? (
        <Loading />
      ) : */}
      {size(business) === 0 ? (
          <div className={styles.noShop}>
            <FaStoreSlash />
            <h2>Sin negocio publicado</h2>
            <Link href='register'>
              Publicar negocio
            </Link>
          </div>
        ) : (
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
