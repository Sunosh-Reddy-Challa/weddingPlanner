import './Main.css';
import { useEffect} from "react";
import Header from './components/Header';
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Plan from "./components/Plan";
import Gallery from './components/Gallery';
import Review from "./components/Review";
import Team from "./components/Team";
import Contact from './components/Contact';
import Login from "./components/Login"
import Aos from 'aos';
import "aos/dist/aos.css"
import Footer from './components/Footer';
import { useState } from 'react';
import Alert from './components/Alert';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';

function Main(props) {
  useEffect( ()=> {
    Aos.init({
      duration:800,
      delay:400
    });
    },[])
    const [clickEvent,setclickEvent] = useState(false);
  return (
    <div className="App">
        <Header />
      <Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/About">
    <About />
  </Route>
  <Route path="/Service">
    <Service />
  </Route>
   <Route path="/Plan">
    <Plan />
  </Route> 
  <Route path="/Gallery">
    <Gallery />
  </Route>
  <Route path="/Review">
    <Review />
  </Route>
  <Route path="/Team">
    <Team />
  </Route>
  <Route path="/Contact">
  <Alert clickEvent={clickEvent} setclickEvent={setclickEvent} />
    <Contact clickEvent={clickEvent} setclickEvent={setclickEvent} />
  </Route>
{/* {    <Route path="/Footer">
    <Footer />
  </Route>} */}
  <Route path="/Login">
    <Login loginstate={props.checklogin} setloginstate={props.setchecklogin}/>
  </Route>
</Switch> 
    </div>
  );
}

export default Main;
