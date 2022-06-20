import { useState } from "react";
import styled from "styled-components";
import sofa1 from "../../db/Img/sofa1.png";
import sofa2 from "../../db/Img/sofa2.png";
import sofa3 from "../../db/Img/sofa3.png";
import pop1 from "../../db/Img/pop1.png";
import pop2 from "../../db/Img/pop2.png";
import frame1 from "../../db/Img/frame1.png";
import frame2 from "../../db/Img/frame2.png";
import frame3 from "../../db/Img/frame3.png";

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 220px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftCon = styled.div`
  display: flex;
  justify-content: left;
`;
const Con1 = styled.div`
  width: 700px;
  height: 800px;
`;
const BgBox = styled.div`
  height: 80%;
  background-color: ${(props) => props.bg};
  position: relative;
`;
const Photo = styled.div`
  width: 200px;
  height: 250px;
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -100px;
  background: url(${(props) => props.pop}) no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PhotoWrap = styled.img``;
const Floor = styled.img`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const SofaWrap = styled.div`
  display: flex;
  height: 20%;
`;
const Sofa = styled.img`
  width: 33.33333%;
  height: 100%;
  border: 3px solid #333;
`;
const Con2 = styled.div`
  width: 50px;
  height: 800px;
  background-color: #555;
  p {
    width: 100%;
    height: 50px;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    color: white;
    font-weight: 700;
  }
`;
const Wall = styled.div`
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;
const WallColor = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: teal;
`;

const RightCon = styled.div``;
const PhotoFrameWrap = styled.div`
  display: flex;
  width: 700px;
  height: 180px;
  /* background-color: yellowgreen; */
  margin-bottom: 35px;
  p {
    width: 40px;
    height: 100%;
    font-size: 25px;
    background-color: white;
    display: flex;
    writing-mode: vertical-rl;
    justify-content: center;
    align-items: center;
    letter-spacing: 12px;
    font-weight: 600;
  }
`;
const PhotoFrame = styled.img`
  width: 220px;
  height: 100%;
  background-color: lightgray;
`;
const PopArtWrap = styled.div``;
const PopArt = styled.div`
  width: 700px;
  height: 280px;
  border: 1px solid black;
  margin-bottom: 25px;
  display: flex;

  &:last-child {
    margin-bottom: 0;
  }
`;
const Img = styled.img`
  width: 40%;
  height: 100%;
`;
const TitleWrap = styled.div`
  margin-left: 10px;
  h1 {
    font-size: 40px;
    font-weight: 700;
    margin: 30px 0;
  }
  p {
    font-size: 16 px;
    opacity: 0.5;
    line-height: 30px;
  }
`;

export const ClickHomework = () => {
  const [floor, setFloor] = useState(sofa3);
  const [wall, setWall] = useState("lightgray");
  const [popart, setPopart] = useState(pop1);
  const [frame, setFrame] = useState(frame1);

  return (
    <Section>
      <Container>
        <LeftCon>
          <Con1>
            <BgBox bg={wall}>
              <Photo pop={popart}>
                <PhotoWrap src={frame}></PhotoWrap>
              </Photo>
              <Floor src={floor} />
            </BgBox>
            <SofaWrap>
              <Sofa src={sofa1} onClick={() => setFloor(sofa1)} />
              <Sofa src={sofa2} onClick={() => setFloor(sofa2)} />
              <Sofa src={sofa3} onClick={() => setFloor(sofa3)} />
            </SofaWrap>
          </Con1>
          <Con2>
            <p>벽지</p>
            <Wall>
              <WallColor
                style={{ backgroundColor: "white" }}
                onClick={() => setWall("white")}
              />
              <WallColor
                style={{ backgroundColor: "lightgray" }}
                onClick={() => setWall("lightgray")}
              />
              <WallColor
                style={{ backgroundColor: "gray" }}
                onClick={() => setWall("gray")}
              />
              <WallColor
                style={{ backgroundColor: "#9acc79" }}
                onClick={() => setWall("#9acc79")}
              />
              <WallColor
                style={{ backgroundColor: "#2e1b0d" }}
                onClick={() => setWall("#2e1b0d")}
              />
            </Wall>
          </Con2>
        </LeftCon>
        <RightCon>
          <PhotoFrameWrap>
            <p>액자설정</p>
            <PhotoFrame src={frame1} onClick={() => setFrame(frame1)} />
            <PhotoFrame src={frame2} onClick={() => setFrame(frame2)} />
            <PhotoFrame src={frame3} onClick={() => setFrame(frame3)} />
          </PhotoFrameWrap>
          <PopArtWrap>
            <PopArt onClick={() => setPopart(pop1)}>
              <Img src={pop1} />
              <TitleWrap>
                <h1>별이 빛나는 부동산</h1>
                <p>
                  대한민국의 상징적인 보물은 부동산이 아닐까 싶다. 그 중에서도
                  한강의 아파트가 단연 돋보인다.
                  <br />
                  하늘에 떠있는 반짝이는 무수한 별처럼모두가 바라보고 꿈꾸는
                  한강변 아파트.
                </p>
              </TitleWrap>
            </PopArt>
            <PopArt onClick={() => setPopart(pop2)}>
              <Img src={pop2} />
              <TitleWrap>
                <h1>욕망의 자화상</h1>
                <p>
                  슬픈 건지, 기쁜건지 매일같이 마주하는 감정들이지만 나도모르는
                  내감정.
                  <br />
                  어떤 상황에서도 마냥 잘보이고 싶고, 늘 사랑받고 싶었다.
                </p>
              </TitleWrap>
            </PopArt>
          </PopArtWrap>
        </RightCon>
      </Container>
    </Section>
  );
};
