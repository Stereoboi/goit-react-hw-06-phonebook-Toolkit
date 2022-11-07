import { nanoid } from "nanoid";
import { addContact, deleteContact, filterContact } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    { id: nanoid(2), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(2), name: 'Hermione Kline', number: '443-89-12'},
    { id: nanoid(2), name: 'Eden Clements', number: '645-17-79'},
    { id: nanoid(2), name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: {
    status: ""
  }
}

export const rootReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    state.contacts.push(action.payload)
  },
  [deleteContact]: (state, action) => {
    // state.contacts.filter(contact => contact.id !== action.payload.id)
    const index = state.contacts.findIndex(contact => contact.id === action.payload);
    state.contacts.splice(index, 1);
  },
  [filterContact]: (state, action) => {

    state.filter.status = action.payload.text
    }
  },
);


// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
    
//     case addContact.type: {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload,],
//       };
//     }
//     case deleteContact.type:
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== action.payload),
//     }
//     case filterContact.type:
//       return {
//         ...state,
//         filter: {
//           ...state.filter,
//           status: action.payload.text
//         }
//     }
//     default:
//       return state;
//   }
// };