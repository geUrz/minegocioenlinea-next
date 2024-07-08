import { Form, Button, FormButton, FormInput, Label } from 'semantic-ui-react'
import { BasicModal } from '@/layouts/BasicModal'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './ChangeEmail.form'
import { useAuth } from '@/hooks'
import { User } from '@/api'
import styles from './ChangeEmail.module.css'

const userCtrl = new User()

export function ChangeEmail() {

  const { user, updateUser } = useAuth()

  const [show, setShow] = useState(false)

  const onOpenClose = () => setShow((prevState) => !prevState)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, {email: formValue.email})
        updateUser('email', formValue.email)
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
        Cambiar correo
      </Button>

      <BasicModal titleModalForm='Cambiar correo' show={show} onClose={onOpenClose}>
        <div className={styles.boxClose} onClick={onOpenClose}>
          <FaTimes />
        </div>
        <Form onSubmit={formik.handleSubmit}>
          <Label>
            Nuevo correo*
          </Label>
          <FormInput
            name='email'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
          />
          <Label>
            Confirmar nuevo correo*
          </Label>
          <FormInput
            name='confirmEmail'
            type='email'
            value={formik.values.confirmEmail}
            onChange={formik.handleChange}
            error={formik.errors.confirmEmail}
          />
          <FormButton 
            primary
            type="submit"
            size="small"
            loading={formik.isSubmitting}>
            Guardar
          </FormButton>
        </Form>
      </BasicModal>

    </>

  )
}
