import { ErrorMessage, Form, Formik } from 'formik';
import { customAlphabet } from 'nanoid';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import React from 'react';
import { AddBtn, InputForm, Label, Wrapper } from './ContactForm.styled';
import { selectorContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { toast } from 'react-hot-toast';

const nanoid = customAlphabet('1234567890', 3);

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  number: Yup.number().min(4).required(),
});

const initialValues = {
  id: '',
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id-' + nanoid(),
      name: values.name,
      number: values.number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      return toast.error(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <Wrapper>
            <Label htmlFor="name">Name:</Label>
            <InputForm name="name" type="text" id="name" />
            <ErrorMessage name="name" component="div" />
          </Wrapper>

          <Wrapper>
            <Label htmlFor="number">Number:</Label>
            <InputForm name="number" type="tel" id="number" />
            <ErrorMessage name="number" component="div" />
          </Wrapper>

          <AddBtn type="submit">Add contact</AddBtn>
        </Form>
      </Formik>
    </>
  );
};

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
