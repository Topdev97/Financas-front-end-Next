/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useState, useEffect } from "react"
import CreateCategoryModal from "@/components/organisms/CreateCategoryModal"
import CategoriesArea from "@/components/organisms/CategoriesArea"
import Loading from "@/components/molecules/Loading"
import { Actions, Messages } from "@/utils/enum"
import {
	getAllCategoriesApi,
	getCategoryByidApi,
	getNameOfAllCategoriesApi,
	registerCategory,
} from "@/api/category"
import useAuth from "@/hooks/useAuth"
import {
	IAllCategories,
	ICategoriesInfo,
	ICategoryName,
} from "@/utils/interface"

const CategoriesContainer = () => {
	const [showLoading, setShowLoading] = useState(false)
	const [showButton, setShowButton] = useState(false)
	const [typeAction, setTypeAction] = useState("")
	const [category, setCategory] = useState("")
	const [destinedValue, setDestinedValeu] = useState(0)
	const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false)
	const [response, setResponse] = useState("")
	const [statusCode, setStatusCode] = useState(0)
	const [content, setContent] = useState<IAllCategories[]>([])
	const [page, setPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(10)
	const [totalPages, setTotalPages] = useState(0)
	const [categoryName, setCategoryName] = useState<ICategoryName[]>([])
	const [allCategories, setAllCategories] = useState<ICategoriesInfo[]>([])

	useEffect(() => {
		getAllCategories()
	}, [])

	const apiResponse = {
		statusCode: statusCode,
		response: response,
	}

	const { userId } = useAuth()

	const headers = ["Categoria", "Valor destinado"]

	const actions = [
		{
			key: 1,
			label: <button onClick={() => handleCategoryUpdate()}>Ajustar</button>,
		},
		{ key: 2, label: <button>Deletar</button> },
	]

	const onSelect = async (data: string) => {
		console.log("ddddd", data)

		const category = allCategories.filter((c) => c.name == data)

		const id = category[0].id

		console.log("iddd", id)

		const res: any = await getCategoryByidApi(id)

		if (res?.status == 200) {
			parseContent([res?.data])
		}
	}

	const getNameOfAllCategories = async () => {
		const res: any = await getNameOfAllCategoriesApi(userId)

		const names = res?.data.map((n: any) => {
			return { value: n.name }
		})

		setCategoryName(names)

		setAllCategories(res?.data)
	}

	const getAllCategories = async () => {
		setShowLoading(true)

		const res: any = await getAllCategoriesApi(userId, page, itemsPerPage)

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

	const createCategory = async () => {
		setShowLoading(true)

		const res: any = await registerCategory(category, destinedValue, userId)

		handleApiResponse(res?.status)

		setShowLoading(false)
	}

	const handleCategory = (value: string) => {
		setResponse("")
		setStatusCode(0)

		setCategory(value)

		validateDataAndHandleButton(value, destinedValue)
	}

	const handleDestinedValue = (value: number) => {
		setResponse("")
		setStatusCode(0)

		setDestinedValeu(value)

		validateDataAndHandleButton(category, value)
	}

	const validateDataAndHandleButton = (
		category: string,
		destinedValue: number,
	) => {
		const isValidCreate =
			typeAction == Actions.CREATE && destinedValue > 0 && category != ""

		const isValidUpdate =
			(typeAction == Actions.UPDATE && destinedValue > 0) ||
			(typeAction == Actions.UPDATE && category != "")

		const showButton = isValidCreate || isValidUpdate

		setShowButton(showButton)
	}

	const handleCategoryCreation = () => {
		setShowCreateCategoryModal(true)
		setTypeAction(Actions.CREATE)
	}

	const handleCategoryUpdate = () => {
		setShowCreateCategoryModal(true)
		setTypeAction(Actions.UPDATE)
	}

	const handleApiResponse = (status: number) => {
		setStatusCode(status)

		if (status == 201) {
			setResponse(Messages.SUCCESS_IN_CREATING_CATEGORY)
			setCategory("")
			setDestinedValeu(0)
			setShowButton(false)
			getAllCategories()
		} else if (status == 409) {
			setResponse(Messages.EXISTING_CATEGORY)
		} else {
			setResponse(Messages.SERVER_ERROR)
		}
	}

	const closeCreateCategoryModal = () => {
		setShowCreateCategoryModal(false)
		setCategory("")
		setResponse("")
		setStatusCode(0)
		setDestinedValeu(0)
		setShowButton(false)
	}

	const categoryConfig = {
		headers,
		content,
		actions,
		totalPages,
		response,
		statusCode,
		itemsPerPage,
		categoryName,
		handleCategoryCreation,
		setPage,
		setItemsPerPage,
		onSelect,
	}

	const createCategoryConfig = {
		typeAction,
		showButton,
		category,
		destinedValue,
		apiResponse,
		handleCategory,
		handleDestinedValue,
		closeCreateCategoryModal,
		setShowCreateCategoryModal,
		createCategory,
	}

	return (
		<>
			{showLoading && <Loading />}

			{showCreateCategoryModal && (
				<CreateCategoryModal config={createCategoryConfig} />
			)}

			<CategoriesArea config={categoryConfig} />
		</>
	)
}

export default CategoriesContainer
