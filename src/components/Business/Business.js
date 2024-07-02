import { Image } from 'semantic-ui-react'
import Link from 'next/link'
import styles from './Business.module.css'
import { NoImage } from '../Layout'

export function Business(props) {

  const { business, businessId, onReload } = props
  const businessImg = business.image.data

  return (


    <div className={styles.boxBusiness}>
      <div className={styles.boxImg}>
        <Link href={`/business/${business.slug}`}>
          <div className={styles.verDetalles}>
            <div><h1>ver negocio</h1></div>
          </div>
        </Link>
        {businessImg ? (
              <Image src={business.image.data.attributes.url} />
            ) : (
              <div className={styles.noImage}>
                <NoImage />
              </div>
            )}

      </div>
      <div className={styles.boxName}>
        <h1>{business.slug}</h1>
      </div>
    </div>


  )
}
