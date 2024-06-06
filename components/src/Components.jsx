function Container ({title}){
    return (
        <div style={{background: 'white', border: '1px solid red'}}>
            <h1>Title: {title}</h1>

            <div>
                <p>Children showing</p>
            </div>
        </div>
    )
}
export default Container