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
	response?: string
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
	password1: string
	password2: string
	salaryValue: string
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

	selectedCategory: string

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
	category: string
	destinedValue: number
	setCategory: Function
	setDestinedValeu: Function
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
	destinedValue: number
}

export interface ICategoryProvider {
	typeAction: string
	totalPages: number
	showCreateCategoryModal: boolean
	idCategory: string
	page: number
	itemsPerPage: number
	categoryName: ICategoryName[]
	allCategories: ICategoriesInfo[]
	content: IAllCategories[]
	showDeleteModal: boolean
	setShowDeleteModal: Function
	setTotalPages: Function
	setTypeAction: Function
	getAllCategories: Function
	setShowCreateCategoryModal: Function
	setIdCategory: Function
	parseContent: Function
	setPage: Function
	getNameOfAllCategories: Function
}

interface IDeleteProps {
	type: string
	showButton: boolean
	handleDelete: Function
}

export interface IDeleteCategoryConfig {
	config: IDeleteProps
}

interface IRelease {
	name: string
	date: string
	value: string
}

interface IReleaseContent {
	id: string
	category: string
	destinedValue: string
	total: string
	release: Array<IRelease>
}

interface IReleasesProps {
	selectCurrentDate: any
	isOpen: boolean
	releaseId: string
	currentDate: string
	message: string
	headers: Array<string>
	content: Array<IReleaseContent>
	headerReleasesTable: Array<string>
	showReleasesTable: Function
}

export interface IReleasesConfig {
	config: IReleasesProps
}

export interface MonthOptions {
	value: number
	label: string
}

export interface IMonths {
	[key: number]: string
}

export interface IReleaseContext {
	showCreateReleaseModal: boolean
	typeAction: string
	setTypeAction: Function
	setShowCreateReleaseModal: Function
}

interface IReleaseProps {
	showButton: boolean
	formData: IPostingFormData
	setShowButton: Function
	closeCreateReleaseModal: Function
	createOrUpdateRelease: Function
	onSelect: Function
	onChange: any
	handleFieldChange: Function
}

export interface IReleaseConfig {
	config: IReleaseProps
}

export interface IPostingFormData {
	category: string
	destinedValue?: number
	date: string
	name: string
	value: number
	idRelease?: string
}

export interface IAsyncProvider {
	execute: Function
	showLoading: boolean
	apiResponse: IApiResponse
	setShowLoading: Function
}
