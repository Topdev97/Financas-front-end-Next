"use client"

import React, { useState } from "react"
import CategoriesArea from "@/components/organisms/CategoriesArea"
import Loading from "@/components/molecules/Loading"

const CategoriesContainer = () => {
	const [showLoading] = useState(false)

	const headers = ["Categoria", "Valor destinado"]

	const config = { headers }

	return (
		<>
			{showLoading && <Loading />}

			<CategoriesArea config={config} />
		</>
	)
}

export default CategoriesContainer
