import React, { useState } from "react"
import Settings from "@/components/organisms/Settings"

const SettingsContainer = () => {
	const [activeEdit, setActiveEdit] = useState(false)

	const handleEdit = () => {
		setActiveEdit(true)
	}

	const editSalary = () => {
		setActiveEdit(false)
	}

	return (
		<Settings
			activeEdit={activeEdit}
			handleEdit={handleEdit}
			editSalary={editSalary}
		/>
	)
}

export default SettingsContainer
