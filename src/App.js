import HomePage from './components/HomePage';
import Posts from './components/Posts';
import Gallery from './components/Gallery';
import RenderContacts from './components/RenderContacts';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contacts' element={<RenderContacts />} />
        </Routes>
    </>
  );
}

export default App;
