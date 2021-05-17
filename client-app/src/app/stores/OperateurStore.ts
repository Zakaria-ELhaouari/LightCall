import { makeAutoObservable, runInAction  } from 'mobx';
import agent from '../api/agent';
import { Operateur } from '../models/Operateur';
import {v4 as uuid} from 'uuid';
import { UserFormValues } from '../models/User';
import { store } from './Store';

export default class OperateurStore {

    operateurRegisetry = new Map<string, Operateur>();
    selectedOperateur : Operateur | undefined = undefined ;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this)
    }

    get operateurs() {
        return Array.from(this.operateurRegisetry.values());
    }

    loadOperateurs = async () =>{
        try{
            var operateurs = await agent.OperateurAcc.list();
            console.log(operateurs);
            operateurs.forEach(operateur =>{
                this.operateurRegisetry.set(operateur.id, operateur);
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

    creatOperateur = async (operateur: Operateur) =>{
        operateur.id = uuid();
        try {
            await agent.OperateurAcc.create(operateur);
            runInAction(()=>{
                this.operateurRegisetry.set(operateur.id, operateur);
                this.loading = false ; 
            })
        } catch (error) {
            runInAction(()=>{
                this.loading = false ; 
            })
        }
    } 

    // creatOperateur = async (creds: UserFormValues) => {
    //     try {
    //         const user = await agent.OperateurAcc.create(creds)
    //         store.commonStore.setToken(user.);
    //         runInAction(() => this.user = user);
            
    //         history.push('/dashboard');
            
            
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    updateOperateur = async(operateur: Operateur) => {
        this.loading = true ;
        try {
            await agent.OperateurAcc.update(operateur);
            runInAction(()=>{
                this.operateurRegisetry.set(operateur.id, operateur);
                this.loading = false ; 
            })
        } catch (error) {
            runInAction(()=>{
                this.loading = false ; 
            })
        }

    }
}