import { BasicLayout } from "@/layouts"
import { Image } from "semantic-ui-react"
import { AllBusiness, BestBusiness } from "@/components/Business"
import { PublishBusiness } from "@/components/Home/PublishBusiness"
import styles from './home.module.css'
import { FaMedal, FaStore } from "react-icons/fa"

export default function Home() {

  return (
    <BasicLayout relative>

      <div className={styles.containerHome}>

        <div className={styles.containerHomebanner}>
          <div className={styles.bannerMobile}>
            <Image src='/img/wallpaperMobil.webp' />
          </div>
          <div className={styles.bannerPc}>
            <Image src='/img/wallpaperPC.webp' />
          </div>
        </div>

          <PublishBusiness />

        <div className={styles.sectionOne}>
          <FaMedal />
          <h1>Los más buscados</h1>
        </div>

          <BestBusiness />

        <div className={styles.sectionOne}>
          <FaStore />
          <h1>Nuevos negocios</h1>
        </div>

          <AllBusiness />

      </div>

    </BasicLayout>
  )
}
