"use client"

import React from "react"
import Link from "next/link"
import Icon from "@mdi/react"
import { Tooltip } from "antd"
import { Container } from "../atoms"
import {
	mdiOrderBoolDescendingVariant,
	mdiListBoxOutline,
	mdiCogOutline,
	mdiLogout,
} from "@mdi/js"

const MenuSideBar = () => {
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
		<Container typecontainers="menuContainer">
			<Container typecontainers="menuIconContainer">
				{menu.map((m, index) => (
					<Link href={m.path} className="active:scale-90 " key={index}>
						<Tooltip title={m.name} placement="right">
							<Icon path={m.icon} size={1} className="!text-white" />
						</Tooltip>
					</Link>
				))}
			</Container>

			<Container typecontainers="logoutContainer">
				<Link href={"/"} className="active:scale-90">
					<Tooltip title="Sair" placement="right">
						<Icon path={mdiLogout} size={1} className="!text-white" />
					</Tooltip>
				</Link>
			</Container>
		</Container>
	)
}

export default MenuSideBar
