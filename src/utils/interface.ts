import { ReactNode } from "react"

export interface IUsers {
	name: string
	email: string
	email2: string
}

export interface IAuth {
	clientConfig: Function
	getUserId: Function
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
	showPassword: Function
	setFormData: Function
	formData: IUsers
	showButton: boolean
	eyesIcon: boolean
	type: string
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
	setFormData: Function
	openRegisterArea: Function
	openRedefinePasswordArea: Function
	login: Function
	eyesIcon: boolean
	showButton: boolean
	type: string
	formData: {
		email: string
		password: string
	}
}

export interface ILoginConfig {
	config: ILoginProps
}

export interface IRedefinePasswordProps {
	formData: {
		email: string
		password1: string
		password2: string
	}
	setFormData: Function
	closeRedefinePasswordArea: Function
	redefinePassword: Function
	showButton: boolean
}

export interface IRedefinePasswordConfig {
	config: IRedefinePasswordProps
}

export interface ISettingsProps {
	activeEdit: boolean
	showButton: boolean
	formData: {
		password1: string
		password2: string
	}
	showSaveSalaryButton: boolean
	setFormData: Function
	handleSalary: Function
	handleEdit: Function
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
	date: string
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
	showInfoModal: boolean
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
	setShowInfoModal: Function
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
	setFormData: Function
	closeCreateReleaseModal: Function
	createOrUpdateRelease: Function
	onSelect: Function
	onChange: any
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
	clearApiResponse: Function
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

export interface IValidationContext {
	validateEmail: Function
	validateEqualPasswords: Function
	handleFieldChange: Function
	validateEqualEmails: Function
}
