import { useContext } from "react";
import { Currency } from "../models/currency";
import { Title } from "./AddEditCurrency";
import { StyledDiv } from "./AddEditCurrency";
import { CurrenciesContext } from "../store/currencies-context";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarCurrencies = () => {
  const currenciesContext = useContext(CurrenciesContext);
  return (
    <Sidebar>
      <Title>Currency List</Title>
      {currenciesContext.currencies.map((currency: Currency) => (
        <StyledDiv className="listElement" key={currency.id}>
          {currency.currencyCode}
          <DeleteButton
            className="hide"
            onClick={() => currenciesContext.removeCurrency(currency.id)}
          >
            Delete
          </DeleteButton>
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

  .hide {
    display: none;
  }

  .listElement:hover .hide {
    display: block;
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

const DeleteButton = styled.button`
  font-size: 17px;
  float: right;
  padding-right: 0px;
  color: #aba5a5;
  background-color: #eeeeee;
  border: none;
`;
