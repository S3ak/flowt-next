import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

import { Wrapper, List, Item, Header, Main, Footer, Toggle } from './styled';
import useNav from '../../libs/nav/useNav';

export default function NavigationMenu() {
  const { items, toggleNav } = useNav();

  return (
    <Wrapper>
      <Header>
        <Toggle onClick={toggleNav}>
          <FaTimes />
        </Toggle>
      </Header>

      <Main>
        <List>
          {items.map(({ label, path }) => {
            return (
              <Item key={label}>
                <Link href={path}>
                  <a>{label}</a>
                </Link>
              </Item>
            );
          })}
        </List>
      </Main>

      <Footer></Footer>
    </Wrapper>
  );
}
