import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #ccccff;
  height: 150px;
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <h1>This is the footer</h1>
    </FooterContainer>
  );
}
