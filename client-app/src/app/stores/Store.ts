import { createContext, useContext } from "react";
import CommonStore from "./CommonStore";
import UserStore from './UserStore';
import StatusStore from './StatusStore';
import OrderStore from './OrderStore';
import ProjectStore from './ProjectStore';
import OperateurStore from "./OperateurStore";

interface Store {
    commonStore: CommonStore
    userStore: UserStore
    statusStore : StatusStore
    orderStore : OrderStore
    projectStore : ProjectStore
    operateurStore : OperateurStore
}

export const store : Store = {
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    statusStore : new StatusStore(),
    orderStore : new OrderStore(),
    projectStore : new ProjectStore(),
    operateurStore : new OperateurStore()

}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
