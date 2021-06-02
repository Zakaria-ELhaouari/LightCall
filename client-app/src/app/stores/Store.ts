import { createContext, useContext } from "react";
import CommonStore from "./CommonStore";
import UserStore from './UserStore';
import StatusStore from './StatusStore';
import OrderStore from './OrderStore';
import ProjectStore from './ProjectStore';
import LayoutStore from './LayoutStore';

interface Store {
    commonStore: CommonStore
    userStore: UserStore
    statusStore : StatusStore
    orderStore : OrderStore
    projectStore : ProjectStore
    layoutStore: LayoutStore
}

export const store : Store = {
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    statusStore : new StatusStore(),
    orderStore : new OrderStore(),
    projectStore : new ProjectStore(),
    layoutStore: new LayoutStore()

}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
