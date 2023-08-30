import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import Itpage from './pages/Itpage';
import Solution from './pages/Solution';
import Challenge from './pages/Challenge';
import Vendor from './pages/Vendor';
import Success from './pages/Success';
import Where from './pages/Where';
import Foot from './pages/Foot';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
function App() {
  return (
    
    <div className='App'>
     <div> <Header/></div>
      <div><Home/></div>
      <div><Itpage/></div>
      <div><Solution/></div>
      <div><Challenge/></div>
      <div><Vendor/></div>
      <div><Success/></div>
      <div><Contact/></div>
      <div><Where/></div>
      <div><Foot/></div>
      <div><Footer/></div>
       </div>
  );
}

export default App;

