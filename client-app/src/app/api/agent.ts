import axios, { AxiosResponse } from 'axios';
import { Operateur } from '../models/Operateur';
import { Order } from '../models/Order';
import { Project } from '../models/Project';
import { User, UserFormValues } from '../models/User';
import { store } from '../stores/Store';
// import { User, UserFormValues } from '../models/user';
import { Status } from './../models/Status';


const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

//this peace of code makes sure that we send our token with every request
axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})



const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}

const Orders = {
    list: () => requests.get<Order[]>('/Order'),
    details: (id: string) => requests.get<Order>(`/Order/${id}`),
    create: (order: Order) => requests.post<void>('/Order', order),
    update: (order: Order) => requests.put<void>(`/Order/${order.id}`, order),
    updateStatus: (status: Status) => requests.put<void>(`/Order/status/${status.id}`, status),
    delete: (id: string) => requests.del<void>(`/Order/${id}`),
    assigne: () => requests.put<Order>('/Order/AsinOrder', {}),
    inAssigne: (id: string) => requests.put<void>(`/Order/inAsinOrder${id}`, {}),

}

const Staties = {
    list: () => requests.get<Status[]>('/Status'),
    details: (id: string) => requests.get<Status>(`/Status/${id}`),
    create: (status: Status) => requests.post<void>('/Status', status),
    update: (status: Status) => requests.put<void>(`/Status/${status.id}`, status),
    delete: (id: string) => requests.del<void>(`/Status/${id}`)

}
const Projects = {
    list: () => requests.get<Project[]>('/Project'),
    details: (id: string) => requests.get<Project>(`/Project/${id}`),
    create: (project: Project) => requests.post<void>('/Project', project),
    update: (project: Project) => requests.put<void>(`/Project/${project.id}`, project),
    delete: (id: string) => requests.del<void>(`/Project/${id}`)

}

const OperateurAcc = {
    list: () => requests.get<Operateur[]>('/OperateurAccount'),
    details: (id: string) => requests.get<Operateur>(`/OperateurAccount/${id}`),
    create: (operateur: Operateur) => requests.post<void>('/OperateurAccount', operateur),
    update: (operateur: Operateur) => requests.put<void>(`/OperateurAccount/${operateur.id}`, operateur),
    delete: (id: string) => requests.del<void>(`/OperateurAccount/${id}`)

}

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user)
}

const agent = {
    Orders,
    Account,
    Staties,
    Projects,
    OperateurAcc


}

export default agent;

