import { useRelease } from "@/hooks"
import { IReleaseTableConfig } from "@/utils/interface"
import React from "react"
import { Paragraph, Wrapper } from "../atoms"
import Icon from "@mdi/react"
import { mdiChevronDown, mdiChevronUp, mdiPencilBoxOutline } from "@mdi/js"
import { Dropdown } from "antd"

const ReleaseCard = ({ config }: IReleaseTableConfig) => {
	const { content } = useRelease()

	return (
		<div className="xl:hidden lg:hidden">
			{content.map((c, index) => (
				<>
					<Wrapper
						key={index}
						type="releaseContent"
						className={index % 2 == 0 ? "bg-white_one" : "bg-transparent"}>
						<Paragraph
							color="gray"
							className={config.setColorReleaseTable(index)}>
							{c.category}
						</Paragraph>

						<button
							onClick={() => config.showReleasesTable(index)}
							className={config.setColorReleaseTable(index)}>
							<Icon
								path={
									config.releaseIndex != index ? mdiChevronDown : mdiChevronUp
								}
								size={1}
							/>
						</button>
					</Wrapper>

					<hr
						className={
							config.releaseIndex != index && config.isOpen
								? " border-[0.01rem] w-full border-medium_gray opacity-50"
								: "hidden"
						}
					/>

					{config.isOpen && config.releaseIndex == index && (
						<div className="mt-2 mb-2">
							<div className="mb-5 px-10">
								<Paragraph
									color="gray"
									className={config.setColorReleaseTable(index)}>
									<span className="text-black">Valor destinado: </span>
									{config.formatValue(c.destinedValue)}
								</Paragraph>

								<Paragraph
									color="gray"
									className={config.setColorReleaseTable(index)}>
									<span className="text-black">Total gasto: </span>
									{config.formatValue(c.total)}
								</Paragraph>

								<Paragraph
									color="gray"
									className={config.setColorReleaseTable(index)}>
									<span className="text-black">Sobrando: </span>
									{config.formatValue(c.leftover)}
								</Paragraph>
							</div>

							{c.release.map((releases, index) => (
								<Wrapper type="contentReleaseTable" key={index}>
									<Paragraph color="gray">
										<span className="text-light_green">Lançamento: </span>
										{releases.name}
									</Paragraph>

									<Paragraph color="gray">
										<span className="text-light_green">Valor pago: </span>
										{config.formatValue(releases.value)}
									</Paragraph>

									<Paragraph color="gray">
										<span className="text-light_green">Data pagamento: </span>
										{config.parseDate(releases.date)}
									</Paragraph>

									<Paragraph color="gray">
										<span className="text-light_green">Localização: </span>
										{releases.locale}
									</Paragraph>

									<div className="flex">
										<Paragraph color="light_green">Ajustar: </Paragraph>

										<Dropdown
											menu={{
												items: config.menu(
													releases.idRelease,
													c.category,
													c._id,
												),
											}}
											placement="bottom"
											arrow>
											<button>
												<Icon path={mdiPencilBoxOutline} size={1} />
											</button>
										</Dropdown>
									</div>
								</Wrapper>
							))}

							<hr className="border-[0.01rem] w-full border-medium_gray mt-3 opacity-50" />
						</div>
					)}
				</>
			))}

			{content.length == 0 && (
				<Paragraph color="gray" className="text-center mt-44">
					Não há dados para essa busca no momento
				</Paragraph>
			)}
		</div>
	)
}

export default ReleaseCard
