import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  float: left;
  margin-right: 30px;
`;

export const FieldStyled = styled(Field)`
  display: block;
  margin: 0 0 15px 0;
  padding: 10px;
  width: 250px;
  border: 1px solid #ccc;
`;

export const ErrorMessagetyled = styled(ErrorMessage)`
  font-size: 12px;
  margin-bottom: 16px;
  color: red;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #4a4848;
`;

export const ButtonSubmit = styled.button`
  padding: 10px 30px;
  background: #f8a035;
  color: #fff;
  border: none;
`;