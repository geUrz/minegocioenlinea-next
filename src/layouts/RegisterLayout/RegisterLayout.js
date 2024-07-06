import classNames from 'classnames'
import { Footer } from '@/components/Layout'
import styles from './RegisterLayout.module.css'
import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'
import { Image } from 'semantic-ui-react'

export function RegisterLayout(props) {

  const {children, relative= false} = props

  return (
    
    <>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image src='/img/logo.webp' />
          </Link>
        </div>
      </div>
    
      <div className={classNames({[styles.relative]: relative})}>
          {children}
      </div>

      <Footer />

    </>

  )
}
