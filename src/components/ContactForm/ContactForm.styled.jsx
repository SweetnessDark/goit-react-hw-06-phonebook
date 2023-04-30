import styled from 'styled-components';
import { Field } from 'formik';

export const Wrapper = styled.div`
  margin-bottom: 30px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
`;

export const InputForm = styled(Field)`
  padding: 5px 10px;
  width: 100%;
  font-size: 24px;
  color: powderblue;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  background-color: dimgray;
`;

export const AddBtn = styled.button`
  padding: 10px 25px;
  font-size: 24px;
  font-weight: 500;
  color: cyan;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid powderblue;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    color: white;
    background-color: dimgray;
  }
`;
