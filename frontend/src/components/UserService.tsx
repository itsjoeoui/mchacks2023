import React, { useEffect, useState } from "react";
import axios from "axios";


export default function UserService(){
    const baseUrl = 'http://164.90.130.176:3000/'
    //const [user, setUser] = useState<any>([])
    // useEffect(() => {
    //     axios.get(baseUrl).then(response => {
    //         console.log(response.data)
    //         setUser(response.data)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }, [])

    const getAll = (type : string) => {
        const request = axios.get(`${baseUrl}/${type}`).catch(error => {
            console.log(error)
        })
        return request.then(response => {
            response?.data
        })
    }

  const create = (newObject: any) => {
    const request = axios.post(baseUrl, newObject);
    return request.then((response) => response.data);
  };

  const update = (id: number, newObject: any) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then((response) => response.data);
  };

    return {getAll, create, update}
    // return (
    //     <div>
    //         {JSON.stringify(user)}
    //     </div>
    // )
}
