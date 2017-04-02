import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.style.css';
import Banner from './banner.react';
import Narration from './narration.react';


class BringADog extends Component {

    constructor(props){
        super(props);
    }

    
    render() {
        const homestyle = {
            backgroundImage: "url('/images/group3_400.png')"
        }
        
        let contactus = <Link to="/contactus" style={{paddingRight:0, paddingLeft:0}}>hear from you</Link>;
        

        
        return (
<div>            


      
<Banner 
    title="Bring a dog" 
    blurb={<p><p>The dogs are the unsung heroes of Waggy Tails!</p><p> All the Waggy Tails dogs have to pass a stringent test to ensure that they are suitable for the club. This involves taking treats gently and being very calm around the Waggy Tails members and the other dogs.</p><p>The requirements are high, but the safety and success of the club rests upon these precious and talented animals. If you think you dog could be suitable, we are extremely keen to {contactus}.</p></p>}
                

            />
            
            
            
</div>            
            
            
        );
    }
}


export default BringADog;




