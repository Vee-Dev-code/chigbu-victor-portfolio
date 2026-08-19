import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';




function App() {
  
  return (
    <>
      <section id="center">
        <Routes>
      <Route path="/" element={<Home />} /> 
       </Routes>
      
      </section>

    </>
  )
}

export default App
