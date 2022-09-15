import styled from "styled-components";

export const AddEditCurrency = () => {
  return (
    <form>
      <Title>Add Currency</Title>
      <AddEditDiv>
        <Label>Currency Code</Label>
        <Input />
      </AddEditDiv>
      <AddEditDiv>
        <Label>Currency symbol</Label>
        <Input />
      </AddEditDiv>
      <Button>SUBMIT</Button>
    </form>
  );
};

const AddEditDiv = styled.div`
  border-bottom: 1px solid #d8d8d8;
`;

// const AddEditForm = styled.form``;

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
  margin-left: 743px;
`;
