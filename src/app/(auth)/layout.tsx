/* eslint-disable new-cap */
import "../globals.css"
import React from "react"
import type { Metadata } from "next"
import MenuSideBar from "@/components/molecules/MenuSideBar"
import AcessProvider from "@/context/AuthProvider"

export const metadata: Metadata = {
	title: "Finanças - Home",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="flex  h-screen">
				<MenuSideBar />
				<AcessProvider>{children}</AcessProvider>
			</body>
		</html>
	)
}
