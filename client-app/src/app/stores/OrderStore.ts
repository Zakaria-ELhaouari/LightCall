import { makeAutoObservable, runInAction  } from 'mobx';
import agent from '../api/agent';

import {v4 as uuid} from 'uuid';
import { Order } from '../models/Order';

export default class StatusStore {

    ordersRegistry = new Map<string, Order>();
    selectedOrder : Order | undefined = undefined ;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor(){
        makeAutoObservable(this)
    }

    get orders() {

        return Array.from(this.ordersRegistry.values());

    }

    loadOrders = async () => {
     
        this.setLoadingInitial(true)
    try{
        var orders = await agent.Orders.list() ;
       
        console.log(orders);
        
        orders.forEach(order =>{
            this.ordersRegistry.set(order.id, order);
        })

       
        
        this.setLoadingInitial(false)
        
    }catch(error){
        console.log(error)
        this.setLoadingInitial(false)
    }

    }


    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectStatus = (id : string) => {
        this.selectedOrder = this.ordersRegistry.get(id);
      
   }
   canselSelectedStatus = () => {
    this.selectedOrder = undefined ;
      
   }


   createOrder = async (order : Order ) => {

    this.loading = true ;
    order.id = uuid();
    try {
        await agent.Orders.create(order);
        runInAction(()=>{
            this.ordersRegistry.set(order.id, order);
            this.loading = false ; 
        })
    } catch (error) {
        runInAction(()=>{
           
            this.loading = false ; 
        })
    }
   }

   updateOrder = async (order : Order ) => {

    this.loading = true ;
    
    try {
        await agent.Orders.update(order);
        runInAction(()=>{
            this.ordersRegistry.set(order.id, order);
            this.loading = false ; 
        })
    } catch (error) {
        runInAction(()=>{
           
            this.loading = false ; 
        })
    }
   }

   deleteOrder = async (id: string) => {
    this.loading = true;
    try {
        await agent.Orders.delete(id);
        runInAction(() => {
            this.ordersRegistry.delete(id);
            this.loading = false;
        })

    } catch (error) {
        console.log(error);
        runInAction(() => {
            this.loading = false
        })
    }
}




}