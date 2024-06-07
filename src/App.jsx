import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Sidebar } from './Sidebar'
import { Home } from './Home';

function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <main style={{margin:'50px 0 0 50px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
      
    </Router>
      
    </>
  )
}

export default App
