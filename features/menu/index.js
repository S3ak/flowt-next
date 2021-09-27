import Link from 'next/link';

import { useState } from 'react';

import { Wrapper, List, Item, Header, Main, Footer } from './styled';
import useNavigation from './service.js';

export default function NavigationMenu({ defaultOpenState = false }) {
  const { items, isOpen } = useNavigation();

  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Header></Header>

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
