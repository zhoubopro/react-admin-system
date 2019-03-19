const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3000';

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const getAll = () =>
  fetch(`${api}/mockapi/contacts/list`, { headers })
    .then(res => res.json())
    .then(data => data.result.contacts);

export const remove = (contact) =>
  fetch(`${api}/mockapi/contacts/list/${contact.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.contact);

export const create = (body) =>
  fetch(`${api}/mockapi/contacts/list/`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json());
