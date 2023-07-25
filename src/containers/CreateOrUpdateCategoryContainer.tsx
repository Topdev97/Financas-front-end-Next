import React, { useState } from "react"
import CreateCategoryModal from "@/components/organisms/CreateOrUpdateCategoryModal"
import { Actions, Messages } from "@/utils/enum"
import { useCategory, useAuth } from "@/hooks"
import { registerCategory, updateCategoryApi } from "@/api/category"

const CreateCategoryContainer = () => {
	const [showButton, setShowButton] = useState(false)

	const { userId } = useAuth()

	const {
		page,
		itemsPerPage,
		destinedValue,
		category,
		idCategory,
		getAllCategories,
		typeAction,
		setResponse,
		setStatusCode,
		setCategory,
		setDestinedValeu,
		setShowLoading,
		setShowCreateCategoryModal,
	} = useCategory()

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

	const closeCreateCategoryModal = () => {
		setShowCreateCategoryModal(false)
		setCategory("")
		setResponse("")
		setStatusCode(0)
		setDestinedValeu(0)
		setShowButton(false)
	}

	const createOrUpdateCategory = (typeAction: string) => {
		if (typeAction == Actions.CREATE) createCategory()
		else updateCategory()
	}

	const createCategory = async () => {
		setShowLoading(true)

		const res: any = await registerCategory(category, destinedValue, userId)

		handleApiResponse(res?.status)

		setShowLoading(false)
	}

	const updateCategory = async () => {
		setShowLoading(true)

		const res: any = await updateCategoryApi(idCategory, {
			userId,
			name: category,
			value: destinedValue > 0 ? destinedValue : undefined,
		})

		handleApiResponse(res?.status)

		setShowLoading(false)
	}

	const handleApiResponse = (status: number) => {
		setStatusCode(status)

		if (status == 201) {
			setResponse(
				typeAction == Actions.CREATE
					? Messages.SUCCESS_IN_CREATING_CATEGORY
					: Messages.SUCESS_IN_UPDATE_CATEGORY,
			)
			setCategory("")
			setDestinedValeu(0)
			setShowButton(false)
			getAllCategories(page, itemsPerPage)
		} else if (status == 409) {
			setResponse(Messages.EXISTING_CATEGORY)
		} else {
			setResponse(Messages.SERVER_ERROR)
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
		handleCategory,
		handleDestinedValue,
		closeCreateCategoryModal,
		createOrUpdateCategory,
	}

	return <CreateCategoryModal config={createCategoryConfig} />
}

export default CreateCategoryContainer
