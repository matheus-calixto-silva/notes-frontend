import axios from 'axios';
const baseUrl = 'https://agile-ravine-91166.herokuapp.com/api/notes';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(({ data }) => data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then(({ data }) => data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(({ data }) => data);
};

export default {
  getAll,
  create,
  update,
};