import classNames from 'classnames'
import { Footer } from '@/components/Layout'
import styles from './RegisterLayout.module.css'
import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'

export function RegisterLayout(props) {

  const {children, relative= false} = props

  return (
    
    <>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <Link href='/'>
            <FaShoppingCart />
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
