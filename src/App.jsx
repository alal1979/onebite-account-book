 import './App.css'
 import {Routes, Route} from 'react-router-dom';
 import Home from './pages/Home';
 import EditTransaction from './pages/EditTransaction';
 import NewTransaction from './pages/NewTransaction';

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new-transaction" element={<NewTransaction/>} /> 
      <Route path="/edit-transaction/:id" element={<EditTransaction/>} /> 
    </Routes>
  )
}

export default App
