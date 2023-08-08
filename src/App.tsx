import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import DashBoard from './Pages/DashBoard/DashBoard'

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
