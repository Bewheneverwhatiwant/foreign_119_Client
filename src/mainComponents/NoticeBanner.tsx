import CustomColumn from "../components/CustomColumn"
import CustomFont from "../components/CustomFont"

function NoticeBanner() {

	return (
		<CustomColumn $gap="3rem">
			<CustomFont $color="red" $font="1.5rem" $fontweight="bold">BBI-BBO-BBI-BBO</CustomFont>

			<CustomColumn $gap="0.2rem">
				<CustomFont $color="white" $font="1rem">If you have an emergency,</CustomFont>
				<CustomFont $color="white" $font="1rem">I will advise you on FIRST AID.</CustomFont>
			</CustomColumn>

			<CustomColumn $gap="0.2rem">
				<CustomFont $color="white" $font="1rem">Say like this:</CustomFont>
				<CustomFont $color="white" $font="1rem">"My finger was cut off!"</CustomFont>
				<CustomFont $color="white" $font="1rem">"I got electrocuted!"</CustomFont>
			</CustomColumn>
		</CustomColumn>
	)
}

export default NoticeBanner
