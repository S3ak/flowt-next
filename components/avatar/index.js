import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: var(--content-container-width);
`;

const Circle = styled.div`
  border-radius: 100%;
  background: grey;
  width: 25px;
  height: 25px;
`;

const Avatar = () => {
  return (
    <Wrapper>
      <Circle></Circle>
    </Wrapper>
  );
};

export default Wrapper;
