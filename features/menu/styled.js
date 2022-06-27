import styled, { css } from "styled-components";
import { unstyledListMixin } from "../../styles/globalMixins";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  margin-right: 0;
  margin-left: 0;
  animation: fadeIn;
  animation-duration: 500ms;
  display: flex;
  flex-direction: column;
  border-radius: 5px 0px 0px 5px;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: var(--size-xxs);
  ${unstyledListMixin};
`;

export const Item = styled.li`
  flex: 1 1 auto;

  a {
    display: block;
    padding: var(--size-s);
    min-height: 45px;
    min-width: 45px;
    cursor: pointer;
    color: var(--c-text--inverse);
  }

  :hover {
    color: var(--c-action--hover);
  }
`;

const sectionMixin = css`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
`;

export const Header = styled.div`
  ${sectionMixin};
  justify-content: flex-end;
`;

export const Main = styled.div`
  width: 100%;
  ${sectionMixin};
`;

export const Footer = styled.div`
  width: 100%;
  ${sectionMixin};
`;

export const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 45px;
  min-height: 45px;
  cursor: pointer;
  color: var(--c-bg);
`;
