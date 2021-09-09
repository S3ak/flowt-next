import styled from "styled-components";

const Button = styled.button`
  min-height: 45px;
  min-width: 100px;
  background: var(--c-action);
  color: var(--c-text--inverse);
  padding: var(--size-xs);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid transparent;
  border-radius: var(--radius-m);
  appearance: none;
  outline: 0;
`;

export default Button;
