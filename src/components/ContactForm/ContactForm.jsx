import {FormStyled, FieldStyled, ErrorMessagetyled, Label, ButtonSubmit} from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContacts } from 'redux/operations';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(7).max(10).required(),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const {items} = useSelector(getContacts);

  const submitForm = ({ name, number }, { resetForm }) => {
    const nameContact = name;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (items.some(({ name }) => name === nameContact)) {
        alert(`${nameContact} is already in contacts.`);
        return;
    }
      
    dispatch(addContacts(newContact));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={submitForm}
    >
      <FormStyled autoComplete="off">
        <Label>
          Name
          <FieldStyled type="text" name="name" placeholder="Name" />
          <ErrorMessagetyled name="name" component="div" />
        </Label>

        <Label>
          Number
          <FieldStyled type="tel" name="number" placeholder="Number" />
          <ErrorMessagetyled component="div" name="number" />
        </Label>

        <ButtonSubmit type="submit">Add contacts</ButtonSubmit>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;