import styled, { keyframes } from "styled-components";

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const move = keyframes`
0%{
    transform: perspective(300px) rotatex(0deg) ;
}
100%{
    transform: perspective(300px) rotatex(720deg) ;
}
`;

const Box = styled.div`
  position: relative;
  top: 650px;
  left: 900px;
  transform-style: preserve-3d;
  animation: ${move} linear 25s infinite;
`;
const TextWrap = styled.div`
  color: white;
  font-size: 30px;
  position: absolute;
  white-space: nowrap;
  padding: 0 10px;
  font-weight: 900;
  transform-style: preserve-3d;
  text-shadow: 0 5px 15px rgba(255, 255, 255, 0.25);
  transform: translate(-50%, -50%) rotateX(calc(${(props) => props.i}*40deg))
    translateZ(40px);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 0, 0, 0.5),
    transparent
  );
  line-height: 30px;
  /* background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  ); */
  i:nth-child(1) {
    color: #ff246f;
  }
  i:nth-child(2) {
    color: #12b5ff;
  }
`;
export const Welcome = ({ style }) => {
  return (
    <Wrap>
      <Box>
        {style.map((i) => (
          <TextWrap key={i.id} i={i.style}>
            <i>Welcom</i> To <i>KIAN</i> Page
          </TextWrap>
        ))}
      </Box>
    </Wrap>
  );
};
