import { Wrapper, Label, ValidationMessage } from "./styled";

import Input from "../input";

export const InputField = ({
  name,
  val,
  type,
  message,
  hasError,
  isSuccess,
  onChange,
  placeholder,
}) => {
  const isMessageVisible = hasError && message;
  return (
    <Wrapper>
      <Label>{name}</Label>

      <Input
        id={name}
        name={name}
        type={type}
        value={val}
        placeholder={placeholder}
        isError={hasError}
        isSuccess={isSuccess}
        onChange={onChange}
      />

      {!!isMessageVisible && <ValidationMessage>{message}</ValidationMessage>}
    </Wrapper>
  );
};

export default InputField;
