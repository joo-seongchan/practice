import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${mainStyle.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  background-color: ${mainStyle.backgroundColor};
  .link {
    display: block;
    width: 30%;
    text-decoration: none;
  }
`;

const ConWrap = styled.div`
  width: 100%;
  color: ${mainStyle.color};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  .photo {
    height: 300px;
  }
`;

const TextWrap = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
`;

const Con = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 100;
`;

export const Homework = ({ ftl }) => {
  return (
    <>
      <Container>
        <Wrap>
          {ftl.map((language) => (
            <a href={language.link} key={language.id} className="link">
              <ConWrap>
                <img src={language.img} className="photo" />
                <TextWrap>
                  <Title>{language.title}</Title>
                  <Con>{language.contents}</Con>
                </TextWrap>
              </ConWrap>
            </a>
          ))}
        </Wrap>
      </Container>
    </>
  );
};
