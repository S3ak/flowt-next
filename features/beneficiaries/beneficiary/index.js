import { Wrapper, FirstCol, LastCol } from "./styled";

import Avatar from "../../../components/avatar";
import Text from "../../../components/text";

export const Beneficiary = ({ children, title }) => {
  return (
    <Wrapper>
      <FirstCol>
        <Avatar />
      </FirstCol>

      <LastCol>
        <Text>{title}</Text>
        {children}
      </LastCol>
    </Wrapper>
  );
};

export default Beneficiary;
