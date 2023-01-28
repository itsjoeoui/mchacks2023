import React, {useEffect, useState} from 'react';
import axios from 'axios';

function UserService(){
    const baseUrl = 'http://localhost:3000'
    const [user, setUser] = useState<string>('')
    useEffect(() => {
        axios.get(baseUrl).then(response => {
            console.log('request filled')
            setUser(response.data)
        }).catch(error => {
            console.log(error)
        })
    })

    const getAll = () => {
        const request = axios.get(baseUrl).catch(error => {
            console.log(error)
        })
        return request.then(response => {
            response?.data
        })
    }

    const create = (newObject : any) => {
        const request = axios.post(baseUrl, newObject)
        return request.then(response => response.data)
    }

    const update = (id : number, newObject : any) => {
        const request = axios.put(`${baseUrl}/${id}`, newObject)
        return request.then (response => response.data)
    }


    //return {getAll, create, update}
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )
}