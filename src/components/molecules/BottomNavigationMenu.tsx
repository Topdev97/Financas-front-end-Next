"use client"

import React from "react"
import Link from "next/link"
import Icon from "@mdi/react"
import { Tooltip } from "antd"
import { Container, Wrapper } from "../atoms"
import {
	mdiOrderBoolDescendingVariant,
	mdiListBoxOutline,
	mdiCogOutline,
	mdiLogout,
} from "@mdi/js"
import { useRouter } from "next/navigation"
import { removeItems } from "@/utils/permissions"

const BottonNavigationMenu = () => {
	const router = useRouter()

	const menu = [
		{ name: "Lançamentos", path: "/lancamentos", icon: mdiListBoxOutline },
		{
			name: "Categorias",
			path: "/categorias",
			icon: mdiOrderBoolDescendingVariant,
		},
		{
			name: "Configurações",
			path: "/configuracoes",
			icon: mdiCogOutline,
		},
	]

	return (
		<Container type="bottomMenu">
			<Wrapper type="menuIcon">
				{menu.map((m, index) => (
					<Link href={m.path} className="active:scale-90 " key={index}>
						<Tooltip title={m.name} placement="right">
							<Icon path={m.icon} size={1} className="!text-white" />
						</Tooltip>
					</Link>
				))}

				<button
					onClick={() => {
						router.push("/"), removeItems()
					}}
					className="active:scale-90">
					<Tooltip title="Sair" placement="right">
						<Icon path={mdiLogout} size={1} className="!text-white" />
					</Tooltip>
				</button>
			</Wrapper>
		</Container>
	)
}

export default BottonNavigationMenu
