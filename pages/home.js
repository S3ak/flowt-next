import Head from "next/head";

import s from "../styles/Splash.module.css";
import u from "../styles/Utility.module.css";
import Section from "../components/section";
import Avatar from "../components/avatar";
import Menu from "../features/menu";

export default function Home() {
  const username = "username";

  const timeline = [
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
    <div className={u.lApp}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Section>
          <h1>Hey {username}</h1>

          <hr />

          <div>
            <ul>
              {timeline.map(({ id, userId, message, action }) => {
                return (
                  <li key={id}>
                    <Avatar />

                    <p>{message}</p>

                    <p>
                      <small>{action.message}</small>
                      <div>{action.icon}</div>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Section>
      </div>
    </div>
  );
}
