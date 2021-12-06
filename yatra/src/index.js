import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Routes } from './Routes/Router';
import { AuthProvider } from './Contexts/AuthContext';
import { FlightDataProvider } from "./Contexts/FlightDataContext";
import { BookingDetailsProvider } from './Contexts/BookingDetailsContext';

ReactDOM.render(
  <React.StrictMode>
    <FlightDataProvider>
    <BrowserRouter>
    <AuthProvider>
      <BookingDetailsProvider>
      <Routes/>  
      </BookingDetailsProvider>
    </AuthProvider>
    </BrowserRouter>
    </FlightDataProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
