import { ReactNode } from "react"

export interface IUsers {
	name: string
	email: string
	password: string
}

export interface IAuth {
	setUserId: Function
	setShowRegisterArea: Function
	setAcessArea: Function
	setShowRedefinePasswordArea: Function
	showRedefinePasswordArea: boolean
	showRegisterArea: boolean
	showAcessArea: boolean
	userId: string
}

export interface IProps {
	children: ReactNode
}

export interface IRegister {
	createUsers: Function
	closeRegisterArea: Function
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
	openRegisterArea: Function
	openRedefinePasswordArea: Function
	login: Function
	eyesIcon: boolean
	showButton: boolean
	email: string
	password: string
	type: string
	apiResponse: string
	statusCode: number
}

export interface IRedefinePassword {
	handleEmail: Function
	handlePassword1: Function
	handlePassword2: Function
	closeRedefinePasswordArea: Function
	redefinePassword: Function
	showButton: boolean
	email: string
	password1: string
	password2: string
	apiResponse: string
	statusCode: number
}

export interface ISettings {
	activeEdit: boolean
	handleEdit: Function
	editSalary: Function
}
