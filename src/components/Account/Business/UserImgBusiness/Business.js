import { Button, Image } from 'semantic-ui-react'
import styles from './Business.module.css'
import { Confirm, NoImage } from '@/components/Layout'
import { Toaster } from 'sonner'
import { BasicModal } from '@/layouts/BasicModal'
import { useState } from 'react'
import { ImgBusinessForm } from '../ImgBusinessForm'


export function Business(props) {

  const {business, businessId, onReload} = props

  const [showEdit, setShowEdit] = useState(false)

  const onOpenCloseEdit = () => setShowEdit((prevState) => !prevState)

  const [showConfirm, setShowConfirm] = useState(false)

  const openCloseConfirm = () => setShowConfirm((prevState) => !prevState)

  return (
    

    <>

      <div className={styles.containerBusiness}>

        <div className={styles.boxBusiness}>
          <div className={styles.boxImg}>
            {(business.image.data) === null ? (
              <div className={styles.noImage}>
                <NoImage />
              </div>
            ) : (
              <Image src={business.image.data.attributes.url} />
            )}
          </div>
         

          <div className={styles.boxActions}>
            <Button
              primary
              size='mini'
              onClick={onOpenCloseEdit}
            >
              {(business.image.data) === null ? (
                <h4>Subir imagen</h4>
              ) : (
                <h4>Cambiar imagen</h4>
              )}
            </Button>
            {/* <Button
              negative
              size='mini'
              onClick={openCloseConfirm}
            >
              <FaTrash />
            </Button> */}

          </div>

        </div>
      </div>

      {/* <Confirm
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
        content='¿ Estas seguro de eliminar la imagen ?'
      /> */}

      <Toaster
        theme="dark"
        position="bottom-center"
        duration={8000}
        visibleToasts={1}
        richColors
      />

      <BasicModal titleModalForm='Subir imagen' show={showEdit} onClose={onOpenCloseEdit}>
        <ImgBusinessForm onOpenCloseEdit={onOpenCloseEdit} onReload={onReload} business={business} businessId={businessId} />
      </BasicModal> 

    </>

  )
}
