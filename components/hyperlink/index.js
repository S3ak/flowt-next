import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.span`
  display: inline-block;

  a {
    color: var(--c-action);

    :hover {
      color: var(--c-action--hover);
    }

    :after {
      content: ' ',
      diplay: block;
      position: absolute;
      min-height: 45px;
      min-width: 45px;
    }
  }
`;

const Hyperlink = ({ children, href }) => {
  return (
    <Wrapper>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Wrapper>
  );
};

export default Hyperlink;
