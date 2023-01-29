import axios, { AxiosResponse } from "axios";

export type Challenge = {
  id: number;
  name: string;
  description: string;
  image: string;
  completed: boolean;
  exp: number;
};

export type Bp = {
  id: number;
  exp: number;
};

export type User = {
  id: number;
  email: string;
  name: string;
  password: string;
  coin: number;
  bp: Bp;
  inventory: Inventory;
  challenges: Challenge[];
};

export type Inventory = {
  name: string;
  itemType: string;
};

export type Item = {
  name: string;
  rewardType: number;
};

export type Config = {
  maxExp: number;
  items: Item[];
};

export type OrderItem = {
  name: string;
  menuId: number;
};

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:3000"; // NOTE: FIX CORS
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
};

const Challenges = {
  list: () => request.get<Challenge[]>("/challenge"),
  details: (id: number) => request.get<Challenge>(`/challenge/${id}`),
  create: (data: Challenge) => request.post<Challenge>("/challenge", data),
};

const Inventory = {
  list: () => request.get<Inventory[]>("/inventory"),
  details: (id: number) => request.get<Inventory>(`/inventory/${id}`),
  create: (data: Inventory) => request.post<Inventory>("/inventory", data),
  send: (id: number) => request.post<number>("/placeholder", id),
};

const Bp = {
  details: () => request.get<Bp>("/bp"),
  create: (data: Bp) => request.post<Bp>("/bp", data),
};

const User = {
  list: () => request.get<User[]>("/users"),
  details: (id: number) => request.get<User>(`/users/${id}`),
  create: (data: User) => request.post<User>("/users", data),
};

const Config = {
  details: () => request.get<Config>("/config"),
  create: (data: Config) => request.post<Config>("/config", data),
};

const Menu = {
  order: (user: User, data: OrderItem[]) =>
    request.post(
      `/users/makeOrder?id=${user.id}`,
      data.map((_) => _.menuId)
    ),
};

export default { Challenges, Inventory, Bp, User, Config, Menu };
