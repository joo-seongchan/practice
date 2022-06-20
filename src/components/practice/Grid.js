import {
  faArrowAltCircleDown,
  faChartLine,
  faDumbbell,
  faGear,
  faHome,
  faLocationDot,
  faPersonRunning,
  faStore,
  faUser,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 10px;
  display: grid;
  grid-template-columns: 165px 165px;
  row-gap: 20px;
  justify-content: space-between;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Textwrap = styled.div`
  color: white;
  h1 {
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 10px;
  }
  p {
    font-size: 10px;
    font-weight: 100;
    letter-spacing: -2px;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  background-color: #67d4fe;
  right: 15px;
  bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 165px;
  height: 150px;
  background-color: #3dc7fe;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  &:nth-child(1) > ${Icon} {
    font-size: 24px;
  }
`;

// const El = (props) => {
//   return (
//     <Wrap>
//       <Textwrap>
//         <h1>{props.title}</h1>
//         <p>{props.sub}</p>
//       </Textwrap>
//       <Icon>{props.icon}</Icon>
//     </Wrap>
//   );
// };

export const Grid = ({ grid }) => {
  return (
    <Container>
      {grid.map((box) => (
        <Wrap key={box.id}>
          <Textwrap>
            <h1>{box.title}</h1>
            <p>{box.sub}</p>
          </Textwrap>
          <Icon>{box.icon}</Icon>
        </Wrap>
      ))}
    </Container>
  );
};
