import React from 'react';
import styles from "@/app/Styles/styles.module.css";

const CheckBox = (props: any) => {

    const {value , onChange } = props;

    return(
        <>
            <input placeholder="" type="checkbox" checked={value} onChange={onChange} className={`${styles.checkbox}`}/>
            <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg" className={styles.checkbox_icon}><path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8"/></svg>
        </>
    )

}

export default CheckBox;