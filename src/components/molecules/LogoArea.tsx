import React from "react"
import { Container, H1, Paragraph } from "../atoms"
import Lottie from "lottie-react"
import animation from "../../assets/lottieFiles/animation2.json"

const LogoArea = () => {
	return (
		<Container type="logo">
			<Lottie
				animationData={animation}
				style={{ width: "30rem", marginTop: "-8rem" }}
				className="sm:hidden"
			/>

			<div className="text-center absolute xl:top-[36rem] sm:hidden top-[25rem]">
				<H1 className="">SaveMoney</H1>

				<Paragraph>A maneira inteligente de adminstrar seu dinheiro</Paragraph>
			</div>
		</Container>
	)
}

export default LogoArea
