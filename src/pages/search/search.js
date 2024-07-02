import { useEffect } from "react";
import { BasicLayout } from "@/layouts";
import { map, size } from "lodash";
import { Business } from "@/components/Business/Business";
import styles from "./search.module.css"
import { FaSearch } from "react-icons/fa";
import { BiSolidXCircle } from "react-icons/bi";
import { ArrowBack } from "@/components/Layout/ArrowBack";


export default function Search(props) {

  const { business, pagination, searchText } = props

  const hasResult = size(business) > 0

  useEffect(() => {
    document.getElementById('inputSearch').focus()
  }, [])

  return (


    <BasicLayout relative>

      <div className={styles.section}>

        {hasResult ? (
          <>

            <ArrowBack title='Resultados' />

            <div className={styles.container}>
              {map(business, (busines) => (
                <Business
                  key={busines.id}
                  businessId={busines.id}
                  business={busines.attributes}
                />
              ))}
            </div>

          </>
        ) : (
          <div className={styles.noFound}>
            <div>
              <FaSearch />
              <BiSolidXCircle />
            </div>
            <h1>No hay resultados</h1>
          </div>
        )}

      </div>

    </BasicLayout>

  )
}

