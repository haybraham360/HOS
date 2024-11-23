import axios from "axios";
import { AuthResponse } from "../core/interface";
import { AdminDataStruct } from "../core/struct";

class AdminProvider{
    apiUrl: string;
    options: object;

    constructor(){
        this.apiUrl = import.meta.env.VITE_API_URL;
        this.options = {
            headers: {
                "Content-Type": "application/json"
            }
        }
    }

    async login(admin: AdminDataStruct) : Promise<AuthResponse>{
        try {
            const res = await axios.post(`${this.apiUrl}/admin/auth`, {
                email: admin.email,
                password: admin.password,
            }, this.options);
            
            // check if the response code is 200 OK
            if(res.status == 200){
                const firstname = "";
                return {
                    status: true,
                    message: `Welcome back ${firstname}`,
                    data: res.data
                }
            }

            return {
                status: false,
                message: res.data.message
            }
        } catch (error) {
            return {
                status: false,
                message: `${error}`,
            }
        }
    }

    async register({ firstName, lastName, email, password }: AdminDataStruct) : Promise<AuthResponse>{
        try {
            const res = await axios.post(`${this.apiUrl}/admin/auth/register`, {
                firstName,
                lastName,
                email,
                password
            }, this.options);
            
            // check if the response code is 200 OK
            if(res.status == 200){
                return {
                    status: true,
                    message: `${res.data.message}`,
                }
            }

            return {
                status: false,
                message: res.data.message
            }
        } catch (error) {
            return {
                status: false,
                message: `${error}`,
            }
        }
    }
}

export default AdminProvider;