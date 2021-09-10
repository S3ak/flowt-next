import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: var(--content-container-width);

  animation: fadeIn;
  animation-duration: 500ms;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--size-m);
  padding: var(--size-l);
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-m);
`;

export const ActionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-xs);
`;
