"use client"

import React, { useEffect } from "react"
import SettingsContainer from "@/containers/SettingsContainers"
import { hasPermission } from "@/utils/permissions"
import { useRouter } from "next/navigation"
import { Permissions } from "@/utils/enum"

const SettingsPage = () => {
	const router = useRouter()

	useEffect(() => {
		if (!hasPermission([Permissions.USER])) {
			router.push("/")
		}
	})

	return <SettingsContainer />
}

export default SettingsPage
