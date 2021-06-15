import { Product } from "./Product";

export interface UpSell {
    id: string;
    status: boolean ;
    name : string;
    project_id: string;
    products_ids: Product[];
}