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

export interface IRegisterProps {
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

export interface IRegisterConfig {
	config: IRegisterProps
}

export interface ILoginProps {
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

export interface ILoginConfig {
	config: ILoginProps
}

export interface IRedefinePasswordProps {
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

export interface IRedefinePasswordConfig {
	config: IRedefinePasswordProps
}

export interface ISettingsProps {
	activeEdit: boolean
	showButton: boolean
	showSaveSalaryButton: boolean
	apiResponse: string
	password1: string
	password2: string
	statusCode: number
	salaryValue: string
	salaryStatusCode: number
	handleSalary: Function
	handleEdit: Function
	handlePassword1: Function
	handlePassword2: Function
	redefinePassword: Function
	setSalaryValue: Function
	saveSalary: Function
}

export interface ISettingsConfig {
	config: ISettingsProps
}

export interface ICategoriesProps {
	headers: Array<string>
}

export interface ICategoriesConfig {
	config: ICategoriesProps
}
