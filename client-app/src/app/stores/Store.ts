import { createContext, useContext } from "react";
import CommonStore from "./CommonStore";
import UserStore from './UserStore';
import StatusStore from './StatusStore';
import OrderStore from './OrderStore';
import ProjectStore from './ProjectStore';
import OperateurStore from "./OperateurStore";
import CityStore from "./CityStore";
import ShippingCompanystore from "./ShippingCompanyStore";


interface Store {
    commonStore: CommonStore
    userStore: UserStore
    statusStore : StatusStore
    orderStore : OrderStore
    projectStore : ProjectStore
    operateurStore : OperateurStore
    cityStore : CityStore
    shippingCompanyStore : ShippingCompanystore
}

export const store : Store = {
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    statusStore : new StatusStore(),
    orderStore : new OrderStore(),
    operateurStore : new OperateurStore(),
    cityStore : new CityStore(),
    shippingCompanyStore : new ShippingCompanystore(),
    projectStore : new ProjectStore(),

}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
