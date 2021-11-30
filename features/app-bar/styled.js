import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;

  animation: fadeIn;
  animation-duration: 100ms;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--c-text--inverse);
`;

export const Item = styled.li`
  flex: 1 1 auto;
  display: flex;
  min-height: 45px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--c-accent);
  cursor: pointer;

  &:hover {
    background: var(--c-action);
  }
`;
