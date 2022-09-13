import styled from "styled-components";
import logo from "../logocurr.png";

export const SplitHeader = () => {
  return (
    <StyledSplitHeader>
      <body>
        <div className="topnav">
          <img src={logo} alt="Logo" className="logo" />
          <a className="active" href="/currencies">
            € Currencies
          </a>
        </div>
      </body>
    </StyledSplitHeader>
  );
};

const StyledSplitHeader = styled.body`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;

  .logo {
    margin-left: -600px;
  }

  .topnav {
    overflow: hidden;

    background: linear-gradient(
      to right,
      #e35b00 0px,
      #e35b00 480px,
      #ff6600 480px,
      #ff6600 1265px
    );
  }

  .active {
    margin-left: 500px;
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
`;
