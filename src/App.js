import './App.css';
import Navbar from './MyComponent/Navbar';
import Signupdiv from './MyComponent/Signupdiv';
import Main from './MyComponent/Main';
import Projectscomponent from './MyComponent/Projectscomponent';
import Footer from './MyComponent/Footer';
import About from './MyComponent/About';
import Privacypolicy from './MyComponent/Privacypolicy';
import Contactus from './MyComponent/Contactus';
import SignupForm from './MyComponent/SignupForm';
import SignInForm from './MyComponent/SiginForm';
import Charity from './MyComponent/Charity';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Router>
        <Signupdiv/>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/crowfunding_projects' element={<Projectscomponent/>}/>
          <Route path='/charity_projects' element={<Charity/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signup' element={<SignupForm/>}/>
          <Route path='/signin' element={<SignInForm/>}/>
          <Route path='/privacy' element={<Privacypolicy/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
        </Routes>
         <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
