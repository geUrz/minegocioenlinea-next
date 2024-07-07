import { useEffect, useState } from 'react'
import { BasicLayout } from '@/layouts'
import { ChangeEmail, ChangeNameForm, ChangePassword, Info } from '@/components/Account'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import { FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Button } from 'semantic-ui-react'
import styles from './account.module.css'
import { UserBusiness } from '@/components/Account'
import { UserImgBusiness } from '@/components/Account/Business/UserImgBusiness'

export default function Account() {

  const [reload, setReload] = useState(false)

  const onReload = () => setReload((prevState) => !prevState)


  const { user, logout } = useAuth()
  const router = useRouter()

  if (!user) {
    router.push('/')
    return null
  }

  const logoutSignin = () => {
    logout()
    router.push('/')
  }

  return (

    <BasicLayout relative onReload={onReload}>

      <div className={styles.containerAccount}>

        <div className={styles.cuenta}>
          <h1>Mi Cuenta</h1>
        </div>

        <div className={styles.boxInfo}>
          <FaUser />
          <div>
            <h1>{user.username}</h1>
            <h2>{user.email}</h2>
          </div>
        </div>

        <div className={styles.boxSettings}>

          <ChangeNameForm reload={reload} onReload={onReload} />
          
          <ChangePassword reload={reload} onReload={onReload} />

          <ChangeEmail reload={reload} onReload={onReload} />
        </div>

      </div>

      <div className={styles.tuNegocio}>
          <h1>Mi negocio</h1>
          <h2>( Vista previa )</h2>
        </div>

        <UserImgBusiness reload={reload} onReload={onReload} />

        <UserBusiness reload={reload} onReload={onReload} />

      <div className={styles.boxSignOut}>

        <Button
          color='grey'
          onClick={logoutSignin}
        >
          <h1>Cerrar sesión</h1>
          <FaSignOutAlt />
        </Button>

      </div>

    </BasicLayout>

  )
}
