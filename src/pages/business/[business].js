import { BasicLayout } from '@/layouts'
import { Business as BusinessApi } from '@/api'
import { ArrowBack } from '@/components/Layout/ArrowBack'
import { Image } from 'semantic-ui-react'
import { NoImage } from '@/components/Layout'
import { FaFacebook, FaGlobe, FaMapMarkerAlt, FaMobile, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
//import { CommentsForm } from '@/components/Business'
//import { AllComments } from '@/components/Business/AllComments'
import styles from './business.module.css'
import { map } from 'lodash'

export default function Business(props) {

  const { business } = props
  const businessSlug = business.attributes
  const businessImg = business.attributes.image.data
  //const businessComments = businessSlug.comments.data

  return (

    <BasicLayout relative>

      <div className={styles.containerBusiness}>

        <ArrowBack title={businessSlug.slug} />

        <div className={styles.boxBusiness}>
          <div className={styles.boxImg}>
            {businessImg ? (
              <Image src={businessSlug.image.data.attributes.url} />
            ) : (
              <div className={styles.noImage}>
                <NoImage />
              </div>
            )}
          </div>
          <div className={styles.box1}>
            <h1>{businessSlug.slug}</h1>
          </div>
          <div className={styles.box2}>
            <p>{businessSlug.description}</p>
          </div>
          <div className={styles.box3}>
            <h1>Contacto:</h1>
            <div>
              <FaMobile className={styles.iconMobil} />

              {business.attributes.telefono ? (
                <h1>{business.attributes.telefono}</h1>
              ) : (
                <h2 className={styles.noDisponible}>No disponible</h2>
              )}

            </div>
            <div>
              <FaWhatsapp className={styles.iconWhatsapp} />

              {businessSlug.whatsapp ? (
                <Link href={`https://wa.me/${businessSlug.whatsapp}`} target='blank'>
                  {businessSlug.whatsapp}
                </Link>
              ) : (
                <h1 className={styles.noDisponible}>No disponible</h1>
              )}

            </div>
            <div>
              <FaFacebook className={styles.iconFacebook} />

              {businessSlug.facebook ? (
                <Link href={`https://www.facebook.com/${businessSlug.facebook}`} target='blank'>
                  {businessSlug.slug}
                </Link>
              ) : (
                <h2 className={styles.noDisponible}>No disponible</h2>
              )}

            </div>
            <div>
              <FaGlobe className={styles.iconMobil} />

              {businessSlug.website ? (
                <Link href={`https://${businessSlug.website}`} target='blank'>{businessSlug.website}</Link>
              ) : (
                <h2 className={styles.noDisponible}>No disponible</h2>
              )}

            </div>
            <div>
              <FaMapMarkerAlt className={styles.iconMobil} />

              {business.attributes.locate ? (
                <h1>{business.attributes.locate}</h1>
              ) : (
                <h2 className={styles.noDisponible}>No disponible</h2>
              )}

            </div>
          </div>
        </div>

        {/* <div className={styles.commentsTitle}>
          <h1>Comentarios de clientes</h1>
        </div> */}

        {/* <div className={styles.comments}>
          {map(businessComments, (bus) => (
            <div key={bus.id}>
              {!bus.attributes.name ? (
                <h1>"Anónimo"</h1>
              ) : (
                <h1>{bus.attributes.name}</h1>
              )}
              {!bus.attributes.comment ? (
                ''
              ) : (
                <p>{bus.attributes.comment}</p>
              )}
            </div>
          ))} 
        </div>

        <div className={styles.commentsTitle}>
          <h1>Deja un comentario sobre</h1>
          <h2>{businessSlug.slug}</h2>
        </div>

        <CommentsForm business={business} /> */}

        

      </div>

    </BasicLayout>

  )
}


export async function getServerSideProps(context) {

  const { params: { business } } = context

  const businessCtrl = new BusinessApi()
  const response = await businessCtrl.getBusinessBySlug(business)

  return {

    props: {
      business: response,
    }

  }
}