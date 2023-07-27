/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useState, useEffect } from "react"
import CategoriesArea from "@/components/organisms/CategoriesArea"
import type { MenuProps } from "antd"
import { Actions } from "@/utils/enum"
import { getCategoryByidApi } from "@/api/category"
import { useCategory } from "@/hooks"

const CategoriesContainer = () => {
	const [selectedCategory, setSelectedCategory] = useState("")

	const {
		statusCode,
		response,
		getAllCategories,
		allCategories,
		page,
		itemsPerPage,
		parseContent,
		setPage,
		setShowCreateCategoryModal,
		setTypeAction,
		setIdCategory,
		setShowDeleteModal,
	} = useCategory()

	const headers = ["Categoria", "Valor destinado"]

	useEffect(() => {
		getAllCategories(page, itemsPerPage)
	}, [])

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
	}

	const cleanFilter = () => {
		setSelectedCategory("")
		getAllCategories(page, itemsPerPage)
	}

	const getCategoryByPage = (value: number) => {
		setPage(value)
		getAllCategories(value, itemsPerPage)
	}

	const onSelect = async (name: string) => {
		setSelectedCategory(name)

		const category = allCategories.filter((c) => c.name == name)

		const id = category[0].id

		const res: any = await getCategoryByidApi(id)

		if (res?.status == 200) {
			parseContent([res?.data])
		}
	}

	const handleCategoryCreation = () => {
		setShowCreateCategoryModal(true)
		setTypeAction(Actions.CREATE)
	}

	const handleCategoryUpdate = (id: string) => {
		setIdCategory(id)
		setShowCreateCategoryModal(true)
		setTypeAction(Actions.UPDATE)
	}

	const categoryConfig = {
		headers,
		response,
		statusCode,
		itemsPerPage,
		page,
		selectedCategory,
		menu,
		cleanFilter,
		handleCategoryCreation,
		onSelect,
		getCategoryByPage,
	}

	return (
		<>
			<CategoriesArea config={categoryConfig} />
		</>
	)
}

export default CategoriesContainer
