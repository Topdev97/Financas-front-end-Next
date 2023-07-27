"use client"

import React from "react"
import CategoriesContainer from "@/containers/CategoriesContainer"
import CreateCategoryContainer from "@/containers/CreateOrUpdateCategoryContainer"
import { useCategory } from "@/hooks"
import DeleteContainer from "@/containers/DeleteContainer"
import Loading from "@/components/molecules/Loading"

const Categories = () => {
	const { showCreateCategoryModal, showDeleteModal, showLoading } =
		useCategory()
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
