import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.style.css';
import Banner from './banner.react';
import Narration from './narration.react';


class Home extends Component {

    constructor(props){
        super(props);
    }

    
    render() {
        const homestyle = {
            backgroundImage: "url('/images/group3_400.png')"
        }

        
        return (
<div>            

          
            

      
<Banner 
    title="Fun, fur, friends." 
    blurb="Waggy Tails Club helps young people with special needs receive a sense of worth, value, fun and fulfillment, with the opportunity to meet and make new like-minded friends."
    nextlink="whatwedo"
    nextlinktext="Find out more"
    bgurl="/images/group3_400.png"
            
            />
            

            
            
            
</div>            
            
            
        );
    }
}


export default Home;




