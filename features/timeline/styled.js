import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  animation: fadeIn;
  animation-duration: 300ms;
  display: flex;
  flex-direction: column;
  gap: var(--size);
`;

export const Item = styled.div`
  display: flex;
  gap: var(--size-xs);
  padding: var(--size-s);
`;

export const FirstCol = styled.div`
  flex: 0 0 25px;
`;

export const LastCol = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  gap: var(--size-xs);
`;

export const ActionBlock = styled.div`
  flex: 1 1 auto;
  justify-self: flex-end;
  text-align: right;
  color: var(--c-action);
  cursor: pointer;
`;
