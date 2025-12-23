import './App.css';
// import CounterButton from './Components/CounterButton';
// import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import Carousel from './Components/Carousel';
import { 
  BrowserRouter,
  Routes, 
  Route 
} from "react-router-dom";


function App() {
  return (
    <>
    <router>
       {/* <Navbar title='New App' aboutLink='About US'/>
        {/* <Carousel/> */}
        <TextForm/>

        {/* <CounterButton/> */}
        </router>
    </>
  );

}

export default App;
