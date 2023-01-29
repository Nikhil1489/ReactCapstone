import { Route, Routes, useNavigate } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import BookingPage from './components/BookingPage';
import HomePage from './components/Homepage';
import MenuPage from './components/MenuPage';
import "./index.css";
import { fetchAPI, submitAPI } from './api';
import { useReducer } from 'react';
import OnlineOrder from './components/OnlineOrder';
import Login from './components/Login';

function App() {

  function initializeTimes() {
    return {
      times: [...fetchAPI(new Date())],
    };
  }

  function reducer(state, action) {
    const newBookingDate = action.setBookingDate;
    const newTimes = fetchAPI(newBookingDate);
    return { times: [...newTimes] };
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmation')
    }
  }

  const initialState = initializeTimes();
  const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/reservations' element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm} />} />
        <Route path='/order' element={<OnlineOrder />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
