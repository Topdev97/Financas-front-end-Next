/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { getAllCategoriesApi, getNameOfAllCategoriesApi } from "@/api/category"
import { Messages } from "@/utils/enum"
import React, { createContext, useState } from "react"
import { useAsync, useAuth } from "@/hooks"
import {
	IAllCategories,
	ICategoriesInfo,
	ICategoryName,
	ICategoryProvider,
	IProps,
} from "@/utils/interface"

export const CategoryContext = createContext({} as ICategoryProvider)

const CategoryProvider = ({ children }: IProps) => {
	const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false)
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [typeAction, setTypeAction] = useState("")
	const [idCategory, setIdCategory] = useState("")
	const [categoryName, setCategoryName] = useState<ICategoryName[]>([])
	const [allCategories, setAllCategories] = useState<ICategoriesInfo[]>([])
	const [content, setContent] = useState<IAllCategories[]>([])
	const [page, setPage] = useState(1)
	const [itemsPerPage] = useState(10)

	const { userId } = useAuth()
	const { execute } = useAsync()

	const getNameOfAllCategories = async () => {
		const res: any = await getNameOfAllCategoriesApi(userId)

		const names = res?.data.map((n: any) => {
			return { value: n.name }
		})

		setCategoryName(names)

		setAllCategories(res?.data)
	}

	const getAllCategories = async (currentPage: number, value: number) => {
		const res: any = await execute(
			getAllCategoriesApi(userId, currentPage, value),
			"",
			Messages.THERE_ISNT_DATA,
		)

		if (res?.status == 200) {
			parseContent(res?.data.categories)
			setTotalPages(res?.data.totalPages)
			getNameOfAllCategories()
		}
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
				totalPages,
				typeAction,
				showCreateCategoryModal,
				idCategory,
				categoryName,
				allCategories,
				content,
				page,
				itemsPerPage,
				showDeleteModal,
				setShowDeleteModal,
				setTotalPages,
				setTypeAction,
				getAllCategories,
				setShowCreateCategoryModal,
				setIdCategory,
				parseContent,
				setPage,
				getNameOfAllCategories,
			}}>
			{children}
		</CategoryContext.Provider>
	)
}

export default CategoryProvider
