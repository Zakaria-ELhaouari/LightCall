import { createContext, useContext } from "react";
import CommonStore from "./CommonStore";
import UserStore from './UserStore';
import StatusStore from './StatusStore';
import OrderStore from './OrderStore';

interface Store {
    commonStore: CommonStore
    userStore: UserStore
    statusStore : StatusStore
    orderStore : OrderStore
}

export const store : Store = {
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    statusStore : new StatusStore(),
    orderStore : new OrderStore(),

}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
