/* eslint-disable react-hooks/exhaustive-deps */
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
		setPage,
		content,
		salaryValue,
	} = useRelease()

	const { userId } = useAuth()

	const { clearApiResponse } = useAsync()

	useEffect(() => {
		getAllReleases(page)
	}, [userId])

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
		clearApiResponse()
	}

	const selectCurrentDate = (date: any) => {
		const selectedDate = date ? date.$d : new Date()

		setCurrentDate(formatMonthYear(selectedDate))
		getAllReleases(page, selectedDate)
	}

	const getReleaseByPage = (value: number) => {
		setPage(value)
		getAllReleases(value)
	}

	const totalAmountAllocated = () => {
		return content
			.reduce(
				(accumulator, currentValue) => accumulator + currentValue.destinedValue,
				0,
			)
			.toLocaleString("pt-BR", {
				style: "currency",
				currency: "BRL",
			})
	}

	const salaryMinusExpenses = () => {
		const exprenses = content.reduce(
			(accumulator, currentValue) => accumulator + currentValue.destinedValue,
			0,
		)

		return (Number(salaryValue) - exprenses).toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		})
	}

	const config = {
		selectCurrentDate,
		openModal,
		getReleaseByPage,
		totalAmountAllocated,
		salaryMinusExpenses,
		message,
		headers,
	}

	return <ReleasesArea config={config} />
}

export default ReleasesContainer
