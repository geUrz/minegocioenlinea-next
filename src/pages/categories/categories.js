import { useState, useEffect } from 'react'
import { BasicLayout } from '@/layouts'
import { ListEmpty, Loading, TitlePage } from '@/components/Layout'
import { FaBriefcase, FaBullhorn, FaCity, FaGraduationCap, FaGuitar, FaHeartbeat, FaHotel, FaPaw, FaSpa, FaTabletAlt, FaTools, FaUtensils } from 'react-icons/fa'
import Link from 'next/link'
import { Categories as CategoriesApi } from '@/api'
import styles from './categories.module.css'
import { map, size } from 'lodash'

const ctrlCategories = new CategoriesApi()

export default function Categories() {

  const [categories, setCategories] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await ctrlCategories.getAll()
        setCategories(response.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (

    <BasicLayout relative>

      <TitlePage titlePage='Categorías' />

      <div className={styles.section}>

        {!categories ? (
          <Loading />
        ) :
          size(categories) === 0 ? (
            <ListEmpty />
          ) : (
            <div className={styles.container}>
              {map(categories, (categorie) => (
                <Link key={categorie.id} href={`/categories/${categorie.attributes.slug}`}>
                  <div className={styles.boxCategories}>

                    {categorie.attributes.slug == 'alimentos' ?
                      <FaUtensils /> : (
                        ''
                      )
                    }

                    {categorie.attributes.slug == 'serviciostecnicos' ?
                      <FaTools /> : (
                        ''
                      )
                    }

                    {categorie.attributes.slug == 'serviciosprofesionales' ?
                      <FaBriefcase /> : (
                        ''
                      )
                    }

                    {categorie.attributes.slug == 'rentas' ?
                      <FaBullhorn /> : (
                        ''
                      )
                    }

                    {categorie.attributes.slug == 'mascotas' ?
                      <FaPaw /> : (
                        ''
                      )
                    }

                    {categorie.attributes.slug == 'salud' ?
                      <FaHeartbeat /> : (
                        ''
                      )
                    }

                    {categorie.attributes.slug == 'belleza' ?
                      <FaSpa /> : (
                        ''
                      )
                    }

                    {categorie.attributes.slug == 'escuelasycursos' ?
                      <FaGraduationCap /> : (
                        ''
                      )
                    }

                    {categorie.attributes.slug == 'salonesyjardines' ?
                      <FaHotel /> : (
                        ''
                      )
                    }

                    {categorie.attributes.slug == 'bienesraices' ?
                      <FaCity /> : (
                        ''
                      )
                    }

                    {categorie.attributes.slug == 'gruposymusica' ?
                      <FaGuitar /> : (
                        ''
                      )
                    }

                    {categorie.attributes.slug == 'tecnologia' ?
                      <FaTabletAlt /> : (
                        ''
                      )
                    }

                    <h1>{categorie.attributes.title}</h1>

                  </div>
                </Link>
              ))}
            </div>
          )}

      </div>

    </BasicLayout>

  )
}


