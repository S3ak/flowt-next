import styled from "styled-components";
import Avatar from "../../avatar";
import { FaHeart } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: var(--size-xs);
  border-bottom: 1px solid var(--c-accent);
`;

const FirstCol = styled.div`
  flex: 0 0 25px;
`;

const LastCol = styled.div`
  flex: 1 1 auto;
  display: flex;
  gap: var(--size-xs);
`;

const UserTitle = styled.h3`
  font-size: var(--f-size-m);
`;

const Value = styled.p`
  font-size: var(--f-size);
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Txn = ({
  children,
  title = "User",
  value = "0",
  onClick = () => alert("clicked"),
}) => {
  return (
    <Wrapper>
      <FirstCol>
        <Avatar />
      </FirstCol>

      <LastCol onClick={onClick}>
        <UserTitle>{title}</UserTitle>
        <Value>R {value}</Value>
        <Icon>
          <FaHeart />
        </Icon>
        {children}
      </LastCol>
    </Wrapper>
  );
};

export default Txn;
