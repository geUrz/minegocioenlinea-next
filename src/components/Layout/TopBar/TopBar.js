import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth } from '@/hooks'
import { Image } from 'semantic-ui-react'
import { FaBars, FaCloudUploadAlt, FaHome, FaList, FaTimes, FaUser, FaUserCircle } from 'react-icons/fa'
import styles from './TopBar.module.css'
import { Search } from '../Search'


export function TopBar() {

  const { user } = useAuth()

  const router = new useRouter()

  const [menu, setMenu] = useState()

  const menuOpen = () => {
    setMenu(prevState => !prevState)
  }

  return (

    <>
      <div className={styles.containerMenu}>

        <div className={styles.logo} onClick={() => router.push('/')}>
          <Image src='/img/logo.webp' />
        </div>

        <Search />

        <div className={styles.menu}>
          <Link href='/'>
            <FaHome /> Home
          </Link>
          <Link href='/categories'>
            <FaList /> Categorias
          </Link>
          <Link href='/register'>
            <FaCloudUploadAlt /> Publicar Negocio
          </Link>
          <Link href='/about'>
             ¿ Qué es <br></br>Mi Negocio en Línea ?
          </Link>
          <div className={styles.iconUser}>
          <FaUser
            onClick={user ? (
              () => router.push('/account')
            ) : (
              () => router.push('/join/signin')
            )}/>
          {!user ? (
            ''
          ) : (
            <h1>{user.username}</h1>
          )}
        </div>
        </div>

        <div className={styles.iconBar}>
          <div onClick={menuOpen}>
            {menu ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </div>
        </div>

        <div className={styles.containerMenuSide} style={{ left: menu ? '0' : '-100%' }}>
          <div className={styles.topMenuSide}
            onClick={user ? (
              () => router.push('/account')
            ) : (
              () => router.push('/join/signin')
            )}>
            {user ? (
              <>
                <FaUserCircle />
                <h1>{user.username}</h1>
                <h2>ver perfil</h2>
              </>
            ) : (
              <>
                <FaUserCircle />
                <h1>Iniciar sesión</h1>
              </>
            )}
          </div>
          <div className={styles.listaMenuSide}>
            <Link href='/'>
              <div onClick={menuOpen}>
                <FaHome /> Home
              </div>
            </Link>
            <Link href='/categories'>
              <div onClick={menuOpen}>
                <FaList /> Categorias
              </div>
            </Link>
            <Link href='/register'>
              <div onClick={menuOpen}>
                <FaCloudUploadAlt /> Publicar Negocio
              </div>
            </Link>
            <Link href='/about'>
              <div onClick={menuOpen}>
                Qué es Mi Negocio en Línea ?
              </div>
            </Link>
          </div>
        </div>
      </div>
      

    </>

  )
}
