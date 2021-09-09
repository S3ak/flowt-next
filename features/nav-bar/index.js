import Link from "next/link";

import { Wrapper, FirstCol, LastCol } from "./styled";
import NavigationMenu from "../menu";

import Title from "../../components/title";

export default function NavBar() {
  // TODO: Create Observer
  const title = "Title";

  return (
    <Wrapper>
      <FirstCol>
        <NavigationMenu />
      </FirstCol>

      <LastCol>
        <Title>{title}</Title>
      </LastCol>
    </Wrapper>
  );
}
