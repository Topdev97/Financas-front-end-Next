/* eslint-disable new-cap */
"use client"
import "../globals.css"
import React, { useEffect } from "react"
import MenuSideBar from "@/components/molecules/MenuSideBar"
import AcessProvider from "@/context/AuthProvider"
import CategoryProvider from "@/context/CategoryProvider"
import ReleaseProvider from "@/context/ReleaseProvider"
import AsyncProvider from "@/context/AsyncProvider"
import ValidationProvider from "@/context/ValidationProvider"
import { hasPermission, removeItems } from "@/utils/permissions"
import { Permissions } from "@/utils/enum"
import BottonNavigationMenu from "@/components/molecules/BottomNavigationMenu"
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	useEffect(() => {
		if (!hasPermission([Permissions.USER])) {
			removeItems()
			location.href = "/"
		}
	})

	return (
		<html lang="en">
			<body>
				<div className="w-[4rem] sm:hidden md:hidden">
					<MenuSideBar />
				</div>

				<div className="sm:block md:block hidden">
					<BottonNavigationMenu />
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
