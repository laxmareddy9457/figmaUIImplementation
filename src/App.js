import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loginpage from './components/Loginpage/Loginpage.jsx'
import RegisterPage from './components/RegisterPage/RegisterPage.jsx'

import './App.css'

const App = () => {
  return (
    <BrowserRouter className='main'>
      <Routes>
        <Route path='/' element={<Loginpage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App