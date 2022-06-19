import Login from './pages/login'
import Chat from './pages/chat'
import { Route, HashRouter, Routes } from 'react-router-dom'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Chat/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </HashRouter>
  )
}