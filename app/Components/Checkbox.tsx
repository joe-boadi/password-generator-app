import styles from "@/app/Styles/styles.module.css";

const CheckBox = (props: any) => {

    const {value , onChange } = props;

    return(
        <>
            <input placeholder="" type="checkbox" checked={value} onChange={onChange} />
        </>
    )

}

export default CheckBox;