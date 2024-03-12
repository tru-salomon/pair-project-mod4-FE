import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Superhero_Profiles from './components/Superhero Profiles';
import Navbar from './components/NavBar';
import NewHeroForm from './components/NewHeroform';
import SuperheroDetails from './components/SuperheroDetails';
import EditHeroForm from './components/EditHeroForm';
import NotFound from './components/NotFound';
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/superheroes' element={<Superhero_Profiles />} />
          <Route path='/new' element={<NewHeroForm />} />
          <Route path='/superhero/:key' element={<SuperheroDetails />} />
          <Route path='/superhero/:key/edit' element={<EditHeroForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}


export default App