import { useEffect } from "react";
import CustomBox from "../components/CutomBox";
import CustomButton from "../components/CustomButton";
import CustomColumn from "../components/CustomColumn";
import CustomFont from "../components/CustomFont";

function ResultDiv({ result, onReset }: { result: string; onReset: () => void }) {
	// 컴포넌트 렌더링 시 TTS 실행
	useEffect(() => {
		if (result) {
			const utterance = new SpeechSynthesisUtterance(result);
			utterance.lang = "ko-KR"; // 한국어 설정
			window.speechSynthesis.speak(utterance);
		}
	}, [result]); // result가 변경될 때마다 실행

	return (
		<CustomBox
			$backgroundcolor="red"
			$width="80%"
			$height="40vh"
			$borderradius="1rem"
			$padding="1rem"
			$justifycontent="center"
			$gap="1rem"
		>
			<CustomColumn $width="100%" $height="70vh" $alignitems="center" $justifycontent="center">
				<CustomFont $color="white" $font="1rem">
					{result}
				</CustomFont>
			</CustomColumn>

			<CustomButton $backgroundColor="#282828" $padding="1rem 0.5rem" onClick={onReset}>
				<CustomFont $color="white" $font="1rem" $fontweight="bold">
					Got it
				</CustomFont>
			</CustomButton>
		</CustomBox>
	);
}

export default ResultDiv;
