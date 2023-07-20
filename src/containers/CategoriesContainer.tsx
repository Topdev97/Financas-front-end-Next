"use client"

import React, { useState } from "react"
import CreateCategoryModal from "@/components/molecules/CreateCategoryModal"
import CategoriesArea from "@/components/organisms/CategoriesArea"
import Loading from "@/components/molecules/Loading"
import { Actions } from "@/utils/enum"

const CategoriesContainer = () => {
	const [showLoading] = useState(false)
	const [showButton, setShowButton] = useState(false)
	const [typeAction, setTypeAction] = useState("")
	const [category, setCategory] = useState("")
	const [destinedValue, setDestinedValeu] = useState(0)
	const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(true)

	const headers = ["Categoria", "Valor destinado"]

	const content: any = [
		{ category: "Mercado", destinedValue: 10.5 },
		{ category: "Farmacia", destinedValue: 10.5 },
		{ category: "Combustivel", destinedValue: 200.5 },
	]

	const actions = [
		{
			key: 1,
			label: <button onClick={() => handleCategoryUpdate()}>Ajustar</button>,
		},
		{ key: 2, label: <button>Deletar</button> },
	]

	const handleCategory = (value: string) => {
		setCategory(value)

		if (typeAction == Actions.CREATE) {
			console.log("aqui")

			if (value != "" && destinedValue > 0) {
				console.log("aquiiiii", destinedValue)
				setShowButton(true)
			} else {
				console.log("aqui nao")
				setShowButton(false)
			}
		} else {
			console.log("ola")

			setShowButton(true)
		}
	}

	const handleDestinedValue = (value: number) => {
		setDestinedValeu(value)

		if (category != "" && value > 0) {
			setShowButton(true)
		} else {
			setShowButton(false)
		}
	}

	const handleCategoryCreation = () => {
		setShowCreateCategoryModal(true)
		setTypeAction(Actions.CREATE)
	}

	const handleCategoryUpdate = () => {
		setShowCreateCategoryModal(true)
		setTypeAction(Actions.UPDATE)
	}

	const closeCreateCategoryModal = () => {
		setShowCreateCategoryModal(false)
		setCategory("")
		setDestinedValeu(0)
		setShowButton(false)
	}

	const categoryConfig = {
		headers,
		content,
		actions,
		handleCategoryCreation,
	}

	const createCategoryConfig = {
		typeAction,
		showButton,
		handleCategory,
		handleDestinedValue,
		closeCreateCategoryModal,
		setShowCreateCategoryModal,
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
