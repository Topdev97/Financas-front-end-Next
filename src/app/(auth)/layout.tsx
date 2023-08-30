/* eslint-disable new-cap */
"use client"
import "../globals.css"
import React from "react"
import MenuSideBar from "@/components/molecules/MenuSideBar"
import AcessProvider from "@/context/AuthProvider"
import CategoryProvider from "@/context/CategoryProvider"
import ReleaseProvider from "@/context/ReleaseProvider"
import AsyncProvider from "@/context/AsyncProvider"
import ValidationProvider from "@/context/ValidationProvider"
import { hasPermission, removeItems } from "@/utils/permissions"
import { Permissions } from "@/utils/enum"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	if (!hasPermission([Permissions.USER])) {
		removeItems()
		location.href = "/"
	}

	return (
		<html lang="en">
			<body>
				<div className="w-[4rem]">
					<MenuSideBar />
				</div>

				<ValidationProvider>
					<AsyncProvider>
						<AcessProvider>
							<ReleaseProvider>
								<CategoryProvider>{children}</CategoryProvider>
							</ReleaseProvider>
						</AcessProvider>
					</AsyncProvider>
				</ValidationProvider>
			</body>
		</html>
	)
}
