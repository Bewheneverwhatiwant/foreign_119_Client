import CustomBox from "../components/CutomBox"
import CustomButton from "../components/CustomButton"
import CustomColumn from "../components/CustomColumn"
import CustomFont from "../components/CustomFont"

function ResultDiv() {

	return (
		<CustomBox $backgroundcolor="red" $width="80%" $height="40vh" $borderradius="1rem" $padding="1rem" $justifycontent="center" $gap="1rem">
			<CustomColumn $width="100%" $height="70vh" $alignitems="center" $justifycontent="center">
				<CustomFont $color="white" $font="1rem">여기에 응답 결과 출력</CustomFont>
			</CustomColumn>

			<CustomButton $backgroundColor="#282828" $padding="1rem 0.5rem">
				<CustomFont $color="white" $font="1rem" $fontweight="bold">Got it</CustomFont>
			</CustomButton>
		</CustomBox>
	)
}

export default ResultDiv
