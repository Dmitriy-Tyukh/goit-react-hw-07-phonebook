import { useDispatch, useSelector } from 'react-redux';
import ContactsList from 'components/ContactsList';
import ContactForm from 'components/ContactForm';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import Filter from 'components/Filter';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getContacts);

     useEffect(() => {
       dispatch(fetchContacts());
     }, [dispatch]);
    
  return (
    <div>
      <h1>Phonebook </h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <Toaster />
    </div>
  );
};

export default App;
