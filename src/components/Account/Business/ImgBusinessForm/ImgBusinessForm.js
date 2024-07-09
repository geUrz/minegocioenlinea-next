import { useState } from 'react'
import { Business } from '@/api'
import { useFormik } from 'formik'
import { Form, FormButton, FormField, FormGroup, FormInput, Label } from 'semantic-ui-react'
import { FaEdit, FaTimes } from 'react-icons/fa'
import { Toaster, toast } from 'sonner'
import { initialValues, validationSchema } from './ImgBusinessForm.form'
import styles from './ImgBusinessForm.module.css'

const businessCtrl = new Business()

export function ImgBusinessForm(props) {

  const { business, businessId, reload, onReload, onOpenCloseEdit } = props
  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues: initialValues(business),
    validationSchema: validationSchema(),
    validateOnChange: false, 
    onSubmit: async (formValue) => {
      try {

        if (!file) return
        const formData = new FormData();
        formData.append('files', file);
        const res = await fetch('https://minegocioenlinea-strapi.onrender.com/api/upload', { method: 'POST', body: formData })
        const imageData = await res.json();
        const imageId = imageData?.[0]?.id;

        if (businessId) {
          await businessCtrl.update( { ...formValue, image: imageId }, businessId)
          toast.success(' ¡ Imagen subida exitosamente ! ')
          onOpenCloseEdit()
        } 

        formik.handleReset()
        onReload()


      } catch (error) {
        toast.error(' ¡ Error al subir imagen ! ')
        console.error(error)
      }
    }
  }, [reload])

  return (

    <div className={styles.container}>

      <div className={styles.iconClose} onClick={onOpenCloseEdit}><FaTimes /></div>
    
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup widths='equal'>
          <FormField>
            <Label className={styles.formLabel}>
              Imagen del negocio
            </Label>
            <FormInput
              name="image"
              type="file"
              accept="image/png, image/jpeg"
              value={formik.values.image}
              error={formik.errors.image}
              onChange={(e) => {
                setFile(e.target.files[0])
              }}
            />
          </FormField>
        </FormGroup>

        <FormButton
          primary
          type='submit'
          loading={formik.isSubmitting}
        >
          Subir
        </FormButton>

        <Toaster
          theme="dark"
          position="bottom-center"
          duration={8000}
          visibleToasts={1}
          richColors
        />
    </Form>

    </div>

  )
}
