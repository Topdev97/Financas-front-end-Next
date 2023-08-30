import React from "react"
import { Button, Container, H1, Paragraph, Wrapper } from "../atoms"
import { useRelease } from "@/hooks"

const InformationModal = () => {
	const { setShowInfoModal } = useRelease()
	return (
		<Container type="backgroundModal">
			<Wrapper type="modal">
				<Wrapper type="actionsModal">
					<H1 color="dark_gray" size="md">
						Como utilizar o SaveMoney ?
					</H1>

					<Paragraph className="mt-3" color="gray">
						Com o SaveMoney você pode categorizar o seu salário e efetuar o
						lançamento dos seus gastos em cada categoria cadastrada. Nossa
						aplicação irá somar todas as categorias e te informar o quanto ainda
						resta do seu salário, além de somar os gastos de cada categoria e te
						informar o quanto você ainda pode gastar em cada uma.
					</Paragraph>

					<div className="mt-3 space-y-2 ">
						<Paragraph color="black">
							1- Procure a aba configurações e registre o valor do seu salário
						</Paragraph>

						<Paragraph color="black">
							2- Procure a aba categorias, crie e destine um valor para cada
							categoria
						</Paragraph>

						<Paragraph color="black">
							3- Procure a aba lançamentos e efutei seus lançamentos por
							categoria
						</Paragraph>
					</div>

					<div className="flex mt-5 justify-end">
						<Button
							borderColor="gray"
							size="lg"
							className="!text-dark_gray"
							onClick={() => setShowInfoModal(false)}>
							Fechar
						</Button>
					</div>
				</Wrapper>
			</Wrapper>
		</Container>
	)
}

export default InformationModal
