import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import AdminDashboard from './components/AdminDashboard';
import CardList from './components/CardList';
import api from './utils/api';
import auth from './utils/auth';

function App() {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      const data = await api.getCards();
      setCards(data);
    };
    fetchCards();
  }, []);

  useEffect(() => {
    const user = auth.getUser();
    setUser(user);
  }, []);

  const handleLogin = async (email, password) => {
    const user = await auth.login(email, password);
    setUser(user);
  };

  const handleSignup = async (name, email, password) => {
    const user = await auth.signup(name, email, password);
    setUser(user);
  };

  const handleLogout = () => {
    auth.logout();
    setUser(null);
  };

  const handleAddCard = async (title, description) => {
    const newCard = await api.addCard(title, description);
    setCards([...cards, newCard]);
  };

  const handleDeleteCard = async (cardId) => {
    await api.deleteCard(cardId);
    setCards(cards.filter((card) => card._id !== cardId));
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/">
            <CardList cards={cards} onDeleteCard={handleDeleteCard} />
          </Route>
          <Route exact path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route exact path="/signup">
            <Signup onSignup={handleSignup} />
          </Route>
          {user && user.isAdmin && (
            <Route exact path="/admin">
              <AdminDashboard />
            </Route>
          )}
          {user && (
            <Route exact path="/profile">
              <Profile user={user} />
            </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
