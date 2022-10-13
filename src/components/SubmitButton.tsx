import { FC } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  primary: true;
}

export const SubmitButton: FC<Props> = () => {
  return <Button type="submit">Submit</Button>;
};

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
`;
