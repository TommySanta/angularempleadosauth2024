import { Injectable } from "@angular/core";
import axios from "axios";
import { Login } from "../models/login";
import { environment } from "../../environments/environment";

@Injectable()
export class ServiceEmpleados {
    public token: string;

    constructor() {
        this.token = "";
    }

    async loginEmpleado(user: Login): Promise<any> {
        let request = 'auth/login';
        let url = environment.apiUrlEmpleados + request;
        return axios.post(url, user, {
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.data);
    }

    async getPerfilEmpleado(): Promise<any> {
        const url = `${environment.apiUrlEmpleados}api/empleados/perfilempleado`;
        try {
            const response = await axios.get(url, {
                headers: {
                    "Authorization": `Bearer ${this.token}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getSubordinados(): Promise<any> {
        const url = `${environment.apiUrlEmpleados}api/empleados/subordinados`;
        try {
            const response = await axios.get(url, {
                headers: {
                    "Authorization": `Bearer ${this.token}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}