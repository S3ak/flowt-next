import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--size-xs);
  min-height: 50px;
`;

export const Label = styled.label`
  font-size: var(--f-size-xs);
`;

export const ValidationMessage = styled.p`
  color: var(--c-danger);
`;
