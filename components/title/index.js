import styled from "styled-components";
import { ifProp } from "styled-tools";

const Title = styled.h1`
  margin: auto;
  width: 100%;
  font-size: var(--f-size-xxl);
  color: ${ifProp("inverse", "var(--c-text--inverse)", "var(--c-text)")};
`;

export default Title;
