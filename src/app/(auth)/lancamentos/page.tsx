"use client"

import React, { useEffect } from "react"
import ReleasesContainer from "@/containers/ReleasesContainer"
import { hasPermission } from "@/utils/permissions"
import { useRouter } from "next/navigation"
import { Permissions } from "@/utils/enum"
import Loading from "@/components/molecules/Loading"
import CreateOrUpdateReleaseContainer from "@/containers/CreateOrUpdateReleaseContainer"
import { useAsync, useRelease } from "@/hooks"
import DeleteReleaseContainer from "@/containers/DeleteReleaseContainer"

const Releases = () => {
	const router = useRouter()
	const { showCreateReleaseModal, showDeleteModal } = useRelease()
	const { showLoading } = useAsync()

	useEffect(() => {
		if (!hasPermission([Permissions.USER])) {
			router.push("/")
		}
	})

	return (
		<>
			{showLoading && <Loading />}

			{showDeleteModal && <DeleteReleaseContainer />}

			{showCreateReleaseModal && <CreateOrUpdateReleaseContainer />}

			<ReleasesContainer />
		</>
	)
}

export default Releases
