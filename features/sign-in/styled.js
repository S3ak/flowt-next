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

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--size-m);
  padding: var(--size-l);
`;

export const FormField = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
`;

export const Message = styled.small`
  width: 100%;
`;
