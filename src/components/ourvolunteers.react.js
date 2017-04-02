import React, { Component } from 'react';
import Profile from './profile.react';
import FakeShadow from './FakeShadow.react';


class OurVolunteers extends Component {
    
    
    render() {
        
        const entirebg = {
            backgroundColor:'#F5EEFD'
        }
        
        return (

        <div style={entirebg}>
          
            <div className="container-fluid">
                <FakeShadow bgcolor="#F5EEFD" />
            
                <h3 className="text-center">Our Volunteers</h3>

            <div className="row">
           <Profile 
                url="/images/dog_squares/fhs/C.jpg"
                name="C"
                description=""
            />
             <Profile 
                url="/images/dog_squares/fhs/cassie.jpg"
                name="Cassie"
                description=""
            />
                       
            <Profile 
                url="/images/dog_squares/fhs/charlie.jpg"
                name="Charlie"
                description=""
            />
            <Profile 
                url="/images/dog_squares/fhs/duggy.jpg"
                name="Duggy"
                description=""
            />
           <Profile 
                url="/images/dog_squares/fhs/heidi.jpg"
                name="Heidi"
                description=""
            />
             <Profile 
                url="/images/dog_squares/fhs/honey.jpg"
                name="Honey"
                description=""
            />
                       
            <Profile 
                url="/images/dog_squares/fhs/maisie.jpg"
                name="Maisie"
                description=""
            />
            <Profile 
                url="/images/dog_squares/fhs/ollie.jpg"
                name="Ollie"
                description=""
            />
            <Profile 
                url="/images/dog_squares/fhs/poppy.jpg"
                name="Poppy"
                description=""
            />
            <Profile 
                url="/images/dog_squares/fhs/savannah.jpg"
                name="Savannah"
                description=""
            />
            <Profile 
                url="/images/dog_squares/fhs/splash.jpg"
                name="Splash"
                description=""
            />
        </div>
            </div>
        </div>
        );
    }
}

export default OurVolunteers;



