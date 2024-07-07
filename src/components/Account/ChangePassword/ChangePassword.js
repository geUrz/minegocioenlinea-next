import { useState } from "react"
import { BasicModal } from "@/layouts/BasicModal"
import { Button, Form, FormButton, FormInput, Label } from "semantic-ui-react"
import { FaTimes } from "react-icons/fa"
import styles from './ChangePassword.module.css'


export function ChangePassword() {

  const [show, setShow] = useState(false)

  const onOpenClose = () => setShow((prevState) => !prevState)

  return (

    <>

      <Button primary size="small" onClick={onOpenClose}>
        Cambiar contraseña
      </Button>

      <BasicModal titleModalForm='Cambiar contraseña' show={show} onClose={onOpenClose}>
        <div className={styles.boxClose} onClick={onOpenClose}>
          <FaTimes />
        </div>
        <Form>
          <Label className={styles.formLabel}>
            Nueva contraseña*
          </Label>
          <FormInput

          />
          <Label className={styles.formLabel}>
            Confirmar nueva contraseña*
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
