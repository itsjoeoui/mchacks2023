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
}
export type Item = {
  name: string;
  rewardType: number;
}

export type Config = {
  maxExp : number;
  items : Item[]
}
axios.defaults.baseURL = "https://bp.augustera.me/";
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
  create: (data: Inventory) => request.post<Inventory>('/inventory', data),
  send: (id: number) => request.post<number>("/placeholder", id)
};

const Bp = {
  details: () => request.get<Bp>("/bp"),
  create: (data: Bp) => request.post<Bp>("/bp", data),
};

const User = {
  details: () => request.get<User>("/user"),
  create: (data: User) => request.post<User>("/user", data),
};

const Config = {
  details: () => request.get<User>("/config"),
  create: (data: Config) => request.post<Config>("/config", data),
};


export default { Challenges, Inventory, Bp, User, Config};
