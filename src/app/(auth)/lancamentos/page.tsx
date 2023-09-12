"use client"

import React from "react"
import ReleasesContainer from "@/containers/ReleasesContainer"
import Loading from "@/components/molecules/Loading"
import CreateOrUpdateReleaseContainer from "@/containers/CreateOrUpdateReleaseContainer"
import { useAsync, useRelease } from "@/hooks"
import DeleteReleaseContainer from "@/containers/DeleteReleaseContainer"
import InformationModal from "@/components/molecules/InformationModal"

const Releases = () => {
	const { showCreateReleaseModal, showDeleteModal, showInfoModal } =
		useRelease()
	const { showLoading } = useAsync()

	return (
		<>
			{showLoading && <Loading />}

			{showInfoModal && <InformationModal />}

			{showDeleteModal && <DeleteReleaseContainer />}

			{showCreateReleaseModal && <CreateOrUpdateReleaseContainer />}

			<ReleasesContainer />
		</>
	)
}

export default Releases
