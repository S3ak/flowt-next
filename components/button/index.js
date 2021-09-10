import styled, { css } from "styled-components";
import Link from "next/link";

export const buttonMixin = css`
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
  cursor: pointer;

  :hover {
    background: var(--c-action--hover);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    ${buttonMixin};
  }
`;

const Button = ({ children, href }) => {
  return (
    <Wrapper>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Wrapper>
  );
};

export default Button;
