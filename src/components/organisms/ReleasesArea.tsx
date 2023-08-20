import React from "react"
import { Container, Button, Paragraph, Wrapper } from "../atoms"
import { Tooltip, DatePicker } from "antd"
import { IReleasesConfig } from "@/utils/interface"
import {
	mdiHelpBoxOutline,
	mdiUnfoldMoreHorizontal,
	mdiChevronUp,
	mdiPencilBoxOutline,
	mdiChevronDown,
} from "@mdi/js"
import Icon from "@mdi/react"
import { useRelease } from "@/hooks"
import { Actions } from "@/utils/enum"

const ReleasesArea = ({ config }: IReleasesConfig) => {
	const { setShowCreateReleaseModal, setTypeAction } = useRelease()

	return (
		<Container type="container">
			<div className="flex justify-between items-center w-full mb-5">
				<div className="flex space-x-4 items-end">
					<DatePicker
						format={"MM/YYYY"}
						onChange={config.selectCurrentDate}
						picker="month"
						placeholder={`Mês e ano selecionados: ${config.currentDate}`}
						style={{
							width: "16rem",
							height: "2.5rem",
							borderRadius: "0.5rem",
							boxShadow: "0 0.3rem 0.62rem rgba(0,0,0,0.4)",
							outline: "1px solid #019267",
						}}
					/>
					<Tooltip title={config.message} placement="right">
						<Icon
							path={mdiHelpBoxOutline}
							size={1}
							className="!text-medium_gray"
						/>
					</Tooltip>
				</div>

				<Button
					size="md"
					color="green"
					onClick={() => {
						setShowCreateReleaseModal(true), setTypeAction(Actions.CREATE)
					}}>
					Criar lançamento
				</Button>
			</div>

			<Wrapper type="dataTable">
				<Wrapper type="headers">
					{config.headers.map((items, index) => (
						<Paragraph key={index} color="white">
							{items}
						</Paragraph>
					))}

					<Paragraph color="white">
						<Icon path={mdiUnfoldMoreHorizontal} size={1} />
					</Paragraph>
				</Wrapper>

				{config.content.map((r, index) => (
					<>
						<Wrapper
							key={index}
							type="releaseContent"
							className={index % 2 == 0 ? "bg-white_one" : "bg-transparent"}>
							<Paragraph color="gray">{r.category}</Paragraph>
							<Paragraph color="gray">{r.destinedValue}</Paragraph>
							<Paragraph color="gray">{r.total}</Paragraph>

							<button onClick={() => config.showReleasesTable(r.id)}>
								<Icon
									path={
										config.releaseId != r.id ? mdiChevronDown : mdiChevronUp
									}
									size={1}
								/>
							</button>
						</Wrapper>

						{config.isOpen && config.releaseId == r.id && (
							<div
								className={
									index % 2 == 0
										? "bg-gradient-to-b from-white_one to-white"
										: "bg-gradient-to-t from-white_one to-white"
								}>
								<div className="grid grid-cols-[30.5%_34%_32.5%_5%] py-3 px-8">
									{config.headerReleasesTable.map((items, index) => (
										<>
											<Paragraph key={index} color="light_green">
												{items}
											</Paragraph>
										</>
									))}
								</div>

								{r.release.map((releases, index) => (
									<div
										className="grid grid-cols-[33%_34%_32%_5%] px-10 space-y-2"
										key={index}>
										<Paragraph color="gray">{releases.name}</Paragraph>
										<Paragraph color="gray">{releases.value}</Paragraph>
										<Paragraph color="gray">{releases.date}</Paragraph>
										<button>
											<Icon path={mdiPencilBoxOutline} size={1} />
										</button>
									</div>
								))}

								<hr className=" border-[0.01rem] w-full border-medium_gray mt-3" />
							</div>
						)}
					</>
				))}
			</Wrapper>
			<h1>oi</h1>
		</Container>
	)
}

export default ReleasesArea
