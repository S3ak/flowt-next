import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: var(--content-container-width);
  padding: var(--size-l);
  background: white;
  border-radius: 16px;

  animation: fadeIn;
  animation-duration: 500ms;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size);
`;
