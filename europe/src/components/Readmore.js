import React from 'react'
import styles from './Styles.module.css'
import { Link } from "react-router-dom";
//import { countries } from './countries'
import { useGlobalContext } from './Context';
import { arms } from './Assets'
import { useLocation } from "react-router"

const Readmore = () => {

    let { index } = useGlobalContext();

    const location = useLocation()

    return (
        <div className={styles.wrapper2}>
            <div className={styles.container2}>

                <div className={styles.storyHeader}>
                    <div className={styles.historytitle}>{location.state[index].title}</div>
                </div>

                <div className={styles.story}>{location.state[index].story}</div>

                <Link to="/" className={styles.readmoreBack}>
                    <span className={styles.back}>go back</span>
                </Link>

                <div className={styles.arms}>
                    <div><img src={process.env.PUBLIC_URL + `/arms/${arms[index]}`} alt="" className={styles.armsPic} /></div>
                </div>

            </div>
        </div>
    )
}

export default Readmore
