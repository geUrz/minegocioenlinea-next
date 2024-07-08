import { useState } from 'react'
import Link from 'next/link'
import { FaCheck, FaFacebook, FaGlobe, FaMapMarkerAlt, FaMobile, FaTimes, FaTrash, FaWhatsapp } from 'react-icons/fa'
import { Confirm, NoImage } from '@/components/Layout'
import { Button, Image } from 'semantic-ui-react'
import { Toaster, toast } from "sonner"
import { BasicModal } from '@/layouts/BasicModal'
import { RegisterBusinessForm } from '@/components/Business'
import { Business as BusinessApi } from '@/api'
import styles from './Business.module.css'

const delBusiness = new BusinessApi()

export function Business(props) {

  const { business, businessId, onReload } = props

  const [showEdit, setShowEdit] = useState(false)

  const onOpenCloseEdit = () => setShowEdit((prevState) => !prevState)

  const [showConfirm, setShowConfirm] = useState(false)

  const openCloseConfirm = () => setShowConfirm((prevState) => !prevState)

  const onDelete = async () => {
    try {
      await delBusiness.delete(businessId)
      openCloseConfirm()
      onReload()
      toast.warning(' ¡ Negocio eliminado exitosamente ! ')
    } catch (error) {
      console.error(error)
    }
  }

  return (

    <>

      <div className={styles.containerBusiness}>

        <div className={styles.boxBusiness}>
          <div className={styles.box1}>
            <h1>{business.slug}</h1>
          </div>
          <div className={styles.box2}>
            <p>{business.description}</p>
          </div>
          <div className={styles.box3}>
            <h1>Contacto:</h1>
            <div>
              <FaMobile className={styles.iconMobil} />

              {business.telefono ? (
                <h1>{business.telefono}</h1>
              ) : (
                <h2 className={styles.noDisponible}>No disponible</h2>
              )}

            </div>
            <div>
              <FaWhatsapp className={styles.iconWhatsapp} />

              {business.whatsapp ? (
                <Link href={`https://wa.me/${business.whatsapp}`} target='blank'>
                  {business.whatsapp}
                </Link>
              ) : (
                <h2 className={styles.noDisponible}>No disponible</h2>
              )}

            </div>
            <div>
              <FaFacebook className={styles.iconFacebook} />

              {business.facebook ? (
                <Link href={`https://www.facebook.com/${business.facebook}`} target='blank'>
                  {business.slug}
                </Link>
              ) : (
                <h2 className={styles.noDisponible}>No disponible</h2>
              )}

            </div>
            <div>
              <FaGlobe className={styles.iconMobil} />

              {business.website ? (
                <Link href={`https://${business.website}`} target='blank'>{business.website}</Link>
              ) : (
                <h2 className={styles.noDisponible}>No disponible</h2>
              )}

            </div>
            <div>
              <FaMapMarkerAlt className={styles.iconMobil} />

              {business.locate ? (
                <h1>{business.locate}</h1>
              ) : (
                <h2 className={styles.noDisponible}>No disponible</h2>
              )}

            </div >
          </div>

          <div className={styles.boxActions}>
            <Button
              primary
              size='mini'
              onClick={onOpenCloseEdit}
            >
              Editar negocio
            </Button>
            <Button
              negative
              size='mini'
              onClick={openCloseConfirm}
            >
              <FaTrash />
            </Button>

          </div>

        </div>
      </div>

      <Confirm
        open={showConfirm}
        cancelButton={
          <div className={styles.iconClose}>
            <h4>Cancelar</h4>
          </div>
        }
        confirmButton={
          <div className={styles.iconCheck}>
            <h4>OK</h4>
          </div>
        }
        onConfirm={onDelete}
        onCancel={openCloseConfirm}
        content='¿ Estas seguro de eliminar el negocio ?'
      />

      <Toaster
        theme="dark"
        position="bottom-center"
        duration={8000}
        visibleToasts={1}
        richColors
      />

      <BasicModal titleModalForm='Editar negocio' show={showEdit} onClose={onOpenCloseEdit}>
        <RegisterBusinessForm onOpenCloseEdit={onOpenCloseEdit} onReload={onReload} business={business} businessId={businessId} />
      </BasicModal>

    </>

  )
}
