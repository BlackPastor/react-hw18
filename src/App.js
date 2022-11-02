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
          <Link to='/react-hw18/posts' className="navlink">Posts</Link>
          <Link to='/react-hw18/gallery' className="navlink">Gallery</Link>
          <Link to='/react-hw18/contacts' className="navlink">Contacts</Link>
      </header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/react-hw18/posts' element={<Posts />} />
          <Route path='/react-hw18/gallery' element={<Gallery />} />
          <Route path='/react-hw18/contacts' element={<RenderContacts />} />
        </Routes>
    </>
  );
}

export default App;
