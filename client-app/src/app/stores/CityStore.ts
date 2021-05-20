import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { City } from "../models/city";
import {v4 as uuid} from 'uuid';

export default class city{
    cityRegistery = new Map<string , City>();
    citySelected : City | undefined = undefined;
    loadingInitial = true;
    loading = false;
    constructor(){
        makeAutoObservable(this);
    }
    get cities() {
        return Array.from(this.cityRegistery.values());
    }
    
    selectCity = (id: string) =>{
        this.citySelected = this.cityRegistery.get(id)
    }
    
    laodCities= async () =>{
        try{
            var cities = await agent.Cities.list();
            cities.forEach(city =>{
                this.cityRegistery.set(city.id, city);
            })
            this.setLoadingInitial(false);
        }catch(error){
            console.log(error)
            this.setLoadingInitial(false)
        }
    }

    loadCity = async (id:string) =>{
        try{
            var cities = await agent.Cities.details(id)
            this.citySelected = cities;
            this.setLoadingInitial(false);
        }catch(error){
            console.log(error)
            this.setLoadingInitial(false)
        }
    }

    creatCity = async (city: City) => {
        this.loading = true ;
        city.id = uuid();
        try{
            await agent.Cities.create(city);
            runInAction(()=>{
                this.cityRegistery.set(city.id, city);
                this.loading = false ; 
            })
        }catch(error){
            runInAction(()=>{
                this.loading = false ; 
            })
        }
    }

    updateCity = async (city: City) =>{
        this.loading = true ;
        try{
            await agent.Cities.update(city);
            runInAction(()=>{
                this.cityRegistery.set(city.id, city);
                this.loading = false ; 
            })
        }catch (error) {
            runInAction(()=>{
                this.loading = false ; 
            })
        }
    }

    deleteCity = async (id: string) =>{
        this.loading = true;
        try{
            await agent.Cities.delete(id);
            runInAction(() => {
                this.cityRegistery.delete(id);
                this.loading = false;
            })
        }catch(error){
            console.log(error);
            runInAction(() => {
                this.loading = false
            })
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
}