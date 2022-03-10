// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './components/Form';
import Guideline from './components/Guideline';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Demo_response from './components/Demo_response';
function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
    <div className='Main_div'>
<Guideline/>        
 
 <Form/></div>
 <Testimonials/>
 <Demo_response/>
    </div>
    {/* <Router><Route path="/admin" exact component={() => <Demo_response/>}/></Router> */}

    </>
    
  );
}

export default App;
