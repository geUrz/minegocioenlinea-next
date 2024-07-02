import { useEffect, useState } from 'react'
import { Input } from 'semantic-ui-react'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/router'
import styles from './Search.module.css'

export function Search() {

  const router = useRouter()

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    setSearchText(router.query.s || "")
  }, [])

  const onSearch = (text) => {
    setSearchText(text)
    router.replace(`/search?s=${text}`)
  }

  return (

    <div className={styles.section}>

      <div className={styles.container}>

        <FaSearch />

        <Input
          id='inputSearch'
          placeholder='Buscar un negocio'
          className={styles.inputSearch}
          focus={true}
          value={searchText}
          onChange={(_, data) => onSearch(data.value)}
        />

      </div>
    </div>

  )
}
