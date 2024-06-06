import Age from "./Age"

function Welcome ({name , age}) {
    return (
        <>
        <h1>Welcome {name}!</h1>
        {age > 18 && <Age age={age}/>}
        {age && <Age age={age}/>}
        {age > 18 && age < 65 && <Age age={age}/>}
        {age > 18 && age < 65 && name === "Jhon" && <Age age={age}/>}
        {age < 18 && "You are very young!"}
        
        </>
    )
}

export default Welcome