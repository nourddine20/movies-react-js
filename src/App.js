import './App.css';
import Home from './components/Home';
import Moviedetails from './components/Moviedetails'
import Nav from './components/Nav';
import {Switch,Route,BrowserRouter as Router} from "react-router-dom"
import { createContext, useState } from 'react';
import Categories, { Loginc, Loginf} from './components/Categories';
import Searchmovie from "./components/Searchmovie"
function App() {
    // const mycontext = createContext();
    // const data =[
    //   {
    //       fullname:"noureddine aharbach",
    //       email:"noureddineaharbach@gmail.com",
    //       password:"123"
    //    },
    //    {
    //     fullname:"hamza tobi",
    //     email:"hamzatobi@gmail.com",
    //     password:"789"
    //   },
    //   {
    //     fullname:"karim sadani",
    //     email:"karimsadani@gmail.com",
    //     password:"456"
    //   }  
    // ]

   const [isclick,setisclick] = useState(false);
  return (

    <div className="App">
       <Router>
              <Nav/>
           <Switch>
                <Route exact path="/movies-react-js/" component={Home} >
                 
                 </Route>
   
                 <Route exact path="/movie-details/:id" component={Moviedetails}>
                
                 </Route>
   
                 <Route exact path="/searchmovie/:movietitle" component={Searchmovie}>
                   
                 </Route>
   
           </Switch>
             
          </Router>
          
      
         {/* <Categories/>
          */}
          
    </div>
      
  )
}

export default App;
