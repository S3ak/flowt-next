import styled from "styled-components";

import Txn from "./txn";

const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: var(--size);
`;

const TxnList = ({ children, list = [], onItemClick }) => {
  return (
    <Wrapper>
      {list.map(({ title, id, value }) => (
        <Txn
          key={id}
          title={title}
          value={value}
          onClick={() => onItemClick(id)}
        />
      ))}
      {children}
    </Wrapper>
  );
};

export default TxnList;
