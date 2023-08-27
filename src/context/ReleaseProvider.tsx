/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { getAllReleasesApi } from "@/api/release"
import { takeSalary } from "@/api/salary"
import { useAsync, useAuth } from "@/hooks"
import { Messages } from "@/utils/enum"
import { IProps, IReleaseContent, IReleaseContext } from "@/utils/interface"
import React, { createContext, useState } from "react"

export const ReleaseContext = createContext({} as IReleaseContext)

const ReleaseProvider = ({ children }: IProps) => {
	const [showCreateReleaseModal, setShowCreateReleaseModal] = useState(false)
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [content, setContent] = useState<IReleaseContent[]>([])
	const [typeAction, setTypeAction] = useState("")
	const [totalPages, setTotalPages] = useState(0)
	const [page, setPage] = useState(1)
	const [itemsPerPage] = useState(10)
	const [idRelease, setIdRelease] = useState("")
	const [idCategory, setIdCategory] = useState("")
	const [releaseCategory, setReleaseCategory] = useState("")
	const [salaryValue, setSalaryValue] = useState("")

	const { execute } = useAsync()
	const { userId } = useAuth()

	const formatMonthYear = (date: Date): string => {
		const month = date.getMonth() + 1
		const year = date.getFullYear()

		return `${month.toString().padStart(2, "0")}/${year}`
	}

	const [currentDate, setCurrentDate] = useState(formatMonthYear(new Date()))

	const getSalary = async () => {
		const res: any = await execute(takeSalary(userId))

		if (res?.data) setSalaryValue(res?.data.value)
	}

	const getAllReleases = async (currentPage: number, date?: Date) => {
		const selectedDate = date ? formatMonthYear(date) : currentDate

		const res: any = await execute(
			getAllReleasesApi(userId, currentPage, itemsPerPage, selectedDate),
			"",
			Messages.THERE_ISNT_DATA,
		)

		handleApiResponse(res)
	}

	const handleApiResponse = (response: any) => {
		if (response?.status == 200) {
			parseContent(response?.data.items)
			setTotalPages(response?.data.totalPages)
		} else {
			setContent([])
			setTotalPages(0)
		}
	}

	const parseContent = (data: IReleaseContent[]) => {
		const release = data.map((r) => {
			return {
				_id: r._id,
				category: r.category,
				destinedValue: r.destinedValue,
				release: r.release,
				locale: r.locale,
				total: Number(
					r.release
						.reduce((accumulator, currentValue) => {
							return accumulator + currentValue.value
						}, 0)
						.toFixed(2),
				),
				leftover:
					r.destinedValue -
					Number(
						r.release
							.reduce((accumulator, currentValue) => {
								return accumulator + currentValue.value
							}, 0)
							.toFixed(2),
					),
			}
		})

		setContent(release)
	}

	return (
		<ReleaseContext.Provider
			value={{
				showCreateReleaseModal,
				typeAction,
				content,
				totalPages,
				page,
				itemsPerPage,
				currentDate,
				showDeleteModal,
				idRelease,
				releaseCategory,
				idCategory,
				salaryValue,
				getSalary,
				setSalaryValue,
				setIdCategory,
				setReleaseCategory,
				setIdRelease,
				setShowDeleteModal,
				formatMonthYear,
				setCurrentDate,
				setPage,
				setTypeAction,
				setShowCreateReleaseModal,
				getAllReleases,
			}}>
			{children}
		</ReleaseContext.Provider>
	)
}

export default ReleaseProvider
