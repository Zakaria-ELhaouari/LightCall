import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { shippingCompany } from "../models/shippingCompany";
import {v4 as uuid} from 'uuid';

export default class shippingCompanystore{

    shippingCompanyRegistery = new Map<string , shippingCompany>();
    shippingCompanySelected : shippingCompany | undefined = undefined;
    loadingInitial = false;
    loading = false;

    constructor(){
        makeAutoObservable(this);
    }

    laodShippingCompanys = async () =>{
        this.setLoadingInitial(true);
        try{
            var shippingCompanys = await agent.ShippingCompany.list();

            shippingCompanys.forEach(shippingCompany =>{
                this.shippingCompanyRegistery.set(shippingCompany.id , shippingCompany);
            })
            this.setLoadingInitial(false);
        }catch(error){
            console.log(error)
            this.setLoadingInitial(false)
        }
    }

    laodShippingCompany = async (id: string) =>{
        try{
            var shippingCompany = await agent.ShippingCompany.details(id);
            this.shippingCompanySelected = shippingCompany;
            this.setLoadingInitial(false);
        }catch(error){
            console.log(error)
            this.setLoadingInitial(false)
        }
    }

    creatShippingCompany = async (shippingCompany: shippingCompany) =>{
        this.loading = true;
        shippingCompany.id = uuid();
        try{
            await agent.ShippingCompany.create(shippingCompany)
            runInAction(()=>{
                this.shippingCompanyRegistery.set(shippingCompany.id, shippingCompany);
                this.loading = false ; 
            })
        }catch(error){
            runInAction(()=>{
                this.loading = false ; 
            })
        }
    }

    updateShippingCompany = async  (shippingCompany: shippingCompany) =>{
        this.loading = true; 
        try{
            await agent.ShippingCompany.update(shippingCompany);
            runInAction(()=>{
                this.shippingCompanyRegistery.set(shippingCompany.id, shippingCompany);
                this.loading = false ; 
            })
        }catch(error){
            runInAction(()=>{
                this.loading = false ; 
            })
        }
    }

    deleteShippingCompany = async (id: string) =>{
        this.loading = true; 
        try{
            await agent.ShippingCompany.delete(id);
            runInAction(()=>{
                this.shippingCompanyRegistery.delete(id);
                this.loading = false ; 
            })
        }catch(error){
            runInAction(()=>{
                this.loading = false ; 
            })
        }
    }
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
}