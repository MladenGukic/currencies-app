import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { uniqueChecker } from "../utils";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { useEffect, useState } from "react";
import { Currency } from "../models/currency";

export const AddEditCurrency = () => {
  const dispatch = useDispatch();
  const { addCurrency } = bindActionCreators(actionCreators, dispatch);
  const currencies = useSelector((state: State) => state.currenciesReducer);
  const { id } = useParams();
  const isEditing = id !== undefined;

  const [editingCurrency, setEditingCurrency] = useState(
    currencies?.find((curr) => curr.id === id),
  );

  const resetInputs = () => {
    values.currencyCode = "";
    values.currencySymbol = "";
  };

  const CurrencySchema = Yup.object().shape({
    currencyCode: Yup.string()
      .required("This field is required.")
      .test("len", "Must be exactly 3 characters.", (val) => val?.length === 3)
      .test("unique", "The currency already exists.", (val) =>
        isEditing ? true : uniqueChecker(currencies, val),
      ),

    currencySymbol: Yup.string()
      .required("This field is required.")
      .test("len", "Must be exactly 1 symbol.", (val) => val?.length === 1),
  });

  const formik = useFormik({
    initialValues: {
      currencyCode: "",
      currencySymbol: "",
    },
    onSubmit: () => {
      if (!isEditing) {
        const newCurrency = new Currency(
          values.currencyCode,
          values.currencySymbol,
        );
        addCurrency(newCurrency);
        resetInputs();
        // } else {
        //   editCurrency({
        //     id: id,
        //     currencyCode: values.currencyCode.toUpperCase(),
        //     currencySymbol: values.currencySymbol,
        //   });
        resetInputs();
      }
    },
    validationSchema: CurrencySchema,
    validateOnMount: true,
  });

  const {
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    values,
    isValid,
    setValues,
  } = formik;

  useEffect(() => {
    setEditingCurrency(currencies?.find((curr) => curr.id === id));
    setValues({
      currencyCode: isEditing ? String(editingCurrency?.currencyCode) : "",
      currencySymbol: isEditing ? String(editingCurrency?.currencySymbol) : "",
    });
  }, [editingCurrency, id]);

  return (
    <AddEditForm onSubmit={handleSubmit}>
      <Title>{isEditing ? "Edit Currency" : "Add Currency"}</Title>
      <StyledDiv>
        <Label>Currency Code</Label>
        <Input
          name="currencyCode"
          className={!isValid && touched.currencyCode ? "error" : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.currencyCode}
        />
        {!isValid && touched.currencyCode && (
          <Error> {errors.currencyCode} </Error>
        )}
      </StyledDiv>
      <StyledDiv>
        <Label>Currency symbol</Label>
        <Input
          name="currencySymbol"
          className={!isValid && touched.currencySymbol ? "error" : ""}
          value={values.currencySymbol}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {!isValid && touched.currencySymbol && (
          <Error> {errors.currencySymbol} </Error>
        )}
      </StyledDiv>
      <Button type="submit">{isEditing ? "SAVE" : "SUBMIT"}</Button>
    </AddEditForm>
  );
};

const StyledDiv = styled.div`
  border-bottom: 1px solid #d8d8d8;

  .error {
    border: 2px solid #ff6600;
  }
`;

const AddEditForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
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

const Label = styled.label`
  font-size: 17px;
  display: inline-block;
  width: 465px;
`;

const Input = styled.input`
  height: 40px;
  width: 430px;
  margin-bottom: 12px;
  margin-top: 12px;
`;

const Button = styled.button`
  width: 160px;
  height: 40px;
  color: white;
  background-color: #ff6600;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  margin-top: 12px;
  text-transform: uppercase;
  margin-left: auto;
`;

const Error = styled.p`
  font-size: 17px;
  color: #ff6600;
  margin-top: 0px;
`;
