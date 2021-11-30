import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 17px;

  background: linear-gradient(
      170.33deg,
      rgba(254, 182, 62, 0.02) 66.2%,
      rgba(254, 200, 49, 0.04) 99.05%
    ),
    linear-gradient(
      192.51deg,
      rgba(255, 255, 255, 0.87) 38.15%,
      rgba(251, 254, 255, 0.78) 73.23%
    );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);

  border-radius: 5px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 21px 0px;
`;
