export interface User  {
    userName?: string;
	firstName: string;
	lastName: string;
    email: string;
    token: string;
    roles?: string[];
    skypeId?: string;
    image?: string;
}


export interface UserFormValues {
    userName?: string;
	firstName?: string;
	lastName?: string;
    password: string;
    email: string;
    skypeId?: string;
}


