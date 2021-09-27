import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--size);
`;

export const FirstCol = styled.div`
  flex: 1 1 auto;
  padding: var(--size-s);
`;

export const LastCol = styled.div`
  position: relative;
  flex: 0 0 45px;
  padding: var(--size-s);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MidCol = styled.div`
  flex: 2 1 auto;
  padding: var(--size-s);
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 45px;
  min-width: 45px;
  cursor: pointer;

  :hover {
    color: var(--c-action--hover);
  }
`;

export const NavContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  right: 0;
  width: 100%;
  width: 80vw;
  height: 100%;
  height: 100vh;
`;
