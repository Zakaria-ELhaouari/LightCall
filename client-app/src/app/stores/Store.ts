import { createContext, useContext } from "react";
import CommonStore from "./CommonStore";
import UserStore from './UserStore';
import StatusStore from './StatusStore';
import OrderStore from './OrderStore';
import OperateurStore from "./OperateurStore";

interface Store {
    commonStore: CommonStore
    userStore: UserStore
    statusStore : StatusStore
    orderStore : OrderStore
    operateurStore : OperateurStore
}

export const store : Store = {
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    statusStore : new StatusStore(),
    orderStore : new OrderStore(),
    operateurStore : new OperateurStore()

}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
