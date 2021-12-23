import React from 'react'
import styles from './Styles.module.css'
import { images } from './Assets'
import PrevAndNextBtns from './PrevAndNextBtns';
import { country } from './Assets'
import { Link } from "react-router-dom";


const CityImage = ({ index, setIndex, setCount, count, countries }) => {

    const [show, setShow] = React.useState(false)

    const increment = () => {
        setIndex(index + 1)
        setCount(count + 1)
        if (index >= (country.length - 1) && count >= country.length) {
            setIndex(0)
            setCount(1)
        }
    }

    const decrement = () => {
        setIndex(index - 1)
        setCount(count - 1)
        if (index <= 0 && count <= 1) {
            setIndex(country.length - 1)
            setCount(country.length)
        }
    }

    const showMap = () => {
        setShow(!show)
    }

    return (
        <>
            <div className={styles.box}>
                <div className={styles.imagebox}>
                    <div className={styles.bgImg}><img src={process.env.PUBLIC_URL + `/images/${images[index]}`} alt="" className={styles.bgImage} /></div>
                </div>
            </div>

            <PrevAndNextBtns increment={increment} decrement={decrement} count={count} index={index} />

            {/* 'countries[0]?.capital &&' =  conditional if countries array is populated */}
            {countries[0]?.capital && <div className={styles.infoBox}>
                <div className={styles.information}>
                    <div>Capital: {countries[index].capital}</div>
                    <div>Population: {countries[index].population}</div>
                    <div>Language: {countries[index].language}</div>
                    <div>Currency: {countries[index].currency}</div>
                </div>
                <div className={styles.map} onClick={showMap}><img src={process.env.PUBLIC_URL + `${countries[index].image}`} alt="" />
                    <div className={styles.mapOverlay} style={show ? { display: 'flex' } : { display: 'none' }}>
                        <img src={process.env.PUBLIC_URL + `${countries[index].imagebig}`} alt="" className={styles.popup} />
                        <div className={styles.overlayTitle}>{country[index].toUpperCase()}</div>
                    </div>
                </div>
            </div>}
            <Link to='/readmore' className={styles.readmoreLink} state={countries}>
                <div className={styles.readmore}>Read more about: {country[index]}</div>
            </Link>
        </>
    )
}

export default CityImage
