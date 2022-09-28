import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Currency } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../state";
import { bindActionCreators } from "@reduxjs/toolkit";

export const SidebarCurrencies = () => {
  const dispatch = useDispatch();
  const currencies = useSelector((state: State) => state.currenciesReducer);
  const { removeCurrency } = bindActionCreators(actionCreators, dispatch);
  const navigate = useNavigate();
  const navigateToEdit = (id: string) =>
    navigate(`/currencies/edit/${id}`, { replace: true });
  return (
    <Sidebar>
      <Title>Currency List</Title>
      {currencies.map((currency: Currency) => (
        <StyledDiv key={currency.id}>
          <div
            className="listElement"
            onClick={() => navigateToEdit(currency.id)}
          >
            {currency.currencyCode}
          </div>
          <DeleteButton
            className="hide"
            onClick={() => removeCurrency(currency.id)}
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
  width: 420px;
  height: calc(100vh - 54px);
  background: #eeeeee;
  padding-left: 30px;
  padding-right: 30px;

  .listElement {
    font-size: 17px;
    padding-top: 25px;
    padding-bottom: 22px;
  }

  &:hover .hide {
    display: block;
  }

  .hide {
    display: none;
  }
`;

const StyledDiv = styled.div`
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  justify-content: space-between;

  .error {
    border: 2px solid #ff6600;
  }

  & div {
    width: 100%;
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

const Title = styled.h3`
  font-weight: normal;
  border-bottom: 1px solid #ff6600;
  color: #ff6600;
  padding-bottom: 12px;
  margin-top: 30px;
  margin-bottom: 0px;
  display: block;
`;
