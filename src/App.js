import HomePage from './components/HomePage';
import Posts from './components/Posts';
import Gallery from './components/Gallery';
import RenderContacts from './components/RenderContacts';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <>
      <header className='header'>
          <Link to='/' className="navlink">Home</Link>
          <Link to='/posts' className="navlink">Posts</Link>
          <Link to='/gallery' className="navlink">Gallery</Link>
          <Link to='/contacts' className="navlink">Contacts</Link>
      </header>
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
