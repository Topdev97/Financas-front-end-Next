"use client"

import React, { useEffect } from "react"
import CategoriesContainer from "@/containers/CategoriesContainer"
import CreateCategoryContainer from "@/containers/CreateOrUpdateCategoryContainer"
import { useAsync, useCategory } from "@/hooks"
import DeleteContainer from "@/containers/DeleteContainer"
import Loading from "@/components/molecules/Loading"
import type { Metadata } from "next"
import { hasPermission } from "@/utils/permissions"
import { useRouter } from "next/navigation"
import { Permissions } from "@/utils/enum"

export const metadata: Metadata = {
	title: "Finanças - Categorias",
}

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

			{showDeleteModal && <DeleteContainer />}

			{showCreateCategoryModal && <CreateCategoryContainer />}

			<CategoriesContainer />
		</>
	)
}

export default Categories
