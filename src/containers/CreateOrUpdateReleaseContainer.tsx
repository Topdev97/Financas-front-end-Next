/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react"
import CreateOrUpdateReleaseModal from "@/components/organisms/ReleaseModal"
import { useAuth, useCategory, useRelease, useAsync } from "@/hooks"
import { DatePickerProps } from "antd"
import { IPostingFormData } from "@/utils/interface"
import { Actions, Messages } from "@/utils/enum"
import { createReleaseApi } from "@/api/release"
import { v4 as uuidv4 } from "uuid"

const CreateOrUpdateReleaseContainer = () => {
	const { setShowCreateReleaseModal } = useRelease()
	const { getNameOfAllCategories, allCategories } = useCategory()
	const { execute } = useAsync()
	const { userId } = useAuth()
	const [showButton, setShowButton] = useState(false)
	const [formData, setFormData] = useState<IPostingFormData>({
		category: "",
		date: "",
		name: "",
		value: 0,
	})

	useEffect(() => {
		getNameOfAllCategories()
	}, [])

	const closeCreateReleaseModal = () => {
		setShowCreateReleaseModal(false)
	}

	const createOrUpdateRelease = (action: string) => {
		if (action == Actions.CREATE) createRelease()
		else updateRelease()
	}

	const createRelease = async () => {
		const value = allCategories.filter(
			(value) => value.name == formData.category,
		)

		const idRelease = uuidv4()

		execute(
			createReleaseApi(formData, value[0].destinedValue, idRelease, userId),
			Messages.SUCESS_IN_CREATING_RELEASE,
			Messages.SERVER_ERROR,
		)

		setFormData({ category: "", date: "", name: "", value: 0 })
	}

	const updateRelease = () => {
		console.log("atualizar")
	}

	const handleFieldChange = useCallback((fieldName: string, value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[fieldName]: value,
		}))
	}, [])

	useMemo(() => {
		setShowButton(
			Object.values(formData).every((value) => value !== "" && value != 0),
		)
	}, [formData])

	const onSelect = (data: string) => {
		handleFieldChange("category", data)
	}

	const onChange: DatePickerProps["onChange"] = (date: any) => {
		handleFieldChange("date", new Date(date).toISOString())
	}

	const config = {
		showButton,
		formData,
		setShowButton,
		closeCreateReleaseModal,
		createOrUpdateRelease,
		onSelect,
		onChange,
		handleFieldChange,
	}

	return <CreateOrUpdateReleaseModal config={config} />
}

export default CreateOrUpdateReleaseContainer
