import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: var(--size-l);
`;

export const Form = styled.form`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: var(--size-m);
  max-width: var(--content-container-width);
  padding: var(--size-l);
  background: white;
  border-radius: 16px;
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
