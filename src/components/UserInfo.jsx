import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function UserInfo() {
    const {userId} = useParams() 
    const [userInfo, setUserInfo] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/public/randomusers/${userId}`)
        .then((resp) => resp.json())
        .then((userInfo) => setUserInfo(userInfo.data))
    }, [])
    return (
        <>
            <h1>Users: {userInfo.gender}</h1>
            <img src={userInfo.picture.medium} alt="" />
        </>
    )
}

export default UserInfo
