import React, { useState } from "react"
import CreateCategoryModal from "@/components/organisms/CategoryModal"
import { Actions, Messages } from "@/utils/enum"
import { useCategory, useAuth, useAsync } from "@/hooks"
import { registerCategory, updateCategoryApi } from "@/api/category"

const CreateCategoryContainer = () => {
	const [showButton, setShowButton] = useState(false)
	const [category, setCategory] = useState("")
	const [destinedValue, setDestinedValeu] = useState(0)
	const { userId } = useAuth()
	const { execute } = useAsync()

	const {
		page,
		itemsPerPage,
		idCategory,
		getAllCategories,
		typeAction,
		setShowCreateCategoryModal,
	} = useCategory()

	const handleCategory = (value: string) => {
		setCategory(value)

		validateDataAndHandleButton(value, destinedValue)
	}

	const handleDestinedValue = (value: number) => {
		setDestinedValeu(value)

		validateDataAndHandleButton(category, value)
	}

	const closeCreateCategoryModal = () => {
		setShowCreateCategoryModal(false)
		setCategory("")
		setDestinedValeu(0)
		setShowButton(false)
	}

	const createOrUpdateCategory = (typeAction: string) => {
		if (typeAction == Actions.CREATE) createCategory()
		else updateCategory()
	}

	const createCategory = async () => {
		const res: any = await execute(
			registerCategory(category, destinedValue, userId),
			Messages.SUCCESS_IN_CREATING_CATEGORY,
			Messages.EXISTING_CATEGORY,
		)

		handleApiResponse(res?.status)
	}

	const updateCategory = async () => {
		const res: any = await execute(
			updateCategoryApi(idCategory, {
				userId,
				name: category,
				value: destinedValue > 0 ? destinedValue : undefined,
			}),
			Messages.SUCESS_IN_UPDATE_CATEGORY,
			Messages.EXISTING_CATEGORY,
		)

		handleApiResponse(res?.status)
	}

	const handleApiResponse = (status: number) => {
		if (status == 201) {
			setCategory("")
			setDestinedValeu(0)
			setShowButton(false)
			getAllCategories(page, itemsPerPage)
		}
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

	const createCategoryConfig = {
		showButton,
		category,
		destinedValue,
		setCategory,
		setDestinedValeu,
		handleCategory,
		handleDestinedValue,
		closeCreateCategoryModal,
		createOrUpdateCategory,
	}

	return <CreateCategoryModal config={createCategoryConfig} />
}

export default CreateCategoryContainer
