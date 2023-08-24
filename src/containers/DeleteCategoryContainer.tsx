import React, { useState } from "react"
import DeleteModal from "@/components/organisms/DeleteModal"
import { useAsync, useCategory } from "@/hooks"
import { deleteCategoryApi } from "@/api/category"
import { Messages } from "@/utils/enum"

const DeleteCategoryContainer = () => {
	const [type] = useState("categoria")
	const [showButton, setShowButton] = useState(true)

	const { idCategory, getAllCategories, page, setShowDeleteModal } =
		useCategory()

	const { execute } = useAsync()

	const handleDelete = async () => {
		const res: any = await execute(
			deleteCategoryApi(idCategory),
			Messages.SUCESS_IN_DELETING_CATEGORY,
			Messages.ERROR_DELETING_CATEGORY,
		)

		if (res?.status == 200) {
			setShowButton(false)
			getAllCategories(page)
		}
	}

	const closeDeleteModal = () => {
		setShowDeleteModal(false)
	}

	const config = { type, showButton, handleDelete, closeDeleteModal }

	return <DeleteModal config={config} />
}

export default DeleteCategoryContainer
