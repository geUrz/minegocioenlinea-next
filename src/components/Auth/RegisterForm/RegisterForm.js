import { Form, FormButton, FormGroup, FormInput, Label } from "semantic-ui-react"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import { Auth } from "@/api"
import { initialValues, validationSchema } from "./RegisterForm.form"


const authCtrl = new Auth()

export function RegisterForm() {

  const router = useRouter()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await authCtrl.register(formValue)
        router.push('signin')
      } catch (error) {
          console.error(error)
      }
    }
  })

  return (

    <Form onSubmit={formik.handleSubmit}>
      <Label>
        Nombre de usuario*
      </Label>
      <FormInput 
        name='username'
        type='text' 
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.errors.username}
      />
      <Label>
        Correo*
      </Label>
      <FormInput 
        name='email'
        type='email' 
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email} 
      />
      <Label>
        Contraseña*
      </Label>
      <FormInput 
        name='password'
        type='password' 
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Label>
        Confirmar contraseña*
      </Label>
      <FormInput 
        name='confirmPassword'
        type='password' 
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={formik.errors.confirmPassword}
      />
      <FormGroup>
        <FormButton type='submit' size='small' color='grey' loading={formik.isSubmitting} primary>
          Crear
        </FormButton>
      </FormGroup>
    </Form>

  )
}
