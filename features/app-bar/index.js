import Link from "next/link";
import { FaHome, FaArrowsAltV, FaUser } from "react-icons/fa";

import { Wrapper, List, Item } from "./styled";

export default function AppBar() {
  const items = [
    {
      label: <FaHome />,
      path: "/home",
      id: "home",
    },
    {
      label: <FaArrowsAltV />,
      path: "/activity",
      id: "activity",
    },
    {
      label: <FaUser />,
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
