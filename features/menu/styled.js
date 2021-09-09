import styled from "styled-components";
import { unstyledListMixin } from "../../styles/globalMixins";

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  animation: fadeIn;
  animation-duration: 500ms;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-xxs);
  ${unstyledListMixin};
`;

export const Item = styled.li`
  flex: 1 1 auto;
  padding: var(--size-s);
`;
