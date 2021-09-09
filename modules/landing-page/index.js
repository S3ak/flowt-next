import Image from "next/image";

import s from "../../styles/Splash.module.css";
import u from "../../styles/Utility.module.css";
import ImgHero from "../../public/media/flow-logo--portrait@4x.png";

export default function LandingScene() {
  return (
    <section className={u.uForeGround}>
      <figure className={`${s.logo} animate__animated animate__fadeInUp`}>
        <Image
          src={ImgHero}
          className={s.logo}
          alt="Picture of the author"
          priority
          width="128.37px"
          height="189.19px"
        />
      </figure>
    </section>
  );
}
