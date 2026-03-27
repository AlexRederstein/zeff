import { IUser } from "../models/IUser";
import {makeAutoObservable} from 'mobx'
import AuthService from "../services/AuthService";

export default class Store {
    user = {} as IUser
    isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setUser(user: IUser) {
        this.user = user
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            let errorMessage = "Failed to do something exceptional";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    }

    async registration(email: string, password: string, name: string, lastname: string, surname: string) {
        try {
            const response = await AuthService.registration(email, password, name, lastname, surname)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            let errorMessage = "Failed to do something exceptional";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    }

    async logout() {
        try {
            await AuthService.logout()
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (error) {
            let errorMessage = "Failed to do something exceptional";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    }
}