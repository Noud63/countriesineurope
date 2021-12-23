import React from 'react'
import styles from './Styles.module.css'
import { country } from './Assets'

const SearchCountry = ({ setIndex, setCount }) => {

    const [input, setInput] = React.useState("")

    function handleClick() {
        input === "" ? alert('No search query') : findCountry(input.toLowerCase())
        setInput("")
    }

    function findCountry(input) {
        for (let i = 0; i < country.length; i++) {
            if (country[i].toLowerCase() === input) {
                setIndex(i)
                setCount(i + 1)
            }
        }
    }

return (
        <>
            <div className={styles.search}>
                <input type="text" placeholder="Country name" className={styles.searchField} value={input} onInput={e => setInput(e.target.value)} />
                <button className={styles.searchBtn} onClick={handleClick}>search</button>
            </div>

            <div className={styles.allCountriesBtn}>
                The Netherlands - Germany - Spain - Italy - Norway - Moldavia - Georgia -
                Ireland - Poland - Iceland - France - Austria - Czech Republic - Belgium - United Kingdom - Swizerland -
                Finland - Luxembourg - Andorra - Romania - Slovenia - Portugal - Estonia - Sweden - Ukraine - Hungary -
                Belarus - Latvia - Lithuania - Montenegro - Vatican City - North Macedonia - Greece - Slovakia -
                Liechtenstein - San Marino - Kosovo - Serbia - Croatia Bosnia and Herzegovina - Bulgaria - Denmark -
                Albania - Malta - Monaco - Russia -
                </div>
        </>
    )
}

export default SearchCountry
