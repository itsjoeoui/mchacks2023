import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = 'http://164.90.130.176:3000/'

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

export default {getAll, create, update}
