import axios, { AxiosResponse } from 'axios';
import { Order } from '../models/Order';
import { User, UserFormValues } from '../models/User';
import { store } from '../stores/Store';
// import { User, UserFormValues } from '../models/user';
import { Status } from './../models/Status';


const sleep = (delay: number) => {
    return new Promise((resolve) =>  {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

//this peace of code makes sure that we send our token with every request
axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if(token) config.headers.Authorization = `Bearer ${token}`
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



const responseBody = <T> (response : AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T>  (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put:  <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>  (url: string) => axios.delete<T>(url).then(responseBody)
}

const Orders = {
    list: () => requests.get<Order[]>('/Orders'),
    details: (id: string) => requests.get<Order>(`/Orders/${id}`),
    create: (order: Order) => requests.post<void>('/Orders', order),
    update: (order: Order) => requests.put<void>(`/Orders/${order.id}`, order),
    updateStatus: (status: Status) => requests.put<void>(`/Orders/status/${status.id}`, status),
    delete: (id: string) => requests.del<void>(`/Orders/${id}`)

}

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user)
}

const agent = {
    Orders,
    Account
}

export default agent;

