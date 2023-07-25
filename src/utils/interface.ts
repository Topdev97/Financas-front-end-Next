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
	statusCode: number
	eyesIcon: boolean
	type: string
	apiResponse: IApiResponse
}

export interface IRegisterConfig {
	config: IRegisterProps
}

export interface IApiResponse {
	statusCode: number
	response: string
}

export interface IApiResponseConfig {
	config: IApiResponse
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
	apiResponse: IApiResponse
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
	apiResponse: IApiResponse
	statusCode: number
}

export interface IRedefinePasswordConfig {
	config: IRedefinePasswordProps
}

export interface ISettingsProps {
	activeEdit: boolean
	showButton: boolean
	showSaveSalaryButton: boolean
	apiResponse: IApiResponse
	password1: string
	password2: string
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

export interface ICategoryName {
	value: string
}

export interface ICategoriesProps {
	itemsPerPage: number
	page: number
	response: string
	selectedCategory: string
	statusCode: number
	headers: Array<string>
	menu: Function
	handleCategoryCreation: Function
	onSelect: Function
	cleanFilter: Function
	getCategoryByPage: Function
}

export interface ICategoriesConfig {
	config: ICategoriesProps
}

export interface ICreateCategoryProps {
	showButton: boolean

	closeCreateCategoryModal: Function
	handleCategory: Function
	handleDestinedValue: Function
	createOrUpdateCategory: Function
}

export interface ICreateCategoryConfig {
	config: ICreateCategoryProps
}

export interface IAllCategories {
	id: string
	category: string
	destinedValue: number
}

export interface IUpdateCategory {
	userId: string
	name: string
	value: number | undefined
}

export interface ResponseMap {
	[key: number]: JSX.Element
}

export interface ICategoriesInfo {
	id: string
	name: string
}

export interface ICategoryProvider {
	showLoading: boolean
	typeAction: string
	totalPages: number
	response: string
	statusCode: number
	showCreateCategoryModal: boolean
	idCategory: string
	category: string
	destinedValue: number
	page: number
	itemsPerPage: number
	apiResponse: IApiResponse
	categoryName: ICategoryName[]
	allCategories: ICategoriesInfo[]
	content: IAllCategories[]
	showDeleteModal: boolean
	setShowDeleteModal: Function
	setShowLoading: Function
	setTotalPages: Function
	setResponse: Function
	setStatusCode: Function
	setTypeAction: Function
	getAllCategories: Function
	setShowCreateCategoryModal: Function
	setIdCategory: Function
	setCategory: Function
	setDestinedValeu: Function
	parseContent: Function
	setPage: Function
}
