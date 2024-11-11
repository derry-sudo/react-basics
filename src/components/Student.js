const Student =(props)=> 
{
    const {name,lastName} = props
    return (
        <div>
            <h1>Student Details</h1>
            <p>Student Name: {name}</p>
            <p>Student Last Name: {lastName}</p>
          
            
        </div>
    )
}
export default Student