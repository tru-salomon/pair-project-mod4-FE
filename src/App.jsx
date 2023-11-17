import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Superhero_Profiles from './components/Superhero Profiles';
import Navbar from './components/NavBar';
import NewHeroForm from './components/NewHeroform';
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Superhero_Profiles />} />
          <Route path='/list' element={<Superhero_Profiles />} />
          <Route path='/new' element={<NewHeroForm />} />
        </Routes>
      </Router>
    </>
  )
}


export default App