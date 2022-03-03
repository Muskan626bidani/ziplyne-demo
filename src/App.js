// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Guideline from './components/Guideline';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
    <div className='Main_div'>
<Guideline/>

         
 <Form/></div>
 <Testimonials/>
    </div></>
  );
}

export default App;
