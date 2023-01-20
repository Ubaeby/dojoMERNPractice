import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import PersonForm from './components/PersonForm';
// import PersonList from './components/PersonList';
import axios from 'axios';
import Main from './views/Main'
import Detail from './components/Detail'
import Update from './components/Update';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route element={<Main />} path="/people" default/>
        <Route element={<Detail />} path="/people/:id" />
        <Route element={<Update />} path="people/edit/:id" />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
