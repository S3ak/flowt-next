import Heading from "../../components/heading";
import Button from "../../components/button";

import {
  Wrapper,
  FirstRow,
  FirstCol,
  LastCol,
  LastRow,
  Divider,
  Col,
} from "./styled";

import TxnList from "../../components/txnList";

export default function Activities() {
  const sentTxns = [
    {
      id: "1",
      title: "Natalie",
      value: "100.00",
    },
    {
      id: "2",
      title: "Mo",
      value: "250.00",
    },
  ];

  const recievedTxns = [
    {
      id: "1",
      title: "Natalie",
      value: "100.00",
    },
    {
      id: "2",
      title: "Mo",
      value: "250.00",
    },
  ];

  const pendingTxns = [
    {
      id: "1",
      title: "Natalie",
      value: "100.00",
    },
    {
      id: "2",
      title: "Mo",
      value: "250.00",
    },
  ];

  const handleOnItemClick = (id) => {
    console.warn("id", id);
  };

  return (
    <Wrapper>
      <FirstRow>
        <FirstCol>
          <Heading>Sent</Heading>

          <TxnList list={sentTxns} onItemClick={handleOnItemClick} />

          <Button href="/send-flowt">Send Money</Button>
        </FirstCol>

        <Divider />

        <LastCol>
          <Heading>Recieved</Heading>

          <TxnList list={recievedTxns} onItemClick={handleOnItemClick} />

          <Button href="/request-flowt">Request Money</Button>
        </LastCol>
      </FirstRow>

      <LastRow>
        <Col>
          <Heading>Pending</Heading>

          <TxnList list={pendingTxns} onItemClick={handleOnItemClick} />
        </Col>
      </LastRow>
    </Wrapper>
  );
}
