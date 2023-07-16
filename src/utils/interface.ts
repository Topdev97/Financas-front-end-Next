import { ReactNode } from "react"

export interface IUsers {
	name: string
	email: string
	password: string
}

export interface IAuth {
	openRegisterArea: Function
	closeRegisterArea: Function
	login: Function
	showRegisterArea: boolean
	showButton: boolean
	showAcessArea: boolean
}

export interface IProps {
	children: ReactNode
}

export interface IRegister {
	createUsers: Function
	handleName: Function
	handleEmail: Function
	handlePassword: Function
	showPassword: Function
	showButton: boolean
	name: string
	email: string
	password: string
	apiResponse: string
	statusCode: number
	eyesIcon: boolean
	type: string
}

export interface ILogin {
	showPassword: Function
	handleEmail: Function
	handlePassword: Function
	eyesIcon: boolean
	showButton: boolean
	email: string
	password: string
	type: string
}
