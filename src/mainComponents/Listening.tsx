import { useState, useRef } from "react";
import StyledImg from "../components/StyledImg";
import styled, { keyframes } from "styled-components";
import ear from "../assets/icon_ear.svg";

const beatAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Beating = styled.div<{ size?: string }>`
  position: absolute;
  width: ${({ size }) => size || "10rem"};
  height: ${({ size }) => size || "10rem"};
  background-color: red;
  border-radius: 50%;
  z-index: 1;
  animation: ${beatAnimation} 1.5s infinite;
`;

const Ear = styled(StyledImg)`
  position: relative;
  z-index: 2;
`;

const Transcript = styled.div`
  max-width: 100%;
  word-wrap: break-word;
  text-align: center;
  color: white;
`;

function Listening({ onResult }: { onResult: (text: string) => void }) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // STT 함수: 음성 인식 시작 (ear 버튼 클릭 시)
  const startListening = () => {
    if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
      alert("브라우저가 음성 인식을 지원하지 않습니다.");
      return;
    }

    console.log("음성 인식 시작!");
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "ko-KR";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      // 음성 인식 결과를 업데이트
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText); // STT 결과를 화면에 표시
    };

    recognition.onend = () => {
      setIsListening(false); // 음성 인식이 종료되었음을 업데이트
    };

    recognition.onerror = (event) => {
      console.error("음성 인식 오류 발생!", event);
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true); // 음성 인식 상태 업데이트
  };

  // STT 함수: 음성 인식 종료 (ear 버튼 다시 클릭 시)
  const stopListening = () => {
    recognitionRef.current?.stop(); // 음성 인식을 종료
    setIsListening(false); // 음성 인식 상태 업데이트
    console.log("음성 인식 종료!");

    // App에서 서버(LLM)로 STT된 결과인 Text를 보내기 위해, App으로 STT 결과 전달
    if (transcript) {
      onResult(transcript); // 현재 STT로 인식된 텍스트 전달
    } else {
      console.warn("STT 결과가 없습니다.");
    }
  };

  return (
    <Wrapper>
      {/* 클릭 시 음성 인식 시작/종료 */}
      <div onClick={isListening ? stopListening : startListening}>
        {isListening && <Beating />}
        <Ear src={ear} />
      </div>
      {/* STT 결과 텍스트 표시 */}
      <Transcript>{transcript}</Transcript>
    </Wrapper>
  );
}

export default Listening;
