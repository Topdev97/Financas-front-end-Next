"use client"

import React, { useEffect } from "react"
import ReleasesContainer from "@/containers/ReleasesContainer"
import type { Metadata } from "next"
import { hasPermission } from "@/utils/permissions"
import { useRouter } from "next/navigation"
import { Permissions } from "@/utils/enum"
import Loading from "@/components/molecules/Loading"
import CreateOrUpdateReleaseContainer from "@/containers/CreateOrUpdateReleaseContainer"
import { useAsync, useRelease } from "@/hooks"

export const metadata: Metadata = {
	title: "Finanças - Lançamentos",
}

const Releases = () => {
	const router = useRouter()
	const { showCreateReleaseModal } = useRelease()
	const { showLoading } = useAsync()

	useEffect(() => {
		if (!hasPermission([Permissions.USER])) {
			router.push("/")
		}
	})

	return (
		<>
			{showLoading && <Loading />}

			{showCreateReleaseModal && <CreateOrUpdateReleaseContainer />}

			<ReleasesContainer />
		</>
	)
}

export default Releases
