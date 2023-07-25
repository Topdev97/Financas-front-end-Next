/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { getAllCategoriesApi, getNameOfAllCategoriesApi } from "@/api/category"
import { Messages } from "@/utils/enum"
import React, { createContext, useState } from "react"
import { useAuth } from "@/hooks"
import {
	IAllCategories,
	ICategoriesInfo,
	ICategoryName,
	ICategoryProvider,
	IProps,
} from "@/utils/interface"

export const CategoryContext = createContext({} as ICategoryProvider)

const CategoryProvider = ({ children }: IProps) => {
	const [showLoading, setShowLoading] = useState(false)
	const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false)
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [response, setResponse] = useState("")
	const [statusCode, setStatusCode] = useState(0)
	const [typeAction, setTypeAction] = useState("")
	const [idCategory, setIdCategory] = useState("")
	const [category, setCategory] = useState("")
	const [destinedValue, setDestinedValeu] = useState(0)
	const [categoryName, setCategoryName] = useState<ICategoryName[]>([])
	const [allCategories, setAllCategories] = useState<ICategoriesInfo[]>([])
	const [content, setContent] = useState<IAllCategories[]>([])
	const [page, setPage] = useState(1)
	const [itemsPerPage] = useState(10)

	const { userId } = useAuth()

	const apiResponse = {
		statusCode: statusCode,
		response: response,
	}

	const getNameOfAllCategories = async () => {
		const res: any = await getNameOfAllCategoriesApi(userId)

		const names = res?.data.map((n: any) => {
			return { value: n.name }
		})

		setCategoryName(names)

		setAllCategories(res?.data)
	}

	const getAllCategories = async (currentPage: number, value: number) => {
		setShowLoading(true)

		const res: any = await getAllCategoriesApi(userId, currentPage, value)

		if (res?.status == 200) {
			parseContent(res?.data.categories)
			setTotalPages(res?.data.totalPages)
			getNameOfAllCategories()
		} else {
			setStatusCode(res?.status)
			setResponse(Messages.THERE_ISNT_DATA)
		}

		setShowLoading(false)
	}

	const parseContent = (data: any[]) => {
		const categories = data.map((c) => {
			return {
				id: c._id,
				category: c.name,
				destinedValue: c.value,
			}
		})

		setContent(categories)
	}

	return (
		<CategoryContext.Provider
			value={{
				showLoading,
				totalPages,
				response,
				statusCode,
				typeAction,
				showCreateCategoryModal,
				idCategory,
				category,
				destinedValue,
				categoryName,
				allCategories,
				content,
				apiResponse,
				page,
				itemsPerPage,
				showDeleteModal,
				setShowDeleteModal,
				setTotalPages,
				setShowLoading,
				setResponse,
				setTypeAction,
				setStatusCode,
				getAllCategories,
				setShowCreateCategoryModal,
				setIdCategory,
				setCategory,
				setDestinedValeu,
				parseContent,
				setPage,
			}}>
			{children}
		</CategoryContext.Provider>
	)
}

export default CategoryProvider
