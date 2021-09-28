import Image from "next/image";

import { Wrapper, Logo } from "./styled";
import ImgHero from "../../public/media/flow-logo--portrait@4x.png";

export default function Splash() {
  return (
    <Wrapper>
      <Logo>
        <Image
          src={ImgHero}
          alt="Picture of the author"
          priority
          width="128.37px"
          height="189.19px"
        />
      </Logo>
    </Wrapper>
  );
}
