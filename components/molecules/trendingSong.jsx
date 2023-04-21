import React from "react";
import Styles from "../../styles/Home.module.css";

const trending = () => {
    return(
        <div className={Styles.cardTrending}>
            <img
                className={Styles.image}
                src="/images/trending2.png"
                width="252"
                height="277"
            />
            <div className={Styles.cardDetail}>
                <i className="material-symbols-rounded">local_fire_department</i>
                <span>LAGU</span>
            </div>
        </div>
    )
}

export default trending
