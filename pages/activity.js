import Head from "next/head";
import Link from "next/link";

import s from "../styles/Splash.module.css";
import u from "../styles/Utility.module.css";
import Avatar from "../components/avatar";

export default function Activity() {
  const outgoingTxns = [
    {
      key: "1",
      title: "@thandile",
      value: "20.00",
    },
    {
      key: "2",
      title: "@natalie",
      value: "40.00",
    },
  ];

  const incomingTxns = [
    {
      key: "1",
      title: "@Rufaro",
      value: "50.00",
    },
  ];

  const pendingTxns = [
    {
      id: "1",
      title: "@Mercy",
      value: "200.00",
      reference: "food",
    },
    {
      id: "2",
      title: "@Mo",
      value: "500.00",
      reference: "Plumbing",
    },
  ];

  return (
    <div className={u.lApp}>
      <Head>
        <title>Activity</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div>
          <h1>Flowt Activity</h1>
        </div>

        <div>
          <section>
            <h2>Sent -</h2>
            <ul>
              {outgoingTxns.map(({ key, title, value }) => {
                return (
                  <li key={key}>
                    <Avatar />
                    <p>{title}</p>
                    <p>R {value}</p>
                  </li>
                );
              })}
            </ul>

            <Link href="send-flowt">
              <a>Send</a>
            </Link>
          </section>

          <hr />

          <section>
            <h2>Recieved -</h2>
            <ul>
              {incomingTxns.map(({ key, title, value }) => {
                return (
                  <li key={key}>
                    <Avatar />
                    <p>{title}</p>
                    <p>R {value}</p>
                  </li>
                );
              })}
            </ul>

            <Link href="request-flowt">
              <a>Send</a>
            </Link>
          </section>
        </div>

        <div>
          <section>
            <h2>Pending</h2>

            <ul>
              {pendingTxns.map(({ id, title, value, reference }) => {
                return (
                  <li key={id}>
                    <Avatar />

                    <p>{title}</p>

                    <p>{value}</p>

                    <p>Reference: {reference}</p>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
