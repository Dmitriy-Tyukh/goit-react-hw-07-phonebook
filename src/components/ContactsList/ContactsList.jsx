import { List, Link, ButtonDelete, TextStyled } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getValue } from 'redux/selectors';
import { deleteContacts } from 'redux/operations';
import { MdClose } from 'react-icons/md';

const ContactsList = () => {
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getValue);
  const dispatch = useDispatch();

  const filterContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = Id => {
    dispatch(deleteContacts(Id));
  };

  return (
     <List>
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
              
        {filterContacts.map(({ id, name, number }) => (
          <Link key={id}>
            <div className="contact">
              <h2 className="contactName">{name}</h2>
              <p>{number}</p>
              <ButtonDelete type="button" onClick={() => handleDelete(id)}>
                <MdClose size={16} />
                <TextStyled> Delete </TextStyled>
              </ButtonDelete>
            </div>
          </Link>
        ))}
      </List>
  );
};

export default ContactsList;
