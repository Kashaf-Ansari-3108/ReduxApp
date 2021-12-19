import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddBook from './pages/AddBook';
import BookList from './pages/BookList';
import ResponsiveAppBar from './components/NavBar';

export default function App() {
  return (
    <Router>
      <div>
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/addbook" element ={<AddBook/>} />
          <Route path="/booklist" element ={<BookList/>} />
         
        </Routes>
      </div>
    </Router>
  );
}
