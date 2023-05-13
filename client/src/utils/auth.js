import api from './api';

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const register = async (formData) => {
  try {
    const res = await api.post('/api/users/register', formData);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const login = async (formData) => {
  try {
    const res = await api.post('/api/users/login', formData);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const loadUser = async () => {
  try {
    const res = await api.get('/api/users/profile');
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const updateUserProfile = async (formData) => {
  try {
    const res = await api.put('/api/users/profile', formData);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const deleteUser = async () => {
  try {
    const res = await api.delete('/api/users/profile');
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const getCards = async () => {
  try {
    const res = await api.get('/api/cards');
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const addCard = async (formData) => {
  try {
    const res = await api.post('/api/cards', formData);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const deleteCard = async (cardId) => {
  try {
    const res = await api.delete(`/api/cards/${cardId}`);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};
