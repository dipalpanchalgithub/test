import './App.css';
// import CounterButton from './Components/CounterButton';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import Carousel from './Components/Carousel';



function App() {
  return (
    <>
    
       <Navbar title={"Textify"} aboutLink={'About US'}/>
        {/* <Carousel/> */}
        <TextForm/>

        {/* <CounterButton/> */}
  
    </>
  );

}

export default App;
