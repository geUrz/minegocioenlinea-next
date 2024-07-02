import Link from "next/link"
import { JoinLayout } from "@/layouts"
import { LoginForm } from "@/components/Auth/LoginForm/LoginForm"
import { FaUser } from 'react-icons/fa'
import styles from './signin.module.css'

export default function Signin() {

  return (
    
    <JoinLayout>
      
      <div className={styles.containerSignin}>
        <div className={styles.boxSignin}>
          {/* <Image src='/img/user.png' /> */}
          <FaUser />
          
          <div className={styles.h1}><h1>Iniciar sesión</h1></div>
          
          <LoginForm />

          <div className={styles.crearCuenta}>
            <h1>¿ No tienes una cuenta ?</h1>
            <Link href='signup'>
              Crea una aquí
            </Link>
          </div>

        </div>
      </div>

    </JoinLayout>

  )
}
