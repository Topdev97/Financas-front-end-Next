import React from "react"
import { Container, H1, Paragraph } from "../atoms"
import Lottie from "lottie-react"
import animation from "../../assets/lottieFiles/animation2.json"

const AnimationArea = () => {
	return (
		<>
			<Container type="logoMobile">
				<Lottie animationData={animation} style={{ width: "20rem" }} />

				<div className="text-center ">
					<H1 className="">SaveMoney</H1>

					<Paragraph>
						A maneira inteligente de adminstrar seu dinheiro
					</Paragraph>
				</div>
			</Container>
		</>
	)
}

export default AnimationArea
