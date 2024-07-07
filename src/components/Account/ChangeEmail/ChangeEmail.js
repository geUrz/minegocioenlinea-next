import { Form, Button, FormButton, FormInput, Label } from 'semantic-ui-react'
import styles from './ChangeEmail.module.css'
import { BasicModal } from '@/layouts/BasicModal'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

export function ChangeEmail() {

  const [show, setShow] = useState(false)

  const onOpenClose = () => setShow((prevState) => !prevState)

  return (
    
    <>

      <Button primary size="small" onClick={onOpenClose}>
        Cambiar correo
      </Button>

      <BasicModal titleModalForm='Cambiar correo' show={show} onClose={onOpenClose}>
        <div className={styles.boxClose} onClick={onOpenClose}>
          <FaTimes />
        </div>
        <Form>
          <Label className={styles.formLabel}>
            Nuevo correo*
          </Label>
          <FormInput

          />
          <FormButton primary size="small">
            Guardar
          </FormButton>
        </Form>
      </BasicModal>

    </>

  )
}
