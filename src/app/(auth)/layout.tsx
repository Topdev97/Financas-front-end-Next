/* eslint-disable new-cap */
"use client"
import "../globals.css"
import React from "react"
import MenuSideBar from "@/components/molecules/MenuSideBar"
import AcessProvider from "@/context/AuthProvider"
import CategoryProvider from "@/context/CategoryProvider"
import ReleaseProvider from "@/context/ReleaseProvider"
import AsyncProvider from "@/context/AsyncProvider"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<div className="w-[4rem]">
					<MenuSideBar />
				</div>

				<AcessProvider>
					<AsyncProvider>
						<ReleaseProvider>
							<CategoryProvider>{children}</CategoryProvider>
						</ReleaseProvider>
					</AsyncProvider>
				</AcessProvider>
			</body>
		</html>
	)
}
