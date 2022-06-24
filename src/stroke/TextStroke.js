import styled, { keyframes } from "styled-components";

const move = keyframes`
0%{
    stroke-dashoffset: 0;
    fill:red;
}
/* 25%{
    fill: red;
} */
50%{
    stroke-dashoffset: 700;
    fill: blue;
}
/* 75%{
    fill: yellow;
} */
100%{
    stroke-dashoffset: 1400;
    fill: #1d1d1d;
}
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text {
    stroke: green;
    stroke-width: 3px;
    stroke-linejoin: round;
    cursor: pointer;
    stroke-dasharray: 700;
    fill: #1d1d1d;
    animation-duration: 3s;
    animation: ${move} 3s linear;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);
    /* animation-fill-mode: forwards; */
    /* display: none; */
  }
`;

export const TextStroke = () => {
  return (
    <Wrap>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="620"
        height="290"
        viewBox="0 0 620 290"
      >
        <text
          id="양수영_주성찬"
          data-name="양수영 주성찬"
          transform="translate(0 232)"
          font-size="150"
          font-family="NotoSansKR-Black, Noto Sans KR"
          font-weight="800"
        >
          <tspan x="0" y="0">
            KIAN84
          </tspan>
        </text>
      </svg>
    </Wrap>
  );
};
