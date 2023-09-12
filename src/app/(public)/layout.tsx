/* eslint-disable new-cap */
import "../globals.css"
import React from "react"
import AcessProvider from "@/context/AuthProvider"
import AsyncProvider from "@/context/AsyncProvider"
import ValidationProvider from "@/context/ValidationProvider"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<ValidationProvider>
					<AsyncProvider>
						<AcessProvider>{children}</AcessProvider>
					</AsyncProvider>
				</ValidationProvider>
			</body>
		</html>
	)
}
