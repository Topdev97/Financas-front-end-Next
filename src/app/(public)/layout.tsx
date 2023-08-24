/* eslint-disable new-cap */
import "../globals.css"
import React from "react"
import AcessProvider from "@/context/AuthProvider"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<AcessProvider>{children}</AcessProvider>
			</body>
		</html>
	)
}
