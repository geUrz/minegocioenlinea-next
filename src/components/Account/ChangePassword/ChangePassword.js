import { useState } from "react"
import { BasicModal } from "@/layouts/BasicModal"
import { Button, Form, FormButton, FormInput, Label } from "semantic-ui-react"
import { FaTimes } from "react-icons/fa"
import { useAuth } from "@/hooks"
import { User } from "@/api"
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./ChangePassword.form"
import styles from './ChangePassword.module.css'

const userCtrl = new User()

export function ChangePassword() {

  const { user, logout } = useAuth()

  const [show, setShow] = useState(false)

  const onOpenClose = () => setShow((prevState) => !prevState)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, {password: formValue.password})
        formik.handleReset()
        onOpenClose()
        logout()
      } catch (error) {
        console.error(error)
      }

    }
  })

  return (

    <>

      <Button primary size="small" onClick={onOpenClose}>
        Cambiar contraseña
      </Button>

      <BasicModal titleModalForm='Cambiar contraseña' show={show} onClose={onOpenClose}>
        <div className={styles.boxClose} onClick={onOpenClose}>
          <FaTimes />
        </div>
        <Form onSubmit={formik.handleSubmit}>
          <Label>
            Nueva contraseña*
          </Label>
          <FormInput
            name='password'
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
          />
          <Label>
            Confirmar nueva contraseña*
          </Label>
          <FormInput
            name='confirmPassword'
            type='password'
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.errors.confirmPassword}
          />
          <FormButton
            primary
            type="submit"
            size="small"
            loading={formik.isSubmitting}
          >
            Guardar
          </FormButton>
        </Form>
      </BasicModal>

    </>

  )
}
