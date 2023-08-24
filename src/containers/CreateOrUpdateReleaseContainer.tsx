/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react"
import CreateOrUpdateReleaseModal from "@/components/organisms/ReleaseModal"
import { useAuth, useCategory, useRelease, useAsync } from "@/hooks"
import { DatePickerProps } from "antd"
import { IPostingFormData } from "@/utils/interface"
import { Actions, Messages } from "@/utils/enum"
import { createReleaseApi, updateReleaseApi } from "@/api/release"
import { v4 as uuidv4 } from "uuid"

const CreateOrUpdateReleaseContainer = () => {
	const {
		setShowCreateReleaseModal,
		getAllReleases,
		currentDate,
		typeAction,
		idRelease,
		idCategory,
		releaseCategory,
	} = useRelease()
	const { getNameOfAllCategories, allCategories } = useCategory()
	const { execute } = useAsync()
	const { userId } = useAuth()

	const [formData, setFormData] = useState<IPostingFormData>({
		category: "",
		date: "",
		name: "",
		value: 0,
		locale: "",
	})

	useEffect(() => {
		getNameOfAllCategories()
	}, [])

	const closeCreateReleaseModal = () => {
		setShowCreateReleaseModal(false)
	}

	const cleanFilter = () => {
		setFormData((prevData) => ({
			...prevData,
			["category"]: "",
		}))
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

		const res: any = await execute(
			createReleaseApi(
				formData,
				value[0].destinedValue,
				idRelease,
				userId,
				currentDate,
			),
			Messages.SUCESS_IN_CREATING_RELEASE,
			Messages.SERVER_ERROR,
		)

		if (res?.status == 201) {
			setFormData({ category: "", date: "", name: "", value: 0, locale: "" })
			getAllReleases()
		}
	}

	const updateRelease = async () => {
		const res: any = await execute(
			updateReleaseApi(
				formData,
				releaseCategory,
				idRelease,
				idCategory,
				userId,
			),
			Messages.SUCESS_IN_UPDATE_RELEASE,
			Messages.SERVER_ERROR,
		)

		if (res?.status == 204) {
			setFormData({ category: "", date: "", name: "", value: 0, locale: "" })
			getAllReleases()
		}
	}

	const onSelect = (data: string) => {
		handleFieldChange("category", data)
	}

	const onChange: DatePickerProps["onChange"] = (date: any) => {
		handleFieldChange("date", date != null ? new Date(date).toISOString() : "")
	}

	const handleFieldChange = useCallback((fieldName: string, value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[fieldName]: value,
		}))
	}, [])

	const validateDataToCreate = () => {
		return Object.values(formData).every((value) => value !== "" && value != 0)
	}

	const validateDataToUpdate = () => {
		const validate = []

		for (const key in formData) {
			if (formData[key as keyof IPostingFormData] != "") {
				validate.push(key)
			}
		}

		return validate.length > 0 ? true : false
	}

	const showButton = useMemo(() => {
		return typeAction == Actions.CREATE
			? validateDataToCreate()
			: validateDataToUpdate()
	}, [formData])

	const config = {
		showButton,
		formData,
		cleanFilter,
		closeCreateReleaseModal,
		createOrUpdateRelease,
		onSelect,
		onChange,
		handleFieldChange,
	}

	return <CreateOrUpdateReleaseModal config={config} />
}

export default CreateOrUpdateReleaseContainer
