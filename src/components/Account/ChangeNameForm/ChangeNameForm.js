import { useState } from "react"
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./ChangeNameForm.form"
import { BasicModal } from "@/layouts/BasicModal"
import { Button, Form, FormButton, FormField, FormInput, Label } from "semantic-ui-react"
import { useAuth } from "@/hooks"
import { User } from "@/api"
import styles from './ChangeNameForm.module.css'
import { FaTimes } from "react-icons/fa"

const userCtrl = new User()

export function ChangeNameForm() {

  const { user, updateUser } = useAuth()

  const [show, setShow] = useState(false)

  const onOpenClose = () => setShow((prevState) => !prevState)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, formValue)
        updateUser('username', formValue.username)
        formik.handleReset()
        onOpenClose()
      } catch (error) {
        console.error(error)
      }

    }
  })

  return (

    <>

      <Button primary size="small" onClick={onOpenClose}>
        Cambiar nombre de usuario
      </Button>

      <BasicModal titleModalForm='Nombre de usuario' show={show} onClose={onOpenClose}>
        <div className={styles.boxClose} onClick={onOpenClose}>
          <FaTimes />
        </div>
        <Form onSubmit={formik.handleSubmit}>
          <Label>
            Nuevo nombre de usuario*
          </Label>
          <FormInput
            name='username'
            type='text'
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.errors.username}
          />
          <Label>
            Confirmar nuevo nombre de usuario*
          </Label>
          <FormInput
            name='confirmUsername'
            type='text'
            value={formik.values.confirmUsername}
            onChange={formik.handleChange}
            error={formik.errors.confirmUsername}
          />
          <FormField>
            <FormButton
              primary
              type="submit"
              size="small"
              loading={formik.isSubmitting}
            >
              Guardar
            </FormButton>
          </FormField>
        </Form>
      </BasicModal>

    </>

  )
}
