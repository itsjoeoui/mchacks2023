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
  xp: number;
};

export type User = {
  id: number;
};

export type Inventory = {
  name: string;
  itemType: string;
};
axios.defaults.baseURL = "http://localhost:3000"; // NOTE: FIX CORS
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

const Inventory = {
  details: () => request.get<Inventory>("/inventory"),
  create: (data: Inventory) => request.post<Inventory>("/Inventory", data),
};

const Bp = {
  details: () => request.get<Bp>("/bp"),
  create: (data: Bp) => request.post<Bp>("/bp", data),
};

const User = {
  details: () => request.get<User>("/user"),
  create: (data: User) => request.post<User>("/user", data),
};

const Populate = {
  fillDb: () => request.post("/", {}),
};

export default { Challenges, Bp, User, Populate };
