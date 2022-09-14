import styled from "styled-components";
import logo from "../assets/logocurr.png";

export const SplitHeader = () => {
  return (
    <StyledSplitHeader>
      <LogoCurrency alt="logo" src={logo} />
      <Active className="active" href="/currencies">
        € Currencies
      </Active>
    </StyledSplitHeader>
  );
};

const StyledSplitHeader = styled.div`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  background: linear-gradient(
    to right,
    #e35b00 0px,
    #e35b00 480px,
    #ff6600 480px,
    #ff6600 1265px
  );
`;

const LogoCurrency = styled.img`
  margin-left: -600px;
`;

const Active = styled.a`
margin-left: 500px;
float: left;
color: #f2f2f2;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
}
`;
