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
		<Container type="menu">
			<Wrapper type="menuIcon">
				{menu.map((m, index) => (
					<Link href={m.path} className="active:scale-90 " key={index}>
						<Tooltip title={m.name} placement="right">
							<Icon path={m.icon} size={1} className="!text-white" />
						</Tooltip>
					</Link>
				))}
			</Wrapper>

			<Wrapper type="logout">
				<Link href={"/"} className="active:scale-90">
					<Tooltip title="Sair" placement="right">
						<Icon path={mdiLogout} size={1} className="!text-white" />
					</Tooltip>
				</Link>
			</Wrapper>
		</Container>
	)
}

export default MenuSideBar
