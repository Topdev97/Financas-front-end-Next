/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useState, useEffect } from "react"
import CategoriesArea from "@/components/organisms/CategoriesArea"
import type { MenuProps } from "antd"
import { Actions } from "@/utils/enum"
import { getCategoryByidApi } from "@/api/category"
import { useAsync, useCategory, useAuth } from "@/hooks"

const CategoriesContainer = () => {
	const [selectedCategory, setSelectedCategory] = useState("")
	const { userId } = useAuth()
	const {
		getAllCategories,
		allCategories,
		page,
		parseContent,
		setPage,
		setShowCreateCategoryModal,
		setTypeAction,
		setIdCategory,
		setShowDeleteModal,
	} = useCategory()

	const { execute, clearApiResponse } = useAsync()

	const headers = ["Categoria", "Valor destinado"]

	useEffect(() => {
		getAllCategories(page)
	}, [userId])

	const menu = (id: string): MenuProps["items"] => {
		const actions = [
			{
				key: 1,
				label: (
					<button onClick={() => handleCategoryUpdate(id)}>Ajustar</button>
				),
			},
			{
				key: 2,
				label: <button onClick={() => openDeleteModal(id)}>Deletar</button>,
			},
		]

		return actions
	}

	const openDeleteModal = (id: string) => {
		setIdCategory(id)
		setShowDeleteModal(true)
		clearApiResponse()
	}

	const cleanFilter = () => {
		setSelectedCategory("")
		getAllCategories(page)
	}

	const getCategoryByPage = (value: number) => {
		setPage(value)
		getAllCategories(value)
	}

	const onSelect = async (name: string) => {
		setSelectedCategory(name)

		const category = allCategories.filter((c) => c.name == name)

		const id = category[0].id

		const res: any = await execute(getCategoryByidApi(id))

		if (res?.status == 200) {
			parseContent([res?.data])
		}
	}

	const handleCategoryCreation = () => {
		setShowCreateCategoryModal(true)
		setTypeAction(Actions.CREATE)
		clearApiResponse()
	}

	const handleCategoryUpdate = (id: string) => {
		setIdCategory(id)
		setShowCreateCategoryModal(true)
		setTypeAction(Actions.UPDATE)
		clearApiResponse()
	}

	const categoryConfig = {
		headers,
		selectedCategory,
		menu,
		cleanFilter,
		handleCategoryCreation,
		onSelect,
		getCategoryByPage,
	}

	return <CategoriesArea config={categoryConfig} />
}

export default CategoriesContainer
