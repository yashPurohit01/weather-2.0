import React, { useState } from 'react'
import { BiSearch} from 'react-icons/bi';
import styles from './search.module.scss' ; 

function Search({setSearchQuery , searchQuery}) {
  const [result , setresult  ] = useState("");
  const checkResult = () =>{
    setSearchQuery(()=> {
      return result.toLowerCase()
    })
    setresult("");
  }
  return (
    <div className={styles.searchContainer}>
        <BiSearch className={styles.icons} onClick={checkResult}/>
        <input className={styles.input} 
           placeholder="search location here" 
            type="text" 
            value={result}
            onChange={(e) => {setresult(e.target.value)}}/>
    </div>
  )
}

export default Search