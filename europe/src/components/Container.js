import React from 'react';
import Header from './Header';
import SearchCountry from './SearchCountry';
import CityImage from './CityImage';
import Weather from './Weather';
import CountryNameFlag from './CountryNameFlag'
import styles from './Styles.module.css'
import { useGlobalContext } from './Context';
import axios from 'axios'

const Container = () => {

    let { count, setCount, index, setIndex, input, setInput } = useGlobalContext();

    const [countries, setCountries] = React.useState([])

    //Fetch data from server
    const fetchData = React.useCallback( async () => {
        try {
            const data = await axios.get('countries')
            setCountries(data.data)
        } catch (error) {
            console.log({ message: error })
        }
    },[])

    React.useEffect(() => {
    fetchData()
    }, [fetchData])

    return (
        <>
            <div className={styles.container}>
                <Header />
                <SearchCountry input={input} setInput={setInput} setIndex={setIndex} setCount={setCount} />
                <CountryNameFlag count={count} index={index} countries={countries} />
                <CityImage count={count} index={index} setIndex={setIndex} countries={countries} setCount={setCount} />
                <Weather index={index} />
            </div>
        </>
    )
}


export default Container


