const CheckBox = (props: any) => {

    const {value , onChange } = props;

    return(
        <>
            <input type="checkbox" checked={value} onChange={onChange} />
        </>
    )

}

export default CheckBox;