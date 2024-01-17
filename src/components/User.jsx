import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function User() {
    const {userNum} = useParams()
    const [users, setUser]= useState([])
    const [userId, setUserId] = useState()
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/public/randomusers?page=1&limit=${userNum}`)
        .then((resp) => resp.json())
        .then((user) => {
            setUser(user.data.data)
        })
    }, [])
   // console.log({userNum});
//    users.map((user) => {
//     console.log(user);
//    })
//    console.log(userId);
    return (
        <>
            <div className='w-full mt-1 dark:bg-gray-100 flex flex-wrap rounded-md mb-4'>
            {users.map((user) => (
                
                    <div key={user.id} className='rounded-xl mb-2 bg-gray-300 mx-2 mt-2 justify-between items-center'>
                    <h2 className='text-red-800' >Name: {user.name.title} {user.name.first} {user.name.last} </h2>
                    <p>Id: {user.id}</p>
                        <img src={user.picture.large} className='mb-4 rounded-xl mt-4 mx-20' alt="" />
                        <Link to={`user/${userId}`}>
                        <button className='mt-2 rounded-lg px-2 py-1 mb-4 bg-blue-300'>more Info</button>
                        </Link>
                    </div>

    ))}
            </div>
        </>
    )
}

export default User
