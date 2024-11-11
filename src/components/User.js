import { useState } from "react"

const User = () =>{
    // const[firstName,setFirstNmae] = useState('Deriba')
    // const[lastName, setLastName] = useState('Adimsu')
    // const[email, setEmail] = useState('deriba@gmail.com')
    const [user, setUser] = useState({
        firstName:" Hambisa",
        lastName:"Fedesa",
        email:"hambisa@gmail.com"

    })
    function updateUser(){
    //    setFirstNmae('Gadisa')
    //     setLastName('Jamal')
    //     setEmail('gadisa@gmail.com')
     setUser({
        firstName:"Ayana",
        lastName:"Beekaa",
        email:"eba@gmail.com"
     })
    }
    return (
        <div>
            <h1>User Details</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            <button onClick={updateUser}>Update User</button>
        </div>
    )
} 
export default User