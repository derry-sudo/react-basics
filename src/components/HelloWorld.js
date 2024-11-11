

const HelloWorld =()=>
{
    function handlerClick(){
        alert( "the button is clicked")
    }
    const name = "gadisa"
    const add = 1+6
    return (
        <div>
        <h1>gamachu</h1>
        <p>{name}</p>
        <p>{add}</p>
        <button onClick={handlerClick}>Ok</button>
        </div>
    
    )
        
   
}
    export default HelloWorld 