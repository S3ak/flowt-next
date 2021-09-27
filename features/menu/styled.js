import styled, { css } from 'styled-components';
import { unstyledListMixin } from '../../styles/globalMixins';

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  margin-right: 0;
  animation: fadeIn;
  animation-duration: 500ms;
  display: flex;
  flex-direction: column;
  background: var(--c-bg--inverse);
  border-radius: 5px 0px 0px 5px;
`;

export const List = styled.ul`
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
`;

export const Header = styled.div`
  ${sectionMixin};
`;

export const Main = styled.div`
  width: 100%;
  ${sectionMixin};
`;

export const Footer = styled.div`
  width: 100%;
  ${sectionMixin};
`;
