import styles from './TitlePage.module.css'

export function TitlePage(props) {

  const {titlePage} = props

  return (
    
    <div className={styles.titlePage}>
      <h1>{titlePage}</h1>
    </div>

  )
}
