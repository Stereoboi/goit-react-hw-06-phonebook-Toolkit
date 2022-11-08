import { useSelector } from "react-redux";
import { ContactListItem } from "components/ContListItem/ContactListItem"
import { List } from "./ContactList.styled"
import { getContacts, getStatusFilter } from "redux/selectors";

const getVisibleContacts = (contacts, filter) => {
  if (filter.status === "") {
    // console.log(contacts);
    // console.log(filter);
    return contacts.userContacts
  }
  if (filter.status !== "") {
     return contacts.userContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.status.toLowerCase())
  );
  }
}


export const ContactList = () => {

  const contacts = useSelector(getContacts);
  // console.log(contacts.userContacts);
  // console.log(contacts.contacts);
  const filter = useSelector(getStatusFilter);
  // console.log(filter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  // getVisibleContacts(contacts, filter)
  return (
      <List >  
        {visibleContacts.map(contact => (
          <ContactListItem
          contact={contact}  
          key={contact.id}
        />
        ))}
    </List>
    )
}

// import PropTypes from 'prop-types';
// import { ContactListItem } from "components/ContListItem/ContactListItem"
// import { List } from "./ContactList.styled"

// export const ContactList = ({ contacts, onDeleteContact }) => (
//   <List>
//     {contacts.map(contact => (
//       <ContactListItem
//       key={contact.id}
//       name={contact.name}
//       number={contact.number}
//       id={contact.id}
//       onDeleteContact={onDeleteContact} 
//       />
//     ))}
//   </List>
// )

//   ContactList.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
//   }