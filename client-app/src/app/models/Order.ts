import { Confirmation } from "./Confirmation";
import { Customer } from "./Customer";
import { Product } from "./Product";
import { Project } from "./Project";
import { Status } from "./Status";

export interface Order {
    id: string;
    orderId: string
    description: string;
    customer: Customer ;
    product: Product[];
    Confirmation: Confirmation;
    project: Project;
    status: Status;
    price: number;
}