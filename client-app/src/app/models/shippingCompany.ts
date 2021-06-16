import { City } from "./city";

export interface shippingCompany {
    id: string;
    name: string
    apiClient: string;
    cities : City[]
}