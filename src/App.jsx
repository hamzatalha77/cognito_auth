import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Auth'
import './App.css'
import SignUp from './SignUp'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/Sign_Up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
