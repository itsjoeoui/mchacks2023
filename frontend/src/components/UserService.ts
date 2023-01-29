import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export type Challenge = {
  id: number;
  name: string;
  description: string;
  image: string;
  completed: boolean;
};

export type Bp = {
  id: number;
};

export type Users = {
  id: number;
};
axios.defaults.baseURL = "https://bp.augustera.me/";
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
};

const Challenges = {
  list: () => request.get<Challenge[]>("/challenge"),
  details: (id: string) => request.get<Challenge>(`/challenge/${id}`),
  create: (data: Challenge) => request.post<Challenge>("/challenge", data),
};

const Bp = {
  list: () => request.get<Bp[]>("/bp"),
  details: (id: string) => request.get<Bp>(`/bp/${id}`),
  create: (data: Bp) => request.post<Bp>("/bp", data),
};

const Users = {
  list: () => request.get<Users[]>("/users"),
  details: (id: string) => request.get<Users>(`/users/${id}`),
  create: (data: Challenge) => request.post<Users>("/users", data),
};

export default { Challenges, Bp, Users };
