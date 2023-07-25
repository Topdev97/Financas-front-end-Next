"use client"

import React from "react"
import CategoriesContainer from "@/containers/CategoriesContainer"
import CreateCategoryContainer from "@/containers/CreateOrUpdateCategoryContainer"
import { useCategory } from "@/hooks"
import DeleteModal from "@/components/organisms/DeleteModal"

const Categories = () => {
	const { showCreateCategoryModal, showDeleteModal } = useCategory()
	return (
		<>
			{showDeleteModal && <DeleteModal type={"categoria"} />}

			{showCreateCategoryModal && <CreateCategoryContainer />}

			<CategoriesContainer />
		</>
	)
}

export default Categories
