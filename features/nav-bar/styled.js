import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--size);
`;

export const FirstCol = styled.div`
  flex: 2 1 auto;
  padding: var(--size-s);
`;

export const LastCol = styled.div`
  flex: 1 1 auto;
  padding: var(--size-s);
`;
