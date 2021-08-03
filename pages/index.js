import Head from "next/head";
import Image from "next/Image";
import styles from "../styles/Home.module.css";
import splashStyles from "../styles/Splash.module.css";
import ImgHero from "../public/media/flow-logo--portrait@4x.png";

export default function Home() {
  return (
    <div className={splashStyles.main}>
      <Head>
        <title>Flowt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="App">
          <section className="container">
            <figure className={splashStyles.logo}>
              <Image
                src={ImgHero}
                className={splashStyles.logo}
                alt="Picture of the author"
                priority
              />
            </figure>
          </section>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
