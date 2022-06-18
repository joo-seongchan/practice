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
  .training {
    font-size: 20px;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Wrap = styled.div`
  width: 165px;
  height: 150px;
  background-color: #3dc7fe;
  border-radius: 20px;
  padding: 20px;
  position: relative;
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
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const El = (props) => {
  return (
    <Wrap>
      <Textwrap>
        <h1>{props.title}</h1>
        <p>{props.sub}</p>
      </Textwrap>
      <Icon>{props.icon}</Icon>
    </Wrap>
  );
};

export const Clone = () => {
  return (
    <Container>
      <Section>
        <El
          title="걸음"
          sub="걸음걸이측정"
          icon={<FontAwesomeIcon icon={faPersonRunning} />}
        />
        <El
          title="기록/분석"
          sub="걸음걸이 기록/분석실입니다."
          icon={<FontAwesomeIcon icon={faChartLine} />}
        />
      </Section>

      <Section>
        <El
          title="운동법"
          sub="운동방법을 알려드립니다."
          icon={<FontAwesomeIcon icon={faDumbbell} className="training" />}
        />
        <El
          title="식단"
          sub="식단 및 레시피를 알려드립니다."
          icon={<FontAwesomeIcon icon={faUtensils} />}
        />
      </Section>

      <Section>
        <El
          title="위치"
          sub="자녀의 위치를 알려드립니다."
          icon={<FontAwesomeIcon icon={faLocationDot} />}
        />
        <El
          title="마켓"
          sub="온라인마켓 연결"
          icon={<FontAwesomeIcon icon={faStore} />}
        />
      </Section>

      <Section>
        <El
          title="프로필"
          sub="자신의 프로필을 알려드립니다."
          icon={<FontAwesomeIcon icon={faUser} />}
        />
        <El title="설정" sub="" icon={<FontAwesomeIcon icon={faGear} />} />
      </Section>
    </Container>
  );
};
