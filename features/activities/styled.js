import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  animation: fadeIn;
  animation-duration: 300ms;
  display: flex;
  flex-direction: column;
  gap: var(--size);
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size);
`;

export const FirstRow = styled.div`
  flex: 1 1 auto;
  display: flex;
  gap: var(--size);
  flex-wrap: wrap;
`;

const colMixin = css`
  display: flex;
  flex-direction: column;
  gap: var(--size);
`;

export const FirstCol = styled.div`
  flex: 1 1 50%;
  ${colMixin};
`;

export const LastCol = styled.div`
  flex: 1 1 50%;
  ${colMixin};
`;

export const LastRow = styled.div`
  flex: 1 1 auto;
  display: flex;
`;

export const Divider = styled.div`
  background: var(--c-accent);
  width: 2px;
  height: 100%;
`;

export const Col = styled.div`
  flex: 1 1 auto;
  ${colMixin};
`;
