import Link from "next/link";

import { Wrapper, List, Item } from "./styled";

export default function NavigationMenu() {
  const items = [
    {
      label: "Home",
      path: "/home",
      key: "home",
    },
    {
      label: "Send Flowt",
      path: "/send-flowt",
      key: "send",
    },
    {
      label: "Request Flowt",
      path: "/request-flowt",
      key: "request",
    },
    {
      label: "Flowt Your Bowt",
      path: "/flowt",
      key: "flowt",
    },
    {
      label: "Activity",
      path: "/activity",
      key: "activity",
    },
    {
      label: "Profile",
      path: "/profile",
      key: "profile",
    },
    {
      label: "Settings",
      path: "/settings",
      key: "settings",
    },
  ];

  return (
    <Wrapper>
      <List>
        {items.map(({ key, label, path }) => {
          return (
            <Item key={key}>
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
