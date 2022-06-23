import styled, { keyframes } from "styled-components";

const Section = styled.div`
  height: 100vh;
  background-color: #1d1d1d;
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Bubbles = styled.div`
  position: relative;
  display: flex;
`;

const move = keyframes`
0%{
transform: translateY(100vh) scale(0);
}
100%{
transform: translateY(-10vh) scale(1);

}
`;

const Bubble = styled.div`
  position: relative;
  min-width: 30px;
  height: 30px;
  background-color: #24a0de;
  margin: 0 30px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #24a0de44;
  animation: ${move} 15s linear infinite;
  animation-duration: calc(125s / ${(props) => props.set});

  &:nth-child(even) {
    background-color: #6ce37c;
    box-shadow: 0 0 0 10px #6ce37c44;
    &:nth-child(5) {
      background-color: #a008df;
      box-shadow: 0 0 0 10px #a008df44;
    }
  }
`;

export const Bganimation = ({ time }) => {
  return (
    <Section>
      <Container>
        <Bubbles>
          {time.map((set) => (
            <Bubble set={set.time} key={set.id} />
          ))}
        </Bubbles>
        ;
      </Container>
    </Section>
  );
};
