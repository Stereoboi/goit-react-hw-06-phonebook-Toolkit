// import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { Button, ListItem } from '../ContactList/ContactList.styled'
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  // console.log(contact);
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ListItem >
    <span>{contact.name}:</span><span>{contact.number}</span>
      <Button
      type="button"
      onClick={handleDelete}
      >
      <BsTrash size="20" />
      </Button>
  </ListItem>
  )
}


ContactListItem.propTypes = {
  contact: PropTypes.object,
}
  


// import PropTypes from 'prop-types';
// import { Button, ListItem } from '../ContactList/ContactList.styled'
// import { BsTrash } from "react-icons/bs";


// export const ContactListItem = ({ id, name, number, onDeleteContact,  }) => (
//   <ListItem key={id}>
//     <span>{name}:</span><span>{number}</span>
//     <Button type="button" onClick={() => onDeleteContact(id)}><BsTrash size="20" /></Button>
//   </ListItem>
// )

// ContactListItem.propTypes = {
//   id: PropTypes.string,
//   name: PropTypes.string,
//   number: PropTypes.string,
//   onDeleteContact: PropTypes.func,
// }



