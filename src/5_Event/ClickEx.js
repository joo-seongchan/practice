import { useState } from "react";
import styled from "styled-components";
import bg from "../db/Img/bg.png";
import egg from "../db/Img/egg.png";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: gray;
`;
const Bg = styled.div`
  width: 500px;
  height: 600px;
  background: url(${bg});
  position: relative;
`;

const Count = styled.div`
  text-align: center;
  font-size: 100px;
  color: black;
`;

const Img = styled.div`
  width: 200px;
  height: 300px;
  position: absolute;
  bottom: 150px;
  left: 50%;
  margin-left: -100px;
  background: url(${egg}) no-repeat center/cover;
  transform: rotateZ(${(props) => props.move});
`;

export const ClickEx = () => {
  const [num, setNum] = useState(500);
  const [move, setMove] = useState("5deg");

  const handleClick = () => {
    if (move === "5deg") {
      setMove("-5deg");
    } else {
      setMove("5deg");
    }

    if (num <= 0 || typeof num === "string") {
      setNum("고생했어 ㅂ2");
      return;
    } else {
      setNum(num - 1);
    }
    console.log(typeof num);
  };
  return (
    <Wrap>
      <Count>{num}</Count>
      <Bg>
        <Img move={move} onClick={handleClick}></Img>
      </Bg>
    </Wrap>
  );
};
