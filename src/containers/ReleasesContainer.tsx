import React, { useState } from "react"
import ReleasesArea from "@/components/organisms/ReleasesArea"

const ReleasesContainer = () => {
	const formatMonthYear = (date: Date): string => {
		const month = date.getMonth() + 1
		const year = date.getFullYear()

		return `${month.toString().padStart(2, "0")}/${year}`
	}

	const [currentDate, setCurrentDate] = useState(formatMonthYear(new Date()))
	const [releaseId, setReleaseId] = useState("")
	const [isOpen, setIsOpen] = useState(false)

	const message =
		"Você pode selecionar os lançamentos a partir de uma data específica"

	const headers = ["Categoria", "Valor destinado", "Total de gastos"]

	const headerReleasesTable = [
		"Lançamento",
		"Valor pagamento",
		"Data pagamento",
		"Ajustar",
	]

	const content = [
		{
			id: "1",
			category: "mercado",
			destinedValue: "10",
			total: "10",
			release: [{ name: "tenda", date: "10/10/2023", value: "10" }],
		},
	]

	const selectCurrentDate = (date: any) => {
		setCurrentDate(formatMonthYear(date))
	}

	const showReleasesTable = (id: string) => {
		if (releaseId != id) {
			setIsOpen(true)
			setReleaseId(id)
		} else {
			setIsOpen(false)
			setReleaseId("")
		}
	}

	const config = {
		selectCurrentDate,
		showReleasesTable,
		isOpen,
		releaseId,
		currentDate,
		message,
		headers,
		content,
		headerReleasesTable,
	}

	return <ReleasesArea config={config} />
}

export default ReleasesContainer
