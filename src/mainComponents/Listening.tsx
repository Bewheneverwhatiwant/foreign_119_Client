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
  justify-content: center;
  align-items: center;
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

function Listening() {
	return (
		<Wrapper>
			<Beating />
			<Ear src={ear} />
		</Wrapper>
	);
}

export default Listening;
