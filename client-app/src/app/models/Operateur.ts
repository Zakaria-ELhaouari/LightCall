import { Order } from "./Order";
import { User, UserFormValues } from "./User";

export interface Operateur extends UserFormValues{
    id:string;
    Status : boolean;
    Orders? : Order | undefined;
}