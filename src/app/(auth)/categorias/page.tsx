"use client"

import React, { useEffect } from "react"
import CategoriesContainer from "@/containers/CategoriesContainer"
import CreateCategoryContainer from "@/containers/CreateOrUpdateCategoryContainer"
import { useAsync, useCategory } from "@/hooks"
import DeleteCategoryContainer from "@/containers/DeleteCategoryContainer"
import Loading from "@/components/molecules/Loading"
import { hasPermission } from "@/utils/permissions"
import { useRouter } from "next/navigation"
import { Permissions } from "@/utils/enum"

const Categories = () => {
	const router = useRouter()

	useEffect(() => {
		if (!hasPermission([Permissions.USER])) {
			router.push("/")
		}
	})

	const { showCreateCategoryModal, showDeleteModal } = useCategory()
	const { showLoading } = useAsync()

	return (
		<>
			{showLoading && <Loading />}

			{showDeleteModal && <DeleteCategoryContainer />}

			{showCreateCategoryModal && <CreateCategoryContainer />}

			<CategoriesContainer />
		</>
	)
}

export default Categories
