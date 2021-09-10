import Link from "next/link";

import { Wrapper, List, Item } from "./styled";

export default function NavigationMenu() {
  const items = [
    {
      label: "Home",
      path: "/home",
    },
    {
      label: "Send Flowt",
      path: "/send-flowt",
    },
    {
      label: "Request Flowt",
      path: "/request-flowt",
    },
    {
      label: "Flowt Your Bowt",
      path: "/flowt",
    },
    {
      label: "Activity",
      path: "/activity",
    },
    {
      label: "Profile",
      path: "/profile",
    },
    {
      label: "Settings",
      path: "/settings",
    },
  ];

  return (
    <Wrapper>
      <List>
        {items.map(({ key, label, path }) => {
          return (
            <Item key={label}>
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
