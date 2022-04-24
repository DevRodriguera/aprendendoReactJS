import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Mitsubish"/>
                <Item marca="Subaru"/>
                <Item marca="Chevrolet"/>
            </ul>
        </>
    )
}
export default List