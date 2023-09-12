import { deleteReleaseApi } from "@/api/release"
import DeleteModal from "@/components/organisms/DeleteModal"
import { useAsync, useAuth, useRelease } from "@/hooks"
import { Messages } from "@/utils/enum"
import React, { useState } from "react"

const DeleteReleaseContainer = () => {
	const [type] = useState("lançamento")
	const [showButton, setShowButton] = useState(true)

	const { execute } = useAsync()
	const { userId } = useAuth()
	const {
		idRelease,
		getAllReleases,
		page,
		releaseCategory,
		setShowDeleteModal,
	} = useRelease()

	const handleDelete = async () => {
		const res: any = await execute(
			deleteReleaseApi(userId, releaseCategory, idRelease),
			Messages.SUCESS_IN_DELETING_CATEGORY,
			Messages.ERROR_DELETING_CATEGORY,
		)

		if (res?.status == 204) {
			setShowButton(false)
			getAllReleases(page)
		}
	}

	const closeDeleteModal = () => {
		setShowDeleteModal(false)
	}
	const config = { type, showButton, handleDelete, closeDeleteModal }
	return <DeleteModal config={config} />
}

export default DeleteReleaseContainer
