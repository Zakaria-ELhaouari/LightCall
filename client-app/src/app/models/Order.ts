import { Confirmation } from "./Confirmation";
import { Project } from "./Project";
import { Status } from "./Status";

export interface Order {
    id: string;
    orderId: string
    description: string;
    customer: string;
    product: string;
    Confirmation: Confirmation;
    project: Project;
    status: Status;
    price: number;
}