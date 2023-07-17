/* eslint-disable new-cap */
import "../globals.css"
import React from "react"
import AcessProvider from "@/context/AuthProvider"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Finanças - Login",
}

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
