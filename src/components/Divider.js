import styled from "styled-components";

const Line = styled.hr`
  color: ${(props) => props.theme.blueCharcoal};
`;

export default function Divider() {
  return (
    <div style={{ width: "100%" }}>
      <Line />
    </div>
  );
}
