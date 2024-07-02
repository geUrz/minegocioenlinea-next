import { Form, FormButton, FormInput, FormTextArea, Label } from 'semantic-ui-react'
import styles from './CommentsForm.module.css'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './CommentsForm.form'
import { Comments } from '@/api'

const ctrlComments = new Comments()

export function CommentsForm(props) {

  const {business, onReload} = props
  const businessId = business.id

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        
        await ctrlComments.create(formValue, businessId)
        //toast.success(' ¡ Mensaje creado exitosamente ! ')
  
        formik.handleReset()
        //onReload()
        
      } catch (error) {
        //toast.error(' ¡ Error al crear Mensaje ! ')
          console.error(error)
      }
    }
  })

  return (

    <div className={styles.form}>
      <Form onSubmit={formik.handleSubmit}>
        <Label className={styles.formLabel}>
          Nombre
        </Label>
        <FormInput 
          name='name'
          type='text'
          placeholder='Nombre (Opcional)'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Label className={styles.formLabel}>
          Comentario
        </Label>
        <FormTextArea
        name='comment'
        type='text'
          placeholder='Escribe aquí tu comentario'
          value={formik.values.comment}
          onChange={formik.handleChange}
          error={formik.errors.comment}
        />
        <FormButton
          color='grey'
          type='submit'
          loading={formik.isSubmitting}
        >
          Publicar
        </FormButton>
      </Form>
    </div>

  )
}
