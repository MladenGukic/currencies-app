import { useContext } from "react";
import { useFormik } from "formik";
import { CurrenciesContext } from "../store/currencies-context";
import * as Yup from "yup";
import styled from "styled-components";

export const AddEditCurrency = () => {
  const currenciesContext = useContext(CurrenciesContext);

  const uniqueChecker = (val?: string) => {
    for (let i = 0; i <= currenciesContext.currencies.length; i++) {
      if (currenciesContext.currencies[i].currencyCode === val) {
        return false;
      }
      return true;
    }
  };

  const CurrencySchema = Yup.object().shape({
    currencyCode: Yup.string()
      .required("This field is required.")
      .test(
        "unique",
        "The currency already exists.",
        (val) => uniqueChecker(val)!
      )
      .test("len", "Must be exactly 3 characters.", (val) => val?.length === 3),

    currencySymbol: Yup.string()
      .required("This field is required.")
      .test("len", "Must be exactly 1 symbol.", (val) => val?.length === 1),
  });

  const formik = useFormik({
    initialValues: { currencyCode: "", currencySymbol: "" },
    onSubmit: () => {
      currenciesContext.addCurrency(values.currencyCode, values.currencySymbol);
      values.currencyCode = "";
      values.currencySymbol = "";
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
  } = formik;

  return (
    <AddEditForm onSubmit={handleSubmit}>
      <Title>Add Currency</Title>
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
      <Button type="submit">SUBMIT</Button>
    </AddEditForm>
  );
};

export const StyledDiv = styled.div`
  border-bottom: 1px solid #d8d8d8;

  .error {
    border: 2px solid #ff6600;
  }
`;

const AddEditForm = styled.form`
  display: inline-block;
  margin-left: 480px;
  padding-left: 30px;
`;

export const Title = styled.h3`
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
  margin-left: 743px;
`;

const Error = styled.p`
  font-size: 17px;
  color: #ff6600;
  margin-left: 465px;
  margin-top: 0px;
`;
