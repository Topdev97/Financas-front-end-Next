import React, { useState } from "react"
import ReleaseTable from "@/components/organisms/ReleaseTable"
import { MenuProps } from "antd"
import { useAsync, useRelease } from "@/hooks"
import { Actions } from "@/utils/enum"

const ReleaseTableContainer = () => {
	const [releaseIndex, setReleaseIndex] = useState(-1)
	const [isOpen, setIsOpen] = useState(false)
	const {
		setShowDeleteModal,
		setShowCreateReleaseModal,
		setTypeAction,
		setIdRelease,
		setReleaseCategory,
		setIdCategory,
	} = useRelease()

	const { clearApiResponse } = useAsync()

	const headerReleasesTable = [
		"Lançamento",
		"Valor pagamento",
		"Data pagamento",
		"Localização",
		"Ajustar",
	]

	const menu = (
		idRelease: string,
		category: string,
		idCategory: string,
	): MenuProps["items"] => {
		const actions = [
			{
				key: 1,
				label: (
					<button
						onClick={() =>
							handleReleaseUpdate(idRelease, category, idCategory)
						}>
						Ajustar
					</button>
				),
			},
			{
				key: 2,
				label: (
					<button onClick={() => openDeleteModal(idRelease, category)}>
						Deletar
					</button>
				),
			},
		]

		return actions
	}

	const openDeleteModal = (idRelease: string, category: string) => {
		setIdRelease(idRelease)
		setReleaseCategory(category)
		setShowDeleteModal(true)
		clearApiResponse()
	}

	const handleReleaseUpdate = (
		idRelease: string,
		category: string,
		idCategory: string,
	) => {
		setIdCategory(idCategory)
		setIdRelease(idRelease)
		setReleaseCategory(category)
		setShowCreateReleaseModal(true)
		setTypeAction(Actions.UPDATE)
		clearApiResponse()
	}

	const showReleasesTable = (index: number) => {
		if (releaseIndex != index) {
			setIsOpen(true)
			setReleaseIndex(index)
		} else {
			setIsOpen(false)
			setReleaseIndex(-1)
		}
	}

	const setColorReleaseTable = (index: number): string => {
		return releaseIndex == index
			? "opacity-100"
			: "opacity-70 hover:opacity-100"
	}

	const formatValue = (value: number) => {
		return value.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		})
	}

	const parseDate = (date: string) => {
		return date.split("T")[0].split("-").reverse().join("/")
	}

	const setBackgroundColor = (index: number): string => {
		return index % 2 == 0
			? "bg-gradient-to-b from-white_one to-white"
			: "bg-gradient-to-t from-white_one to-white"
	}

	const config = {
		releaseIndex,
		isOpen,
		headerReleasesTable,
		menu,
		setBackgroundColor,
		showReleasesTable,
		setColorReleaseTable,
		formatValue,
		parseDate,
	}

	return <ReleaseTable config={config} />
}

export default ReleaseTableContainer
