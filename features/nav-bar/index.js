import { FaBars } from 'react-icons/fa';

import { Wrapper, LastCol, MidCol, Toggle, NavContainer } from './styled';
import NavigationMenu from '../menu';

import Title from '../../components/title';
import useNav from '../../libs/nav/useNav';

export default function NavBar() {
  const { isOpen, toggleNav, selectedItem } = useNav();
  const title = selectedItem;

  return (
    <Wrapper>
      <MidCol>
        <Title>{title}</Title>
      </MidCol>

      <LastCol>
        <Toggle onClick={toggleNav}>
          <FaBars />
        </Toggle>

        {isOpen && (
          <NavContainer>
            <NavigationMenu />
          </NavContainer>
        )}
      </LastCol>
    </Wrapper>
  );
}
