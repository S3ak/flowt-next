import { useMemo } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

import useNav from "../../libs/nav/useNav";
import Button from "../../components/button";

import { Wrapper, List, Item, Header, Main, Footer, Toggle } from "./styled";

export default function NavigationMenu() {
  const { items, toggleNav } = useNav();

  const filteredItems = useMemo(
    () => items.filter((i) => !!i.isVisible),
    [items]
  );

  return (
    <Wrapper>
      <Header>
        <Toggle onClick={toggleNav}>
          <FaTimes />
        </Toggle>
      </Header>

      <Main>
        <List>
          {filteredItems.map(({ label, path }) => {
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

      <Footer>
        <Button href="/sign-in">Logout</Button>
      </Footer>
    </Wrapper>
  );
}
