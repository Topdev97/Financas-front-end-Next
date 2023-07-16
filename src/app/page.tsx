"use client"

import React, { useEffect } from "react"
import Acess from "@/components/organisms/Acess"
import { setupClient } from "@/clients/AxiosClient"

export default function Home() {
	useEffect(() => {
		setupClient(process.env.NEXT_PUBLIC_BACK)
	}, [])

	return <Acess />
}
