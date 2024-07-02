import { RegisterLayout } from '@/layouts'
import { useEffect, useState } from 'react'
import { RegisterBusinessForm } from '@/components/Business'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import { Business } from '@/api'
import styles from './register.module.css'

const businessCtrl = new Business()

export default function Register() {

  const { user } = useAuth()
  const router = useRouter()
  const [reload, setReload] = useState(false)
  const onReload = () => setReload((prevState) => !prevState)
  const [business, setBusiness] = useState()
  
  useEffect(() => {

    if (!user) {
      router.push('join/signup')
      console.log('1')
    }

    else if (user.username === business.attributes.user.data.attributes.username) {
      router.push('/account')
    }

    else if (user && !business) {
      router.push('/register')
      console.log('2')
    }

}, [])

  useEffect(() => {
    (async () => {
      try {
        const response = await businessCtrl.getBusinessById(user.id)
        setBusiness(response)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])
  

  return (

    <RegisterLayout relative>

      <div className={styles.section}>
        <div className={styles.container}>

          <RegisterBusinessForm reload={reload} onReload={onReload} />

        </div>
      </div>

    </RegisterLayout>

  )
}
