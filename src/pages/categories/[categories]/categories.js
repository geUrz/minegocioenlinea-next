import { BasicLayout } from "@/layouts"
import { map, size } from "lodash"
import { ListEmpty } from "@/components/Layout"
import { Business } from "@/components/Business/Business"
import { FaArrowLeft } from "react-icons/fa"
import { useRouter } from "next/router"
import styles from './categories.module.css'
import { ArrowBack } from "@/components/Layout/ArrowBack"


export default function categories(props) {

  const router = useRouter()

  const { business, categories, pagination } = props
  const hasBusiness = size(business) > 0

  return (

    <BasicLayout relative>

      <ArrowBack title={`${categories.attributes.title}`} />
      
      {hasBusiness ? (
        
        <div className={styles.mainBusiness}>
          {map(business, (busines) => (
            <Business
              key={busines.id} 
              businessId={busines.id}
              business={busines.attributes}  
            />
          ))}
        </div>

      ) : (
        <div className={styles.listEmpty}>
          <ListEmpty />
        </div>
      )}

    </BasicLayout>

  )
}


