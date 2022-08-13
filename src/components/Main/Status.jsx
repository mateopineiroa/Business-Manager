

const Status = ( {props, main, title} ) => {
    // console.log(main)
    return (
        <div className={props}>
            <div className={main}>
                <h2 className={title}>Status section</h2>
            </div>
        </div>
    )
}

export default Status