import Link from "next/link";

import { Wrapper, List, Item } from "./styled";

export default function AppBar() {
  const items = [
    {
      label: "Home",
      path: "/home",
      id: "home",
    },
    {
      label: "Activity",
      path: "/activity",
      id: "activity",
    },
    {
      label: "Profile",
      path: "/profile",
      id: "profile",
    },
  ];

  return (
    <Wrapper>
      <List>
        {items.map(({ id, label, path }) => {
          return (
            <Item key={id}>
              <Link href={path}>
                <a>{label}</a>
              </Link>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
}
