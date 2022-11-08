// import { nanoid } from "nanoid";
// import { createAction } from "@reduxjs/toolkit";

// export const addContact = createAction("contacts/addContact", contactData => {
//   const {name, number} = contactData
//   return {
//     payload: {
//       id: nanoid(3),
//       name,
//       number,
//     },
//   };
// });

// export const deleteContact = createAction("contacts/deleteContact");

// export const filterContact = createAction("contacts/filterContact", text => {
//   return {
//     payload: {
//       text,
//     }
//   }
// });



// export const addContact = contactData => {
//   const {name, number} = contactData
//   return {
//     type: "contacts/addContact",
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };

// export const deleteContact = contactId => {
//   return {
//     type: "contacts/deleteContact",
//     payload: contactId,
//   };
// };

// export const filterContact = text => {
//   return {
//     type: "contacts/filterContact",
//     payload: {
//       text,
//     }
//   }
// }
