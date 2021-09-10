import styled from "styled-components";
import { FaUser } from "react-icons/fa";

const Wrapper = styled.div`
  margin: auto;
  min-width: 25px;
  min-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--c-accent);
  border-radius: 100%;
  background: var(--c-info);
`;

const Circle = styled.div`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = ({ children }) => {
  return (
    <Wrapper>
      <Circle>
        <FaUser />
        {children}
      </Circle>
    </Wrapper>
  );
};

export default Avatar;
