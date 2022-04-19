function Person({name, age, job, picture}){

    return(
        <div>
            <img src={picture} alt={name}/>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Job: {job}</p>
        </div>
    )
}

export default Person