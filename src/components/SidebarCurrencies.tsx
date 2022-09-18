import { useContext } from "react";
import { Currency } from "../models/currency";
import { Title } from "./AddEditCurrency";
import { StyledDiv } from "./AddEditCurrency";
import { CurrenciesContext } from "../store/currencies-context";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarCurrencies = () => {
  const currenciesContext = useContext(CurrenciesContext);
  return (
    <Sidebar>
      <Title>Currency List</Title>
      {currenciesContext.currencies.map((currency: Currency) => (
        <StyledDiv className="listElement" key={currency.id}>
          {" "}
          {currency.currencyCode}{" "}
        </StyledDiv>
      ))}
      <StyledDiv className="listElement">
        <StyledLink to={"currencies/add"}>
          <Circle disabled>+</Circle>
          ADD CURRENCY
        </StyledLink>
      </StyledDiv>
    </Sidebar>
  );
};

const Sidebar = styled.aside`
  position: fixed;
  width: 420px;
  height: 100vh;
  background: #eeeeee;
  padding-left: 30px;
  padding-right: 30px;

  .listElement {
    font-size: 17px;
    padding-top: 25px;
    padding-bottom: 22px;
  }
`;

const StyledLink = styled(Link)`
  color: #ff6600;
  text-decoration: none;
  font-weight: bold;
`;

const Circle = styled.button`
  font-size: 17px;
  border: 2px solid #ff6600;
  color: #ff6600;
  border-radius: 100%;
  margin: 4px;
  font-weight: 900;
`;
