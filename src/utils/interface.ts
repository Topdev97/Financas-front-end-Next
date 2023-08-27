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
	handleSalary: Function
	handleEdit: Function
	handlePassword1: Function
	handlePassword2: Function
	redefinePassword: Function
	saveSalary: Function
}

export interface ISettingsConfig {
	config: ISettingsProps
}

export interface ICategoryName {
	value: string
}

export interface ICategoriesProps {
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
	closeDeleteModal: Function
}

export interface IDeleteCategoryConfig {
	config: IDeleteProps
}

interface IRelease {
	idRelease: string
	name: string
	createdAt: string
	value: number
	locale: string
}

export interface IReleaseContent {
	_id: string
	category: string
	destinedValue: number
	release: Array<IRelease>
	total: number
	leftover: number
	locale: string
}

interface IReleasesProps {
	selectCurrentDate: any
	message: string
	headers: Array<string>
	openModal: Function
	getReleaseByPage: Function
	totalAmountAllocated: Function
	salaryMinusExpenses: Function
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
	content: Array<IReleaseContent>
	totalPages: number
	page: number
	itemsPerPage: number
	currentDate: string
	showDeleteModal: boolean
	idRelease: string
	releaseCategory: string
	idCategory: string
	salaryValue: string
	setSalaryValue: Function
	setIdCategory: Function
	setIdRelease: Function
	setShowDeleteModal: Function
	setTypeAction: Function
	setShowCreateReleaseModal: Function
	setPage: Function
	getAllReleases: Function
	formatMonthYear: Function
	setCurrentDate: Function
	setReleaseCategory: Function
	getSalary: Function
}

interface IReleaseProps {
	showButton: boolean
	formData: IPostingFormData
	closeCreateReleaseModal: Function
	createOrUpdateRelease: Function
	onSelect: Function
	onChange: any
	handleFieldChange: Function
	cleanFilter: Function
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
	createdAt?: string
	locale: string
}

export interface IAsyncProvider {
	execute: Function
	showLoading: boolean
	apiResponse: IApiResponse
	setShowLoading: Function
	setApiResponse: Function
}

interface IReleaseTableProps {
	headerReleasesTable: Array<string>
	isOpen: boolean
	releaseIndex: number
	setColorReleaseTable: Function
	formatValue: Function
	showReleasesTable: Function
	parseDate: Function
	setBackgroundColor: Function
	menu: Function
}

export interface IReleaseTableConfig {
	config: IReleaseTableProps
}
