
// src/routes.js
import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Layout from './components/layout.react';
import App from './components/app.react';
import About from './components/about.react';
import NotFound from './components/notfound.react';
import LogIn from './components/login.react';
import SignUp from './components/signup.react';
import AllUsers from './components/allusers.react';
import LoginControl from './components/LoginControl.react';
import Home from './components/home.react';
import WhatWeDo from './components/whatwedo.react';
import WhatGoesOn from './components/whatgoeson.react';
import WhereAndWhen from './components/whereandwhen.react';
import OurDogs from './components/ourdogs.react';
import OurVolunteers from './components/ourvolunteers.react';
import Supporters from './components/supporters.react';
import BecomeAVolunteer from './components/becomeavolunteer.react';
import BringADog from './components/bringadog.react';

const Routes = (props) => (
  <Router {...props}>
  	  		
  		<Layout {...props}>

    		<Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/whatwedo" component={WhatWeDo} />
            <Route path="/whatgoeson" component={WhatGoesOn} />
            <Route path="/whereandwhen" component={WhereAndWhen} />
            <Route path="/howitallstarted" component={Home} />
    
            <Route path="/ourdogs" component={OurDogs} />
            <Route path="/ourvolunteers" component={OurVolunteers} />
            <Route path="/oursupporters" component={Supporters} />
    
            <Route path="/becomeavolunteer" component={BecomeAVolunteer} />
            <Route path="/bringadog" component={BringADog} />
            <Route path="/donate" component={Home} />
    
            <Route path="/join" component={Home} />
            <Route path="/fees" component={Home} />
            <Route path="/forms" component={Home} />
            <Route path="/contactus" component={Home} />
    
    
    
    		<Route path="/about" component={About} />
    		<Route  path="/login" component={LogIn} />
    		<Route path="/signup" component={SignUp} props={props} />
    		<Route  path="/allusers" component={AllUsers} />

    	</Layout>
    
  </Router>
);

export default Routes;



