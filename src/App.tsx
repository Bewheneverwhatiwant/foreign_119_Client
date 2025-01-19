import { useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

import CustomBox from "./components/CutomBox";
import CustomColumn from "./components/CustomColumn";
import NoticeBanner from "./mainComponents/NoticeBanner";
import Listening from "./mainComponents/Listening";
import ResultDiv from "./mainComponents/ResultDiv";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #09f;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: ${spinAnimation} 1s linear infinite;
`;

function App() {
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock 응답 데이터 -> 나중에 실제 서버로부터 응답받은 LLM의 답변으로 수정하기
  const mockData = [
    "환자를 바르게 눕히고 심폐소생술을 시도하세요.",
  ];

  // <Listening /> 컴포넌트에서 STT로 변환한 텍스트를 서버(LLM)에게 전달하는 함수
  const handleSTTResult = async (text: string) => {
    console.log("Listening에서 전달받은 텍스트:", text);
    setIsLoading(true);

    try {
      const endpoint = `${import.meta.env.VITE_SERVER}/llm-bot`;
      const response = await axios.post(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      // 실제 서버 응답을 받도록 한 부분을 주석 처리함 -> mockData 사용 중
      // const data = await response.json();
      // setResult(data.response);
      const mockResponse = mockData[0];
      console.log("Mock 응답값:", mockResponse);

      // LLM의 응답을 ResultDiv에게로 전달함
      setResult(mockResponse); // -> 서버 반환값을 저장할 상태관리 변수에, 임시로 mockData를 저장해둠

    } catch (error) {
      // alert("서버와의 통신 중 오류가 발생했습니다."); -> 서버 통신이 안되는 상황이므로, 에러 핸들링도 주석 처리해둔 것임
      setResult(mockData[0]); // result(LLM으로부터 받아온 응급처치 방법)가 mockData로 설정
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <CustomBox
      $backgroundcolor="transparent"
      $width="100%"
      $height="100vh"
      $borderradius="0"
      $padding="1rem"
      $justifycontent="flex-start"
    >
      <CustomColumn $width="100%" $height="70vh" $alignitems="center" $justifycontent="space-between">
        <NoticeBanner />
        {!result && <Listening onResult={handleSTTResult} />}
        {isLoading && (
          <div>
            <Loader />
          </div>
        )}
        {result && <ResultDiv result={result} onReset={handleReset} />}
      </CustomColumn>
    </CustomBox>
  );
}

export default App;
