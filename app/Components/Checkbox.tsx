import React from 'react';
import styles from "@/app/Styles/styles.module.css";

const CheckBox = (props: any) => {

    const {value , onChange } = props;

    return(
        <>
            <input placeholder="" type="checkbox" checked={value} onChange={onChange} className={`${styles.checkbox}`}/>
        </>
    )

}

export default CheckBox;