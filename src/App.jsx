import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Skill from './component/Skill';




function App() {
  
  return (
    <>
      <section id="center">
        <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path='/Skill' element={<Skill />} />
       </Routes>
      
      </section>

    </>
  )
}

export default App
