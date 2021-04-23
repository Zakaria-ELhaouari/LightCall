import { makeAutoObservable, reaction } from "mobx";
import jwt_decode, { JwtPayload } from "jwt-decode";

export default class CommonStore  {
   token: string | null = window.localStorage.getItem('jwt');
   appLoaded = false;

    constructor(){
        makeAutoObservable(this);


        reaction(
            () => this.token,
            token => {
                if(token) {
                    window.localStorage.setItem('jwt', token)
                } else {
                    window.localStorage.removeItem('jwt');
                }
            }
        )
    }

    setToken = (token: string | null) => {
        this.token = token;
    }

    setApploaded = () => {
        this.appLoaded = true;
    }


    //Check if one of these roles is in the token
    isRoles = (RoleList: string[]) => {
        var roles = this.TokenRoles();
        // return true if on of incoming roles exists in token roles & false otherwise
        return RoleList.some(r => roles?.includes(r)); 
    }

    //Decode the Token And return an Array of tokens

    TokenRoles = () => {
        let Roles: string | string[] | undefined
        var Decoded = jwt_decode<JwtPayload>(this.token || '') || null;
        Roles = Decoded.role;
        return Roles
    }

    

}
