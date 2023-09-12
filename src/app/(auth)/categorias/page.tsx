"use client"

import React from "react"
import CategoriesContainer from "@/containers/CategoriesContainer"
import CreateCategoryContainer from "@/containers/CreateOrUpdateCategoryContainer"
import { useAsync, useCategory } from "@/hooks"
import DeleteCategoryContainer from "@/containers/DeleteCategoryContainer"
import Loading from "@/components/molecules/Loading"

const Categories = () => {
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
