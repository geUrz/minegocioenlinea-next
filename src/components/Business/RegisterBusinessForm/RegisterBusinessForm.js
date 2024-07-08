import { useState } from "react"
import { Button, Form, FormButton, FormField, FormGroup, FormInput, FormTextArea, Label } from "semantic-ui-react"
import { Business } from "@/api"
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./RegisterBusinessForm.form"
import { Toaster, toast } from "sonner"
import { useAuth } from "@/hooks"
import { useRouter } from "next/router"
import { FaEdit, FaTimes } from "react-icons/fa"
import styles from './RegisterBusinessForm.module.css'

const businessCtrl = new Business()

export function RegisterBusinessForm(props) {

  const { business, businessId, reload, onReload, onOpenCloseEdit } = props
  const { user } = useAuth()
  const router = useRouter()

  const formik = useFormik({
    initialValues: initialValues(business),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {

        if (businessId) {
          await businessCtrl.update(formValue, businessId)
          toast.success(' ¡ Negocio actualizado exitosamente ! ')
          onOpenCloseEdit()
        } else {
          await businessCtrl.create(formValue, user.id)
          toast.success(' ¡ Negocio creado exitosamente ! ')
          router.push('/')
        }

        formik.handleReset()
        onReload()


      } catch (error) {
        toast.error(' ¡ Error al crear negocio ! ')
        console.error(error)
      }
    }
  }, [reload])

  return (

    <div className={styles.container}>

      <div className={styles.iconClose} onClick={onOpenCloseEdit}><FaTimes /></div>

      <div className={styles.steps}>
        <FaEdit />
        <h1>1. Pon nombre a tu negocio y describe lo que ofrece</h1>
      </div>

      <Form onSubmit={formik.handleSubmit}>
        <FormGroup widths='equal'>
          <FormField>
            <Label className={styles.formLabel}>
              Nombre de tu negocio*
            </Label>
            <FormInput
              name='slug'
              type="text"
              value={formik.values.slug}
              onChange={formik.handleChange}
              error={formik.errors.slug}
              className={styles.formInput}
            />
          </FormField>
          <FormField>
            <Label className={styles.formLabel}>
              Descripción
            </Label>
            <FormTextArea
              name='description'
              type="text"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.errors.description}
            >
            </FormTextArea>
          </FormField>
        </FormGroup>
      </Form>

      <div className={styles.steps}>
        <h1>2. Elige categorías y escribe palabras clave para que encuentren tu negocio fácilmente</h1>
      </div>

      <Form onSubmit={formik.handleSubmit}>
        <FormGroup widths='equal'>
          <FormField>
            <Label className={styles.formLabel}>
              Categoría 1*
            </Label>
            <FormField
              name='categorieone'
              type="text"
              control='select'
              value={formik.values.categorieone}
              onChange={formik.handleChange}
              error={formik.errors.categorieone}
            >
              <option value=''>- Seleccionar categoría -</option>
              <option value='Alimentos'>Alimentos</option>
              <option value='Belleza'>Belleza</option>
              <option value='EscuelasyCursos'>Escuelas y Cursos</option>
              <option value='GruposyMusica'>Grupos y Música</option>
              <option value='Mascotas'>Mascotas</option>
              <option value='Rentas'>Rentas</option>
              <option value='SalonesyJardines'>Salones y Jardines</option>
              <option value='Salud'>Salud</option>
              <option value='ServiciosProfesionales'>Servicios Profesionales</option>
              <option value='ServiciosTecnicos'>Servicios Técnicos</option>
            </FormField>
          </FormField>
          <FormField>
            <Label className={styles.formLabel}>
              Categoría 2
            </Label>
            <FormField
              name='categorietwo'
              type="text"
              control='select'
              value={formik.values.categorietwo}
              onChange={formik.handleChange}
              error={formik.errors.categorietwo}
            >
              <option value=''>- Seleccionar categoría -</option>
              <option value='Alimentos'>Alimentos</option>
              <option value='Belleza'>Belleza</option>
              <option value='EscuelasyCursos'>Escuelas y Cursos</option>
              <option value='GruposyMusica'>Grupos y Música</option>
              <option value='Mascotas'>Mascotas</option>
              <option value='Rentas'>Rentas</option>
              <option value='SalonesyJardines'>Salones y Jardines</option>
              <option value='Salud'>Salud</option>
              <option value='ServiciosProfesionales'>Servicios Profesionales</option>
              <option value='ServiciosTecnicos'>Servicios Técnicos</option>
            </FormField>
          </FormField>
          <FormField>
            <Label className={styles.formLabel}>
              Palabras clave*
            </Label>
            <FormTextArea
              name='tags'
              type="text"
              placeholder='"Ejemplo: comida, tecnico, ventas, musica, renta, ropa, zapatos, tenis "'
              value={formik.values.tags}
              onChange={formik.handleChange}
              error={formik.errors.tags}
            >
            </FormTextArea>
          </FormField>
        </FormGroup>
      </Form>

      <div className={styles.steps}>
        <h1>3. Agrega todas las formas de contacto</h1>
      </div>

      <Form onSubmit={formik.handleSubmit}>
        <FormGroup widths='equal'>
          <FormField>
            <FormField>
              <Label className={styles.formLabel}>
                Teléfono
              </Label>
              <FormInput
                name='telefono'
                type="number"
                value={formik.values.telefono}
                onChange={formik.handleChange}
                error={formik.errors.telefono}
              />
            </FormField>
            <Label className={styles.formLabel}>
              Whatsapp
            </Label>
            <FormInput
              name='whatsapp'
              type="number"
              value={formik.values.whatsapp}
              onChange={formik.handleChange}
              error={formik.errors.whatsapp}
            />
          </FormField>
          <FormField>
            <Label className={styles.formLabel}>
              Facebook
            </Label>
            <FormInput
              name='facebook'
              type="text"
              value={formik.values.facebook}
              onChange={formik.handleChange}
              error={formik.errors.facebook}
            />
          </FormField>
          <FormField>
            <Label className={styles.formLabel}>
              Sitio web
            </Label>
            <FormInput
              name='website'
              type="text"
              value={formik.values.website}
              onChange={formik.handleChange}
              error={formik.errors.website}
            />
          </FormField>
          <FormField>
            <Label className={styles.formLabel}>
              Ubicación
            </Label>
            
            <FormInput
              name='locate'
              type="text"
              value={formik.values.locate}
              onChange={formik.handleChange}
              error={formik.errors.locate}
            />
          </FormField>
        </FormGroup>

        <FormButton
          primary
          type='submit'
          loading={formik.isSubmitting}
        >
          Guardar
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
