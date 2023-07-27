import React, { useState } from "react"
import DeleteModal from "@/components/organisms/DeleteModal"
import { useCategory } from "@/hooks"
import { deleteCategoryApi } from "@/api/category"
import { Messages } from "@/utils/enum"

const DeleteContainer = () => {
	const [type] = useState("categoria")
	const [showButton, setShowButton] = useState(true)

	const {
		idCategory,
		setShowLoading,
		getAllCategories,
		page,
		itemsPerPage,
		setStatusCode,
		setResponse,
	} = useCategory()

	const handleDelete = async () => {
		setShowLoading(true)

		const res: any = await deleteCategoryApi(idCategory)

		if (res?.status == 200) {
			setShowButton(false)
			setStatusCode(res?.status)
			setResponse(Messages.SUCESS_IN_DELETING_CATEGORY)
			getAllCategories(page, itemsPerPage)
		} else {
			setStatusCode(res?.status)
			setResponse(Messages.ERROR_DELETING_CATEGORY)
		}

		setShowLoading(false)
	}

	const config = { type, showButton, handleDelete }

	return <DeleteModal config={config} />
}

export default DeleteContainer
