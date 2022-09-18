import { useContext } from "react";
import { Currency } from "../models/currency";
import { Title } from "./AddEditCurrency";
import { StyledDiv } from "./AddEditCurrency";
import { CurrenciesContext } from "../store/currencies-context";
import styled from "styled-components";

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
