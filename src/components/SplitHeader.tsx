import styled from "styled-components";

export const SplitHeader = () => {
  return (
    <StyledSplitHeader>

      <LogoWrapper>
        <Logo alt="logo" src={"/logocurr.png"} />
      </LogoWrapper>
      <HeaderWrapper>
        <Home href="/currencies">€ Currencies</Home>
      </HeaderWrapper>
    </StyledSplitHeader>
  );
};

const StyledSplitHeader = styled.div`
  background: #FF6500;
  display: flex;
  align-items: center;  
`;

const Logo = styled.img`
    margin-left: 20px;
`;

const Home = styled.a`
  color: #f2f2f2;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
`;

const LogoWrapper = styled.div`
  background: #E35B00;
  width: 420px;
`

const HeaderWrapper = styled.div`
  background: #FF6500;
  margin-left: 20px;
`