import React, { useState, useEffect } from 'react';
import { getAllCards, deleteCard } from '../utils/api';
import CardList from './CardList';

const AdminDashboard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCards();

      setCards(data);
    };

    fetchData();
  }, []);

  const handleDelete = async id => {
    try {
      await deleteCard(id);

      setCards(cards.filter(card => card._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <CardList cards={cards} handleDelete={handleDelete} />
    </div>
  );
};

export default AdminDashboard;
