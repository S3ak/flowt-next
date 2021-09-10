import { Wrapper, Item, FirstCol, LastCol, ActionBlock } from "./styled";

import Avatar from "../../components/avatar";
import Text from "../../components/text";

export default function Timeline({ children }) {
  const list = [
    {
      id: "1",
      userId: "mockUsername",
      message: "@Natalie sent you the most flowt this month.",
      action: {
        message: "Say thanks",
        icon: "icon",
      },
    },
    {
      id: "2",
      userId: "mockUsername",
      message: "@Rufaro owes you R 100.",
      action: {
        message: "Remind them",
        icon: "icon",
      },
    },
  ];

  return (
    <Wrapper>
      {list.map(({ message, id, action }) => (
        <Item key={id}>
          <FirstCol>
            <Avatar />
          </FirstCol>

          <LastCol>
            <Text>{message}</Text>
            <ActionBlock>{action.message}</ActionBlock>
          </LastCol>
        </Item>
      ))}

      {children}
    </Wrapper>
  );
}
