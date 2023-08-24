import React, { useEffect } from "react"
import ReleasesArea from "@/components/organisms/ReleasesArea"
import { useRelease, useAuth, useAsync } from "@/hooks"
import { Actions } from "@/utils/enum"

const ReleasesContainer = () => {
	const {
		getAllReleases,
		page,
		setCurrentDate,
		formatMonthYear,
		setShowCreateReleaseModal,
		setTypeAction,
	} = useRelease()

	const { userId } = useAuth()

	const { setApiResponse } = useAsync()

	useEffect(() => {
		getAllReleases(page)
	}, [userId, getAllReleases])

	const message =
		"Você pode selecionar os lançamentos a partir de uma data específica"

	const headers = [
		"Categoria",
		"Valor destinado",
		"Total de gastos",
		"Sobrando",
	]

	const openModal = () => {
		setShowCreateReleaseModal(true)
		setTypeAction(Actions.CREATE)
		setApiResponse({
			statusCode: 0,
			response: "",
		})
	}

	const selectCurrentDate = (date: any) => {
		const selectedDate = date ? date.$d : new Date()

		setCurrentDate(formatMonthYear(selectedDate))
		getAllReleases(page, selectedDate)
	}

	const config = {
		selectCurrentDate,
		openModal,
		message,
		headers,
	}

	return <ReleasesArea config={config} />
}

export default ReleasesContainer
