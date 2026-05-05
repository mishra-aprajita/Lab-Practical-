import {useState,useEffect} from 'react'

const Userlist = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[]);
  return (
    <div>
        <h2>User Api Data</h2>
        {users.map(user=>(
            <p key={user.id}>{user.username} - {user.email}</p> 
        ))}

    </div> 
  )
}

export default Userlist
